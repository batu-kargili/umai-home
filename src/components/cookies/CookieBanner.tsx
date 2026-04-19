"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ShieldCheck, SlidersHorizontal } from "lucide-react";

import {
  COOKIE_CATEGORY_DETAILS,
  COOKIE_CONSENT_EVENT,
  type CookieCategory,
  type CookieCategoryState,
  type CookieConsentRecord,
  REQUIRED_COOKIE_CATEGORIES,
  createAcceptedCookieConsent,
  createCustomCookieConsent,
  createRequiredCookieConsent,
  persistCookieConsent,
  readStoredCookieConsent,
} from "@/lib/cookie-consent";

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

function PreferenceCard({
  category,
  checked,
  onToggle,
}: {
  category: (typeof COOKIE_CATEGORY_DETAILS)[number];
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-950">{category.shortLabel}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {category.description}
          </p>
        </div>
        <CookieSwitch
          checked={checked}
          disabled={category.required}
          onChange={onToggle}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.examples.map((example) => (
          <span
            key={example}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CookieBanner() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<CookieConsentRecord | null>(null);
  const [draftCategories, setDraftCategories] =
    useState<CookieCategoryState>(REQUIRED_COOKIE_CATEGORIES);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const storedConsent = readStoredCookieConsent();

    if (storedConsent) {
      setConsent(storedConsent);
      setDraftCategories(storedConsent.categories);
    }

    setHasLoaded(true);
  }, []);

  useEffect(() => {
    const syncConsent = (event: Event) => {
      const nextConsent =
        event instanceof CustomEvent
          ? (event.detail as CookieConsentRecord | null)
          : readStoredCookieConsent();

      setConsent(nextConsent ?? null);
      setDraftCategories(nextConsent?.categories ?? REQUIRED_COOKIE_CATEGORIES);
      setIsPreferencesOpen(false);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  const applyConsent = useCallback((nextConsent: CookieConsentRecord) => {
    persistCookieConsent(nextConsent);
    setConsent(nextConsent);
    setDraftCategories(nextConsent.categories);
    setIsPreferencesOpen(false);

    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, {
        detail: nextConsent,
      }),
    );
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent(createAcceptedCookieConsent());
  }, [applyConsent]);

  const acceptRequiredOnly = useCallback(() => {
    applyConsent(createRequiredCookieConsent());
  }, [applyConsent]);

  const savePreferences = useCallback(() => {
    applyConsent(createCustomCookieConsent(draftCategories));
  }, [applyConsent, draftCategories]);

  const openPreferences = useCallback(() => {
    setDraftCategories(consent?.categories ?? REQUIRED_COOKIE_CATEGORIES);
    setIsPreferencesOpen(true);
  }, [consent]);

  const closePreferences = useCallback(() => {
    setDraftCategories(consent?.categories ?? REQUIRED_COOKIE_CATEGORIES);
    setIsPreferencesOpen(false);
  }, [consent]);

  const setDraftCategory = useCallback(
    (category: CookieCategory, enabled: boolean) => {
      if (category === "necessary") {
        return;
      }

      setDraftCategories((current) => ({
        ...current,
        necessary: true,
        [category]: enabled,
      }));
    },
    [],
  );

  if (!hasLoaded || pathname === "/cookie-preferences") {
    return null;
  }

  const shouldShow = !consent || isPreferencesOpen;

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] px-3 pb-3 md:px-6 md:pb-6">
      <div className="pointer-events-auto mx-auto max-w-[1880px] overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/95 text-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.22)] backdrop-blur-xl">
        <div className="grid gap-6 px-6 py-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.92fr)_minmax(0,0.78fr)_auto] lg:items-start lg:px-8">
          <div>
            <p className="text-[0.95rem] font-semibold text-slate-950">
              About cookies on this site
            </p>
            <p className="mt-2 text-[0.98rem] leading-7 text-slate-600">
              We use strictly necessary cookies to operate the site. Optional
              categories are only enabled if you consent.
            </p>
          </div>

          <div>
            <p className="text-[0.98rem] leading-7 text-slate-600">
              Review your{" "}
              <button
                type="button"
                onClick={openPreferences}
                className="font-semibold text-[#0056f9] underline underline-offset-4"
              >
                cookie preferences
              </button>{" "}
              or read our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#0056f9] underline underline-offset-4"
              >
                privacy statement
              </Link>
              .
            </p>
          </div>

          <div>
            <p className="text-[0.98rem] leading-7 text-slate-600">
              Your selection is stored on this device for 180 days so the site
              can respect it across future visits.
            </p>
          </div>

          <div className="flex min-w-[180px] flex-col gap-3">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-md bg-[#0056f9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044c7]"
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
          </div>
        </div>

        {isPreferencesOpen && (
          <div className="border-t border-slate-200 bg-slate-50/80 px-6 py-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-[42rem]">
                <div className="flex items-center gap-2 text-slate-950">
                  <SlidersHorizontal className="h-4 w-4" />
                  <p className="text-sm font-semibold">Manage by category</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Necessary cookies always stay on. Optional categories remain
                  off until you save or accept them.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={savePreferences}
                  className="rounded-md bg-[#0056f9] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044c7]"
                >
                  Save selection
                </button>
                <button
                  type="button"
                  onClick={closePreferences}
                  className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {COOKIE_CATEGORY_DETAILS.map((category) => {
                const key = category.key as CookieCategory;
                const checked = draftCategories[key];

                return (
                  <PreferenceCard
                    key={category.key}
                    category={category}
                    checked={checked}
                    onToggle={() => setDraftCategory(key, !checked)}
                  />
                );
              })}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-[1.4rem] border border-[#bfd6ff] bg-[#eef5ff] px-4 py-4 text-sm leading-6 text-slate-700">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0056f9]" />
              <p>
                Optional scripts remain blocked until you opt in. You can update
                the same choices later on the{" "}
                <Link
                  href="/cookie-preferences"
                  className="font-semibold text-[#0056f9] underline underline-offset-4"
                >
                  cookie preferences page
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
