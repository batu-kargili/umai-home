import { NextRequest, NextResponse } from "next/server";

const CONTACT_RECIPIENT_EMAIL = "contact@umaisolutions.com";
const LOOPS_TRANSACTIONAL_URL = "https://app.loops.so/api/v1/transactional";
const CONTACT_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const CONTACT_RATE_LIMIT_MAX_REQUESTS = 5;
const CONTACT_RATE_LIMIT_MIN_INTERVAL_MS = 15 * 1000;

type ContactRateLimitEntry = {
  count: number;
  lastRequestAt: number;
  resetAt: number;
};

type ContactRequestBody = {
  firstName?: unknown;
  lastName?: unknown;
  businessEmail?: unknown;
  company?: unknown;
  phoneNumber?: unknown;
  message?: unknown;
  country?: unknown;
  pageUrl?: unknown;
  website?: unknown;
};

type ContactSubmission = {
  firstName: string;
  lastName: string;
  businessEmail: string;
  company: string;
  phoneNumber: string;
  message: string;
  country: string;
  pageUrl: string;
};

type ContactValidationResult =
  | { kind: "valid"; submission: ContactSubmission }
  | { kind: "invalid" }
  | { kind: "bot" };

export const runtime = "nodejs";

function normalizeString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getRateLimitStore() {
  const globalStore = globalThis as typeof globalThis & {
    __umaiContactRateLimitStore?: Map<string, ContactRateLimitEntry>;
  };

  if (!globalStore.__umaiContactRateLimitStore) {
    globalStore.__umaiContactRateLimitStore = new Map();
  }

  return globalStore.__umaiContactRateLimitStore;
}

function pruneRateLimitStore(
  store: Map<string, ContactRateLimitEntry>,
  now: number,
) {
  if (store.size < 256) {
    return;
  }

  for (const [key, entry] of store.entries()) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

function getForwardedClientIp(request: NextRequest) {
  const forwardedFor =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-vercel-forwarded-for") ||
    "";

  return (
    forwardedFor
      .split(",")
      .map((part) => part.trim())
      .find(Boolean) || "unknown"
  );
}

function applyRateLimit(key: string) {
  const now = Date.now();
  const store = getRateLimitStore();

  pruneRateLimitStore(store, now);

  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, {
      count: 1,
      lastRequestAt: now,
      resetAt: now + CONTACT_RATE_LIMIT_WINDOW_MS,
    });

    return null;
  }

  if (now - existing.lastRequestAt < CONTACT_RATE_LIMIT_MIN_INTERVAL_MS) {
    existing.lastRequestAt = now;
    store.set(key, existing);

    return {
      retryAfterSeconds: Math.max(
        1,
        Math.ceil(CONTACT_RATE_LIMIT_MIN_INTERVAL_MS / 1000),
      ),
    };
  }

  if (existing.count >= CONTACT_RATE_LIMIT_MAX_REQUESTS) {
    return {
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((existing.resetAt - now) / 1000),
      ),
    };
  }

  existing.count += 1;
  existing.lastRequestAt = now;
  store.set(key, existing);

  return null;
}

function getRateLimitKey(clientIp: string, businessEmail: string) {
  return clientIp === "unknown"
    ? `contact:email:${businessEmail.toLowerCase()}`
    : `contact:ip:${clientIp}`;
}

function isAllowedRequestOrigin(request: NextRequest) {
  const origin = request.headers.get("origin")?.trim();

  return !origin || origin === request.nextUrl.origin;
}

function getSameOriginUrl(value: string, origin: string) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value, origin);

    if (url.origin !== origin) {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function normalizePageUrl(value: string, origin: string) {
  return getSameOriginUrl(value, origin)?.toString() ?? "";
}

function validateSubmission(body: ContactRequestBody): ContactValidationResult {
  const firstName = normalizeString(body.firstName, 100);
  const lastName = normalizeString(body.lastName, 100);
  const businessEmail = normalizeString(body.businessEmail, 320);
  const company = normalizeString(body.company, 160);
  const phoneNumber = normalizeString(body.phoneNumber, 60);
  const message = normalizeString(body.message, 5000);
  const country = normalizeString(body.country, 80);
  const pageUrl = normalizeString(body.pageUrl, 2048);
  const website = normalizeString(body.website, 200);

  if (website) {
    return { kind: "bot" };
  }

  if (
    !firstName ||
    !lastName ||
    !businessEmail ||
    !company ||
    !message ||
    !country ||
    !isValidEmail(businessEmail)
  ) {
    return { kind: "invalid" };
  }

  return {
    kind: "valid",
    submission: {
      firstName,
      lastName,
      businessEmail,
      company,
      phoneNumber,
      message,
      country,
      pageUrl,
    },
  };
}

export async function POST(request: NextRequest) {
  const loopsApiKey = process.env.LOOPS_API_KEY;
  const transactionalId = process.env.LOOPS_CONTACT_TRANSACTIONAL_ID;

  if (!loopsApiKey || !transactionalId) {
    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 500 },
    );
  }

  if (!isAllowedRequestOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const validationResult = validateSubmission(body);

  if (validationResult.kind === "bot") {
    return NextResponse.json({ success: true });
  }

  if (validationResult.kind !== "valid") {
    return NextResponse.json(
      { error: "Please fill out all required fields with valid details." },
      { status: 400 },
    );
  }

  const submission = validationResult.submission;
  const forwardedClientIp = getForwardedClientIp(request);
  const rateLimitResult = applyRateLimit(
    getRateLimitKey(forwardedClientIp, submission.businessEmail),
  );

  if (rateLimitResult) {
    return NextResponse.json(
      { error: "Too many contact form submissions. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": rateLimitResult.retryAfterSeconds.toString(),
        },
      },
    );
  }

  const submittedAt = new Date().toISOString();
  const ipAddress = forwardedClientIp;
  const referer = request.headers.get("referer")?.trim() || "";
  const pageUrl =
    normalizePageUrl(submission.pageUrl, request.nextUrl.origin) ||
    normalizePageUrl(referer, request.nextUrl.origin) ||
    `${request.nextUrl.origin}/contact`;
  const requestContext = [
    `Page URL: ${pageUrl}`,
    `Submission channel: Website contact form`,
    `Forwarded client IP: ${ipAddress}`,
    `Forwarded IP is derived from edge headers and must be treated as unverified metadata.`,
  ].join("\n");

  const submissionDetails = [
    `Submitted at: ${submittedAt}`,
    `First name: ${submission.firstName}`,
    `Last name: ${submission.lastName}`,
    `Business email: ${submission.businessEmail}`,
    `Company: ${submission.company}`,
    `Phone number: ${submission.phoneNumber || "Not provided"}`,
    `Country: ${submission.country}`,
    "",
    "Comments / questions:",
    submission.message,
    "",
    "Request context:",
    requestContext,
  ].join("\n");

  let loopsResponse: Response;

  try {
    loopsResponse = await fetch(LOOPS_TRANSACTIONAL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loopsApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        email: CONTACT_RECIPIENT_EMAIL,
        transactionalId,
        dataVariables: {
          emailSubject: `New UMAI contact inquiry from ${submission.company}`,
          firstName: submission.firstName,
          lastName: submission.lastName,
          businessEmail: submission.businessEmail,
          company: submission.company,
          phoneNumber: submission.phoneNumber || "Not provided",
          country: submission.country,
          message: submission.message,
          submittedAt,
          pageUrl,
          ipAddress,
          requestContext,
          submissionDetails,
        },
      }),
    });
  } catch (error) {
    console.error("Loops contact submission request failed", error);

    return NextResponse.json(
      { error: "We could not send your inquiry right now. Please try again." },
      { status: 502 },
    );
  }

  if (!loopsResponse.ok) {
    console.error("Loops contact submission failed", {
      status: loopsResponse.status,
    });

    return NextResponse.json(
      { error: "We could not send your inquiry right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
