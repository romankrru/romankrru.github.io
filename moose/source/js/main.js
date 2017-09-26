var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  pagination: '.swiper-pagination',
  paginationClickable: true
});

var menuToggle = document.querySelector('.main-nav-toggle');
var menu = document.querySelector('.main-nav__nav');
var socialLinks = document.querySelector('.main-nav__social');

toggleMenu();

menuToggle.addEventListener('click', function(e) {
  toggleMenu();
});

function toggleMenu() {
  menuToggle.classList.toggle('main-nav-toggle--open');
  menu.classList.toggle('main-nav__nav--open');
  socialLinks.classList.toggle('main-nav__social--open');
}

var servicesContainer = document.querySelector('.services');
var servicesToggles = document.querySelectorAll('.services__toggle');
var servicesDescriptions = document.querySelectorAll('.services__desc');
var activeServiceIndex;

toggleService(servicesToggles[0]);

servicesContainer.addEventListener('click', function(e) {
  el = e.target.closest('.services__toggle');

  if (el !== null) {
    toggleService(el);
  }
});

function toggleService(el) {
  var index = Array.prototype.indexOf.call(servicesToggles, el);

  if (index === activeServiceIndex) {
    return;
  }

  activeServiceIndex = activeServiceIndex || 0;

  servicesToggles[activeServiceIndex].classList.remove('services__toggle--active');
  servicesDescriptions[activeServiceIndex].classList.remove('services__desc--active');

  servicesToggles[index].classList.add('services__toggle--active');
  servicesDescriptions[index].classList.add('services__desc--active');


  activeServiceIndex = index;
}
