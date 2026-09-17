/**
 * Main Entry Point — Porto Aksan
 * Imports styles and initializes all JS modules.
 */

import './style.css';

import { initTheme } from './js/theme.js';
import { initNavigation } from './js/navigation.js';
import { initProjectFilters, initCaseStudyModal } from './js/projects.js';
import { initCopyEmail, initContactForm } from './js/contact.js';
import { initDynamicYear } from './js/utils.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectFilters();
  initCaseStudyModal();
  initCopyEmail();
  initContactForm();
  initDynamicYear();
});
