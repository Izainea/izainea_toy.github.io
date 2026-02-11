// Navegación móvil
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle?.addEventListener('click', ()=> navMenu.classList.toggle('show'));

// Año dinámico
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();