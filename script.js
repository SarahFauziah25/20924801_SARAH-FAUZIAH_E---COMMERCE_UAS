// Toggle mobile nav
const header = document.querySelector('header');
document.getElementById('menu-open').addEventListener('click',()=>header.classList.add('show-mobile'));
document.getElementById('menu-close').addEventListener('click',()=>header.classList.remove('show-mobile'));

// Inisialisasi Swiper
new Swiper('.shop-list', {
  slidesPerView: 1,
  loop: true,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: { 640:{slidesPerView:2}, 1024:{slidesPerView:3} }
});
new Swiper('.testi-slider', {
  slidesPerView:1,
  pagination: {el:'.swiper-pagination', clickable:true},
  autoplay:{delay:5000}
});
