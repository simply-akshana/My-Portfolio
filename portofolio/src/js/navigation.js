/**
 * Mobile Navigation Controller
 * Handles hamburger menu drawer toggle and auto-close on link click.
 */

export function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOpenIcon = document.getElementById('menuOpenIcon');
  const menuCloseIcon = document.getElementById('menuCloseIcon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (menuOpenIcon) menuOpenIcon.classList.toggle('hidden', !isHidden);
      if (menuCloseIcon) menuCloseIcon.classList.toggle('hidden', isHidden);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
    });
  });
}
