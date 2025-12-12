/**
 * Cookie Management Utilities
 * Helper functions for managing cookie consent and preferences
 */

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

/**
 * Get the current cookie consent preferences
 */
export function getCookieConsent(): CookiePreferences | null {
  try {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) return null;
    return JSON.parse(consent);
  } catch (e) {
    console.error("Failed to parse cookie consent", e);
    return null;
  }
}

/**
 * Check if a specific cookie type is allowed
 */
export function isCookieAllowed(type: keyof CookiePreferences): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent[type] === true;
}

/**
 * Check if the user has given any cookie consent
 */
export function hasGivenConsent(): boolean {
  return localStorage.getItem("cookie-consent") !== null;
}

/**
 * Set a cookie with consent check
 */
export function setCookie(
  name: string,
  value: string,
  type: keyof CookiePreferences,
  days: number = 365
): boolean {
  if (!isCookieAllowed(type)) {
    console.warn(`Cookie "${name}" not set: ${type} cookies are not allowed`);
    return false;
  }

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  return true;
}

/**
 * Get a cookie value
 */
export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

/**
 * Delete a cookie
 */
export function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * Clear all non-necessary cookies based on current consent
 */
export function clearNonConsentedCookies(): void {
  const consent = getCookieConsent();
  if (!consent) return;

  const cookies = document.cookie.split(";");
  const necessaryCookies = ["cookie-consent", "cookie-consent-date", "brantech-ui-theme"];

  cookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    
    // Skip necessary cookies
    if (necessaryCookies.includes(cookieName)) return;

    // Delete based on consent
    if (!consent.analytics && isAnalyticsCookie(cookieName)) {
      deleteCookie(cookieName);
    }
    if (!consent.marketing && isMarketingCookie(cookieName)) {
      deleteCookie(cookieName);
    }
    if (!consent.preferences && isPreferenceCookie(cookieName)) {
      deleteCookie(cookieName);
    }
  });
}

/**
 * Check if a cookie is an analytics cookie
 */
function isAnalyticsCookie(name: string): boolean {
  const analyticsCookies = ["_ga", "_gid", "_gat", "_ga_", "analytics"];
  return analyticsCookies.some((prefix) => name.startsWith(prefix));
}

/**
 * Check if a cookie is a marketing cookie
 */
function isMarketingCookie(name: string): boolean {
  const marketingCookies = ["_fbp", "_gcl", "ads", "marketing"];
  return marketingCookies.some((prefix) => name.startsWith(prefix));
}

/**
 * Check if a cookie is a preference cookie
 */
function isPreferenceCookie(name: string): boolean {
  const preferenceCookies = ["pref", "settings", "lang"];
  return preferenceCookies.some((prefix) => name.startsWith(prefix));
}

/**
 * Get the date when consent was given
 */
export function getConsentDate(): Date | null {
  try {
    const dateStr = localStorage.getItem("cookie-consent-date");
    if (!dateStr) return null;
    return new Date(dateStr);
  } catch (e) {
    console.error("Failed to parse consent date", e);
    return null;
  }
}

/**
 * Check if consent needs to be renewed (older than 1 year)
 */
export function needsConsentRenewal(): boolean {
  const consentDate = getConsentDate();
  if (!consentDate) return true;

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return consentDate < oneYearAgo;
}

/**
 * Reset cookie consent (useful for testing or when user wants to change preferences)
 */
export function resetCookieConsent(): void {
  localStorage.removeItem("cookie-consent");
  localStorage.removeItem("cookie-consent-date");
  clearNonConsentedCookies();
}
