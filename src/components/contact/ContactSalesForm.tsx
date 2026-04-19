"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";

const COUNTRIES = [
  "Turkey",
  "United States",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "United Arab Emirates",
  "Other",
] as const;

const FIELD_CLASS =
  "w-full rounded-[0.95rem] border border-black/12 bg-white px-4 py-3.5 text-sm text-black outline-none transition-colors placeholder:text-black/38 focus:border-landing-blue";

type FormValues = {
  firstName: string;
  lastName: string;
  businessEmail: string;
  company: string;
  phoneNumber: string;
  message: string;
  country: string;
  website: string;
};

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  businessEmail: "",
  company: "",
  phoneNumber: "",
  message: "",
  country: COUNTRIES[0],
  website: "",
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactSalesForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    if (submitState !== "idle") {
      setSubmitState("idle");
      setErrorMessage(null);
    }

    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitState("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          pageUrl: window.location.href,
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send your inquiry.");
      }

      setValues(INITIAL_VALUES);
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry.",
      );
    }
  };

  return (
    <div className="rounded-[1.8rem] border border-light-gray bg-off-white p-6 text-landing-blue-surface shadow-[0_28px_70px_rgba(0,0,0,0.34)] md:p-8 lg:p-9">
      <form className="relative space-y-4" onSubmit={handleSubmit}>
        <div
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>

        <input
          aria-label="First Name"
          name="firstName"
          type="text"
          required
          value={values.firstName}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="First Name"
        />

        <input
          aria-label="Last Name"
          name="lastName"
          type="text"
          required
          value={values.lastName}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Last Name"
        />

        <input
          aria-label="Business Email"
          name="businessEmail"
          type="email"
          required
          value={values.businessEmail}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Business Email"
        />

        <input
          aria-label="Company"
          name="company"
          type="text"
          required
          value={values.company}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Company"
        />

        <input
          aria-label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={values.phoneNumber}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Phone Number"
        />

        <textarea
          aria-label="Comments or Questions"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={`${FIELD_CLASS} min-h-[110px] resize-none`}
          placeholder="Comments/Questions"
        />

        <select
          aria-label="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          className={FIELD_CLASS}
        >
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <p className="rounded-[1rem] border border-light-gray bg-white px-4 py-3 text-sm leading-7 text-landing-blue-surface">
          By clicking submit, you agree to receive follow-up communication about
          your inquiry. Your data will be handled in line with our{" "}
          <Link
            href="/privacy"
            className="font-semibold text-landing-blue underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="w-full rounded-[0.95rem] bg-landing-blue px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-landing-blue/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState === "submitting" ? "Sending..." : "Submit"}
        </button>

        {submitState === "success" && (
          <p className="text-sm leading-7 text-landing-blue-surface/82" aria-live="polite">
            Thanks. Your inquiry has been sent to our team, and we will follow up
            within one business day.
          </p>
        )}

        {submitState === "error" && (
          <p className="text-sm leading-7 text-landing-blue-surface/82" aria-live="polite">
            {errorMessage || "Unable to send your inquiry."} You can also reach us
            directly at{" "}
            <Link
              href="mailto:contact@umaisolutions.com"
              className="font-semibold text-landing-blue underline underline-offset-4"
            >
              contact@umaisolutions.com
            </Link>
            .
          </p>
        )}
      </form>
    </div>
  );
}
