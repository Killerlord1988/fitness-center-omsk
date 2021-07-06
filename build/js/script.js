'use strict';

//swiper slider initialslide
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.trainers__slider-control--next',
    prevEl: '.trainers__slider-control--prev',
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


var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 30,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.reviews__slider-control--next',
    prevEl: '.reviews__slider-control--prev',
  },
});

//masked input

$('#telephone').mask('+7 (999) 999-99-99');

//timetable

var classes = document.querySelectorAll('.timetable__table-day-classes-list li:not(:first-child)');
var days = document.querySelectorAll('.timetable__table-day-classes-list li:first-child');
var times = document.querySelectorAll('.timetable__table-time-list li:not(:first-child)');
var colomns = document.querySelectorAll('.timetable__table-day-classes-list');


// times.forEach(function (el) {
//   el.classList.add('dada')
// });

colomns.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    var index = [...this.children].findIndex(el => el == evt.target)
    console.log(index)
  })
});

Object.keys(colomns).forEach(function (el) {
  colomns[el].addEventListener('click', function (e) {
    clearActive(days, 'timetable__table-day--active');

    if (e.target.nodeName === "LI") {
      days[el].classList.add('timetable__table-day--active');
    }
  });
});

// Object.keys(classes).forEach(function (el) {
//   classes[el].addEventListener('click', function (e) {
//     // clearActive(days, 'timetable__table-day--active');
//     var size = 4;

//     console.log(el);
//   });
// });

classes.forEach(function (el) {
  el.addEventListener('click', function (e) {
    clearActive(classes, 'timetable__table-active');
    e.target.classList.add('timetable__table-active');
  });
});

function clearActive(obj, cls) {
  obj.forEach(function (el) {
    el.classList.remove(cls);
  });
}

// console.log(colomns);
