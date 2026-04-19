"use client";

import { CheckCircle2, Cookie, RotateCcw, ShieldCheck } from "lucide-react";

import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import {
  COOKIE_CATEGORY_DETAILS,
  CookieCategory,
  type CookieConsentRecord,
} from "@/lib/cookie-consent";

function formatUpdatedAt(consent: CookieConsentRecord | null): string {
  if (!consent) {
    return "Not set yet";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(consent.updatedAt));
}

function CookieSwitch({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-7 w-12 items-center rounded-full border transition ${
        checked
          ? "border-[#0056f9] bg-[#0056f9]"
          : "border-slate-300 bg-slate-200"
      } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function CookiePreferencesPanel() {
  const {
    acceptAll,
    acceptRequiredOnly,
    consent,
    draftCategories,
    hasLoaded,
    resetConsent,
    savePreferences,
    setDraftCategory,
  } = useCookieConsent();

  if (!hasLoaded) {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <p className="text-sm text-slate-500">Loading your current preferences...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[36rem]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0056f9]">
              <Cookie className="h-3.5 w-3.5" />
              Live consent controls
            </div>
            <h2 className="mt-4 text-[1.85rem] font-semibold tracking-[-0.04em] text-slate-950">
              Manage cookie categories for this browser
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-slate-600">
              These settings update the sitewide consent record stored on your
              device. Strictly necessary cookies remain enabled because the
              website needs them to remember your choice.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 lg:min-w-[280px]">
            <div className="flex items-center gap-2 text-slate-950">
              <CheckCircle2 className="h-4 w-4 text-[#0056f9]" />
              <p className="text-sm font-semibold">Current status</p>
            </div>
            <p className="mt-3 text-[1.1rem] font-semibold capitalize text-slate-950">
              {consent?.status ?? "Pending decision"}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Last updated: {formatUpdatedAt(consent)}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={savePreferences}
            className="rounded-md bg-[#0056f9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044c7]"
          >
            Save selection
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-md border border-[#bfd6ff] bg-[#eef5ff] px-5 py-3 text-sm font-semibold text-[#0056f9] transition-colors hover:bg-[#dfeeff]"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={acceptRequiredOnly}
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            Required only
          </button>
          <button
            type="button"
            onClick={resetConsent}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" />
            Reset banner
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {COOKIE_CATEGORY_DETAILS.map((category) => {
          const key = category.key as CookieCategory;
          const checked = draftCategories[key];

          return (
            <div
              key={category.key}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {category.required ? (
                      <ShieldCheck className="h-3.5 w-3.5 text-[#0056f9]" />
                    ) : null}
                    {category.shortLabel}
                  </div>
                  <h3 className="mt-4 text-[1.25rem] font-semibold tracking-[-0.03em] text-slate-950">
                    {category.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>
                </div>
                <CookieSwitch
                  checked={checked}
                  disabled={category.required}
                  onChange={() => setDraftCategory(key, !checked)}
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
