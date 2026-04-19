export type CookieConsentStatus = "accepted" | "required" | "custom";
export type OptionalCookieCategory = "analytics" | "preferences" | "marketing";
export type CookieCategory = "necessary" | OptionalCookieCategory;

export interface CookieCategoryState {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

export interface CookieConsentRecord {
  version: number;
  status: CookieConsentStatus;
  updatedAt: string;
  categories: CookieCategoryState;
}

export const COOKIE_CONSENT_STORAGE_KEY = "umai-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "umai_cookie_consent";
export const COOKIE_CONSENT_EVENT = "umai:cookie-consent-changed";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export const REQUIRED_COOKIE_CATEGORIES: CookieCategoryState = {
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false,
};

export const ACCEPT_ALL_COOKIE_CATEGORIES: CookieCategoryState = {
  necessary: true,
  analytics: true,
  preferences: true,
  marketing: true,
};

export const COOKIE_CATEGORY_DETAILS: Array<{
  key: CookieCategory;
  label: string;
  shortLabel: string;
  description: string;
  required: boolean;
  examples: string[];
}> = [
  {
    key: "necessary",
    label: "Strictly necessary cookies",
    shortLabel: "Necessary",
    description:
      "Required to remember your consent choice, keep the website secure, and deliver pages reliably.",
    required: true,
    examples: [
      "Consent selection storage",
      "Security and routing safeguards",
      "Session continuity for requested actions",
    ],
  },
  {
    key: "analytics",
    label: "Analytics cookies",
    shortLabel: "Analytics",
    description:
      "Help us understand page performance and aggregate traffic patterns so we can improve content and navigation.",
    required: false,
    examples: [
      "Page view measurement",
      "Aggregated traffic trends",
      "Performance diagnostics",
    ],
  },
  {
    key: "preferences",
    label: "Preference cookies",
    shortLabel: "Preferences",
    description:
      "Remember optional display and experience settings so the site can adapt to your choices on future visits.",
    required: false,
    examples: [
      "Interface display choices",
      "Dismissed notices",
      "Saved experience options",
    ],
  },
  {
    key: "marketing",
    label: "Marketing cookies",
    shortLabel: "Marketing",
    description:
      "Would support campaign measurement and advertising relevance if UMAI enables those tools in the future.",
    required: false,
    examples: [
      "Campaign attribution",
      "Ad performance measurement",
      "Cross-site promotion controls",
    ],
  },
];

export const COOKIE_INVENTORY: Array<{
  name: string;
  provider: string;
  category: CookieCategory;
  purpose: string;
  duration: string;
}> = [
  {
    name: COOKIE_CONSENT_COOKIE_NAME,
    provider: "UMAI",
    category: "necessary",
    purpose:
      "Stores your cookie preferences and the date of your last consent decision so the banner respects your choice.",
    duration: "180 days",
  },
];

function buildCookieConsent(
  status: CookieConsentStatus,
  categories: CookieCategoryState,
): CookieConsentRecord {
  return {
    version: COOKIE_CONSENT_VERSION,
    status,
    updatedAt: new Date().toISOString(),
    categories,
  };
}

export function normalizeCookieCategories(
  categories?: Partial<CookieCategoryState>,
): CookieCategoryState {
  return {
    necessary: true,
    analytics: Boolean(categories?.analytics),
    preferences: Boolean(categories?.preferences),
    marketing: Boolean(categories?.marketing),
  };
}

export function deriveCookieConsentStatus(
  categories: CookieCategoryState,
): CookieConsentStatus {
  if (
    categories.analytics &&
    categories.preferences &&
    categories.marketing
  ) {
    return "accepted";
  }

  if (
    !categories.analytics &&
    !categories.preferences &&
    !categories.marketing
  ) {
    return "required";
  }

  return "custom";
}

export function createRequiredCookieConsent(): CookieConsentRecord {
  return buildCookieConsent("required", REQUIRED_COOKIE_CATEGORIES);
}

export function createAcceptedCookieConsent(): CookieConsentRecord {
  return buildCookieConsent("accepted", ACCEPT_ALL_COOKIE_CATEGORIES);
}

export function createCustomCookieConsent(
  categories: Partial<CookieCategoryState>,
): CookieConsentRecord {
  const normalized = normalizeCookieCategories(categories);
  return buildCookieConsent(deriveCookieConsentStatus(normalized), normalized);
}

export function isCookieConsentGranted(
  consent: CookieConsentRecord | null,
  category: CookieCategory,
): boolean {
  if (category === "necessary") {
    return true;
  }

  return Boolean(consent?.categories[category]);
}

export function serializeCookieConsent(consent: CookieConsentRecord): string {
  return encodeURIComponent(JSON.stringify(consent));
}

export function parseCookieConsent(
  value: string | null | undefined,
): CookieConsentRecord | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsentRecord>;

    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    if (!parsed.updatedAt || typeof parsed.updatedAt !== "string") {
      return null;
    }

    if (
      parsed.status !== "accepted" &&
      parsed.status !== "required" &&
      parsed.status !== "custom"
    ) {
      return null;
    }

    const categories = normalizeCookieCategories(parsed.categories);

    return {
      version: COOKIE_CONSENT_VERSION,
      status: deriveCookieConsentStatus(categories),
      updatedAt: parsed.updatedAt,
      categories,
    };
  } catch {
    return null;
  }
}

export function readCookieConsentFromCookieString(
  cookieString: string,
): CookieConsentRecord | null {
  const cookieValue = cookieString
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_COOKIE_NAME}=`))
    ?.slice(COOKIE_CONSENT_COOKIE_NAME.length + 1);

  return parseCookieConsent(cookieValue);
}

export function readStoredCookieConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const fromStorage = parseCookieConsent(
      window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
    );

    if (fromStorage) {
      return fromStorage;
    }
  } catch {
    // Fall back to the cookie copy when localStorage is unavailable.
  }

  return readCookieConsentFromCookieString(window.document.cookie);
}

export function persistCookieConsent(consent: CookieConsentRecord): void {
  if (typeof window === "undefined") {
    return;
  }

  const serialized = serializeCookieConsent(consent);

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);
  } catch {
    // Ignore storage quota or private-mode failures and keep the cookie copy.
  }

  const secureFlag =
    window.location.protocol === "https:" ? "; Secure" : "";

  window.document.cookie = [
    `${COOKIE_CONSENT_COOKIE_NAME}=${serialized}`,
    `Max-Age=${COOKIE_CONSENT_MAX_AGE_SECONDS}`,
    "Path=/",
    "SameSite=Lax",
    secureFlag,
  ]
    .filter(Boolean)
    .join("; ");
}

export function clearCookieConsent(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // Ignore storage cleanup failures.
  }

  window.document.cookie = [
    `${COOKIE_CONSENT_COOKIE_NAME}=`,
    "Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Path=/",
    "SameSite=Lax",
  ].join("; ");
}
