const LONG_DATE = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const SHORT_DATE = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
});

const YEAR_ONLY = new Intl.DateTimeFormat("en-US", { year: "numeric" });

/**
 * Format a release/show date as "April 25, 2025".
 *
 * @example
 * formatLongDate(new Date("2025-04-25")) // "April 25, 2025"
 */
export function formatLongDate(date: Date): string {
  return LONG_DATE.format(date);
}

/**
 * Format a release date as "Apr 2025".
 *
 * @example
 * formatShortDate(new Date("2025-04-25")) // "Apr 2025"
 */
export function formatShortDate(date: Date): string {
  return SHORT_DATE.format(date);
}

/**
 * Get just the year as a string.
 *
 * @example
 * formatYear(new Date("2025-04-25")) // "2025"
 */
export function formatYear(date: Date): string {
  return YEAR_ONLY.format(date);
}
