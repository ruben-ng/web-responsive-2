// NAVBAR
const menu = document.querySelector('#menu-bar');
const navBar = document.querySelector('.navigation');

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-x');
    navBar.classList.toggle('hidden');
});



document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
  
    if (window.scrollY > 50) {
      header.classList.add('bg-black-on-scroll');
      nav.classList.add('border-b-hidden');
    } else {
      header.classList.remove('bg-black-on-scroll');
      nav.classList.remove('border-b-hidden');
    }
  });
  