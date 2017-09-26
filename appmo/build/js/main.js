YMaps.jQuery(function () {
  var map = new YMaps.Map(YMaps.jQuery("#map")[0]);
  map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);
});

new WOW({ offset: 100 }).init();

var mySwiper = new Swiper('.swiper-container', {
  nextButton: '.slider__control-next',
  prevButton: '.slider__control-prev',
  effect: 'cube',
  cube: {
    slideShadows: false,
    shadow: false,
  },
  autoplay: 2500
});   

var features = document.querySelectorAll('.features__item');
Array.from(features).forEach(function(el, i) {
  el.classList.add('wow', 'bounceInLeft');
});

var newsItems = document.querySelectorAll('.news__item');
Array.from(newsItems).forEach(function (el) {
  el.classList.add('wow', 'bounceInLeft');
});

var feedbackInput = document.querySelectorAll('.feedback__form input, .feedback__form textarea');

Array.from(feedbackInput).forEach(function(el) {
  el.classList.add('wow', 'bounceInLeft');
});


document.querySelector('.newsletter__heading').classList.add('wow', 'slideInUp');
document.querySelector('.newsletter__desc').classList.add('wow', 'slideInUp');
document.querySelector('.newsletter__form').classList.add('wow', 'slideInUp');
document.querySelector('.news__heading').classList.add('wow', 'slideInUp');
document.querySelector('.news__desc').classList.add('wow', 'slideInUp');
document.querySelector('.screenshots__heading').classList.add('wow', 'slideInUp');
document.querySelector('.screenshots__desc').classList.add('wow', 'slideInUp');
document.querySelector('.screenshots__items').classList.add('wow', 'slideInUp');
document.querySelector('.member__desc').classList.add('wow', 'slideInUp');
document.querySelector('.member__heading').classList.add('wow', 'slideInUp');
document.querySelector('.member__items').classList.add('wow', 'slideInUp');
document.querySelector('.team__desc').classList.add('wow', 'slideInUp');
document.querySelector('.team__heading').classList.add('wow', 'slideInUp');
document.querySelector('.team__members').classList.add('wow', 'slideInUp');
document.querySelector('.clients__inner').classList.add('wow', 'slideInUp');
document.querySelector('.feedback__desc').classList.add('wow', 'slideInUp');
document.querySelector('.feedback__heading').classList.add('wow', 'slideInUp');