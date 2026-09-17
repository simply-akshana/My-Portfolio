import { triggerToast } from './toast.js';

/**
 * Toast Notification — reusable UI feedback system.
 * Exported for use by contact.js and other modules.
 */

// --- Copy Email to Clipboard ---
export function initCopyEmail() {
  // Expose globally for inline onclick handlers in HTML
  window.copyEmail = copyEmail;
}

function copyEmail() {
  const emailEl = document.getElementById('targetEmail');
  if (!emailEl) return;

  const email = emailEl.textContent.trim();

  // Use modern Clipboard API with execCommand fallback
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      onCopySuccess();
    }).catch(() => {
      fallbackCopy(email);
    });
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(email) {
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    onCopySuccess();
  } catch (err) {
    triggerToast('Gagal Menyalin', 'Silakan salin manual: aksan.zulkarnain@gmail.com', false);
  }
  document.body.removeChild(tempInput);
}

function onCopySuccess() {
  triggerToast('Email Disalin', 'Alamat aksan.zulkarnain@gmail.com siap digunakan.');
  const btnLabel = document.getElementById('copyBtnLabel');
  if (btnLabel) {
    const prev = btnLabel.textContent;
    btnLabel.textContent = 'Tersalin!';
    setTimeout(() => { btnLabel.textContent = prev; }, 2000);
  }
}

// --- Contact Form Submission ---
export function initContactForm() {
  // Expose globally for inline onsubmit handler in HTML
  window.handleContactSubmit = handleContactSubmit;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('formSubmitBtn');
  if (!submitBtn) return;

  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Memproses...</span>';

  const nameEl = document.getElementById('formName');
  const name = nameEl ? nameEl.value.trim() : '';

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    const form = document.getElementById('directContactForm');
    if (form) form.reset();
    triggerToast('Pesan Diterima', 'Terima kasih ' + name + ', pesan Anda telah tercatat.');
  }, 800);
}
