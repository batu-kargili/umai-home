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
  "Singapore",
  "Other",
] as const;

const INTERESTS = [
  "EU AI Act readiness",
  "Runtime guardrails and human oversight",
  "Compliance evidence and reporting",
  "Browser AI governance",
] as const;

const FIELD_CLASS =
  "w-full rounded-[0.9rem] border border-white/14 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/32 focus:border-landing-blue";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  interest: string;
  updates: boolean;
};

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  country: COUNTRIES[0],
  interest: INTERESTS[0],
  updates: true,
};

export function WebinarRegistrationForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type } = event.target;
    const value =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Webinar registration: EU AI Act Enforcement for Regulated Enterprises";
    const body = [
      `First name: ${values.firstName}`,
      `Last name: ${values.lastName}`,
      `Email: ${values.email}`,
      `Company: ${values.company}`,
      `Job title: ${values.jobTitle}`,
      `Country: ${values.country}`,
      `Primary interest: ${values.interest}`,
      `Receive updates: ${values.updates ? "Yes" : "No"}`,
    ].join("\n");

    window.location.href = `mailto:contact@umai.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-[#101019] p-6 text-white md:p-7">
      <div className="border-b border-white/10 pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-landing-blue-light">
          Register
        </p>
        <h3 className="mt-3 text-[1.6rem] font-semibold leading-tight tracking-[-0.04em] text-white">
          Register for the webinar
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/60">
          Fill out the form and we will send the confirmation details by email.
        </p>
      </div>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
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
        </div>

        <input
          aria-label="Email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Email"
        />

        <input
          aria-label="Company Name"
          name="company"
          type="text"
          required
          value={values.company}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Company Name"
        />

        <input
          aria-label="Job Title"
          name="jobTitle"
          type="text"
          required
          value={values.jobTitle}
          onChange={handleChange}
          className={FIELD_CLASS}
          placeholder="Job Title"
        />

        <select
          aria-label="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          className={FIELD_CLASS}
        >
          {COUNTRIES.map((country) => (
            <option key={country} value={country} className="bg-[#101019]">
              {country}
            </option>
          ))}
        </select>

        <select
          aria-label="Primary Interest"
          name="interest"
          value={values.interest}
          onChange={handleChange}
          className={FIELD_CLASS}
        >
          {INTERESTS.map((interest) => (
            <option key={interest} value={interest} className="bg-[#101019]">
              {interest}
            </option>
          ))}
        </select>

        <label className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/60">
          <input
            name="updates"
            type="checkbox"
            checked={values.updates}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-landing-blue"
          />
          <span>
            I would like to receive follow-up emails about this webinar and future
            UMAI events.
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-[0.95rem] bg-landing-blue px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-landing-blue/90"
        >
          Register now
        </button>

        <p className="text-sm leading-7 text-white/52">
          By registering, you agree to receive event communications and to the{" "}
          <Link
            href="/privacy"
            className="font-semibold text-white underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {submitted && (
          <p className="text-sm leading-7 text-white/62">
            Your email client should open with the registration details prefilled.
            If not, send your request to{" "}
            <Link
              href="mailto:contact@umai.ai"
              className="font-semibold text-landing-blue-light underline underline-offset-4"
            >
              contact@umai.ai
            </Link>
            .
          </p>
        )}
      </form>
    </div>
  );
}
