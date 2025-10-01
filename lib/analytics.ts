const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments as unknown as Record<string, unknown>);
  };

  return true;
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (!ensureGtag()) {
    return;
  }
  window.gtag("event", event, params ?? {});
}

export function identifyUser(userId: string) {
  if (!ensureGtag()) {
    return;
  }
  window.gtag("set", { user_id: userId });
}

export function resetAnalytics() {
  if (!ensureGtag()) {
    return;
  }
  window.gtag("set", { user_id: undefined });
}
