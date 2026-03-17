document.addEventListener('DOMContentLoaded', function () {
  // Dynamic nav active state — no more per-page inline styles
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function (link) {
    if (link.getAttribute('href') === page) {
      link.classList.add('nav-active');
    }
  });

  // Dynamic copyright year
  var yr = document.querySelector('.footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
});
