"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ACCEPT_ALL_COOKIE_CATEGORIES,
  COOKIE_CONSENT_EVENT,
  CookieCategory,
  CookieCategoryState,
  CookieConsentRecord,
  REQUIRED_COOKIE_CATEGORIES,
  clearCookieConsent,
  createAcceptedCookieConsent,
  createCustomCookieConsent,
  createRequiredCookieConsent,
  isCookieConsentGranted,
  persistCookieConsent,
  readStoredCookieConsent,
} from "@/lib/cookie-consent";

interface CookieConsentContextValue {
  consent: CookieConsentRecord | null;
  draftCategories: CookieCategoryState;
  hasLoaded: boolean;
  hasConsentDecision: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  acceptRequiredOnly: () => void;
  savePreferences: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  resetConsent: () => void;
  setDraftCategory: (category: CookieCategory, enabled: boolean) => void;
  canUseCategory: (category: CookieCategory) => boolean;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
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
    } else {
      setDraftCategories(REQUIRED_COOKIE_CATEGORIES);
    }

    setHasLoaded(true);
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

  const resetConsent = useCallback(() => {
    clearCookieConsent();
    setConsent(null);
    setDraftCategories(REQUIRED_COOKIE_CATEGORIES);
    setIsPreferencesOpen(false);

    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, {
        detail: null,
      }),
    );
  }, []);

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

  const canUseCategory = useCallback(
    (category: CookieCategory) => isCookieConsentGranted(consent, category),
    [consent],
  );

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      draftCategories,
      hasLoaded,
      hasConsentDecision: Boolean(consent),
      isPreferencesOpen,
      acceptAll,
      acceptRequiredOnly,
      savePreferences,
      openPreferences,
      closePreferences,
      resetConsent,
      setDraftCategory,
      canUseCategory,
    }),
    [
      acceptAll,
      acceptRequiredOnly,
      canUseCategory,
      closePreferences,
      consent,
      draftCategories,
      hasLoaded,
      isPreferencesOpen,
      openPreferences,
      resetConsent,
      savePreferences,
      setDraftCategory,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider.");
  }

  return context;
}

export const cookieConsentPresets = {
  required: REQUIRED_COOKIE_CATEGORIES,
  all: ACCEPT_ALL_COOKIE_CATEGORIES,
};
