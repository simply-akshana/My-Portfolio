/**
 * Mobile Navigation Controller
 * Handles hamburger menu drawer toggle and auto-close on link click.
 */

export function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function closeMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.remove('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'Buka menu navigasi');
  }

  function openMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.add('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuBtn.setAttribute('aria-label', 'Tutup menu navigasi');
  }

  function toggleMenu() {
    if (!mobileMenu) return;
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('is-open') &&
          !mobileMenu.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on Escape key for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
        mobileMenuBtn.focus();
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
