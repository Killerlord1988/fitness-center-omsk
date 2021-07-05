'use strict';

//swiper slider initialslide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".trainers__slider-control--next",
    prevEl: ".trainers__slider-control--prev",
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
  }
});


var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".reviews__slider-control--next",
    prevEl: ".reviews__slider-control--prev",
  },
});

//masked input

$("#telephone").mask("+7 (999) 999-99-99");
