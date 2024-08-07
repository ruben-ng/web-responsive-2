document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
  
    if (window.scrollY > 50) { // Ganti 50 dengan jarak scroll yang sesuai
      header.classList.add('bg-black-on-scroll');
      nav.classList.add('border-b-hidden');
    } else {
      header.classList.remove('bg-black-on-scroll');
      nav.classList.remove('border-b-hidden');
    }
  });
  