/**
 * Utility Helpers
 * Small shared functions used across the portfolio.
 */

/** Set the current year in the footer copyright */
export function initDynamicYear() {
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
