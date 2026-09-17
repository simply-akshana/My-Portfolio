/**
 * Theme Switch Controller
 * Manages dark/light mode toggle with switch inputs,
 * localStorage persistence, and system preference detection.
 */

const htmlEl = document.documentElement;

function getSavedTheme() {
  const stored = localStorage.getItem('porto_theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateSwitches(isDark) {
  const themeSwitch = document.getElementById('themeSwitch');
  const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');

  if (themeSwitch) {
    themeSwitch.checked = isDark;
    themeSwitch.setAttribute('aria-checked', String(isDark));
  }

  if (mobileThemeSwitch) {
    mobileThemeSwitch.checked = isDark;
    mobileThemeSwitch.setAttribute('aria-checked', String(isDark));
  }
}

let transitionTimeout = null;

function setTheme(isDark, save = true, animate = false) {
  if (animate) {
    htmlEl.classList.add('theme-transitioning');
    if (transitionTimeout) clearTimeout(transitionTimeout);
    transitionTimeout = setTimeout(() => {
      htmlEl.classList.remove('theme-transitioning');
    }, 320);
  }

  if (isDark) {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }

  updateSwitches(isDark);

  if (save) {
    localStorage.setItem('porto_theme', isDark ? 'dark' : 'light');
  }
}

export function initTheme() {
  const initialDark = getSavedTheme() === 'dark';
  setTheme(initialDark, false);

  const themeSwitch = document.getElementById('themeSwitch');
  const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');

  if (themeSwitch) {
    themeSwitch.addEventListener('change', (e) => {
      setTheme(e.target.checked, true, true);
    });
  }

  if (mobileThemeSwitch) {
    mobileThemeSwitch.addEventListener('change', (e) => {
      setTheme(e.target.checked, true, true);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly chosen one
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('porto_theme')) {
      setTheme(e.matches, false, true);
    }
  });
}
