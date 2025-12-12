// script.js

// set copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// contact form UX: lightweight feedback
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }
    // let the form post normally (Formspree or other)
    // optionally, you could add AJAX handling here
  });
}
