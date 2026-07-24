// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu after tapping a link (mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Trainers — loaded from data/trainers.json so non-developers can add/edit
// trainers by editing that one file (e.g. right on GitHub) without touching
// this script or index.html.
const trainerGrid = document.getElementById('trainer-grid');

if (trainerGrid) {
  fetch('data/trainers.json')
    .then(res => {
      if (!res.ok) throw new Error('Could not load trainers.json (' + res.status + ')');
      return res.json();
    })
    .then(trainers => {
      if (!Array.isArray(trainers) || trainers.length === 0) {
        trainerGrid.innerHTML = '<p class="trainer-loading-note">No trainers listed yet.</p>';
        return;
      }

      trainerGrid.innerHTML = trainers.map(t => {
        const avatar = (t.photo && t.photo.trim())
          ? `<img class="trainer-avatar" src="${escapeHtml(t.photo)}" alt="${escapeHtml(t.name || '')}">`
          : `<div class="trainer-avatar" aria-hidden="true">${escapeHtml(t.initials || '')}</div>`;

        return `
          <article class="trainer-card">
            ${avatar}
            <h3>${escapeHtml(t.name || '')}</h3>
            <p class="trainer-role">${escapeHtml(t.role || '')}</p>
            <p class="trainer-bio">${escapeHtml(t.bio || '')}</p>
          </article>
        `;
      }).join('');
    })
    .catch(err => {
      console.error('Trainer list failed to load:', err);
      trainerGrid.innerHTML = '<p class="trainer-loading-note">Trainer list is temporarily unavailable.</p>';
    });
}

// Basic HTML-escaping so trainer data from the JSON file can never break
// the page markup or inject scripts, even if someone pastes messy text.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form — placeholder handling.
// Replace this with a real submission (e.g. fetch() to your backend,
// a form service like Formspree, or a mailto: action) when ready.
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thanks — this demo form doesn’t send yet. Connect it to your email or CRM in js/script.js.';
    contactForm.reset();
  });
}