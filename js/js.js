// NAVBAR
const menu = document.querySelector('#menu-bar');
const navBar = document.querySelector('.navigation');
const header = document.querySelector('.head-nav');
const nav = header.querySelector('.nav-child');

menu.addEventListener('click', function(event) {
  // Prevent the click event from propagating to the document click listener
  event.stopPropagation();
  menu.classList.toggle('menu-x');
  navBar.classList.toggle('hidden');
  header.classList.add('navv');
});

document.addEventListener('click', function(event) {
  if (!navBar.classList.contains('hidden') && !navBar.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('menu-x');
      navBar.classList.add('hidden');
  }
});

navBar.addEventListener('click', function(e){
  menu.classList.toggle('menu-x');
  navBar.classList.add('hidden');
});

document.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('bg-black-on-scroll');
      nav.classList.add('border-b-hidden');
    } else {
      header.classList.remove('bg-black-on-scroll');
      nav.classList.remove('border-b-hidden');
    }
  });

// Button chat
document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.getElementById('popup_trigger');
    const container = document.getElementById('popup_container');

    trigger.addEventListener('click', function () {
        container.classList.toggle('hidden');
    });
    document.addEventListener('click', function (event) {
        if (!trigger.contains(event.target) && !container.contains(event.target)) {
            container.classList.add('hidden');
        }
    });
});
  