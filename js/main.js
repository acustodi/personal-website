// ---------- Mobile nav toggle ----------
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  // Close the menu after a link is tapped (mobile)
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Work filtering (by discipline section) ----------
const filterButtons = document.querySelectorAll('.filter-btn');
const workSections = document.querySelectorAll('.work-section');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    workSections.forEach((section) => {
      const match = filter === 'all' || section.dataset.category === filter;
      section.style.display = match ? '' : 'none';
    });
  });
});

// ---------- Auto-update copyright year ----------
document.querySelectorAll('.auto-year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
