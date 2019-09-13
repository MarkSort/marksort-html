document.addEventListener('DOMContentLoaded', () => {
  // Get "navbar-burger" element
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  // Add a click event 
  navbarBurger.addEventListener('click', () => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });
});
