/**
 * Toast Notification Controller
 * Reusable feedback system for user actions (copy, form submit, etc.)
 */

export function triggerToast(title, message, isSuccess = true) {
  const toast = document.getElementById('toastNotification');
  const toastTitleEl = document.getElementById('toastTitleEl');
  const toastMessageEl = document.getElementById('toastMessageEl');
  const toastIconEl = document.getElementById('toastIconEl');

  if (!toast || !toastTitleEl || !toastMessageEl || !toastIconEl) return;

  toastTitleEl.textContent = title;
  toastMessageEl.textContent = message;

  if (isSuccess) {
    toastIconEl.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    toastIconEl.className = 'text-emerald-400 dark:text-emerald-600';
  } else {
    toastIconEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
    toastIconEl.className = 'text-rose-400 dark:text-rose-600';
  }

  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3500);
}
