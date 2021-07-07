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

var activeRowClassName = 'timetable__table-active';
var activeDayClassName = 'timetable__table-day--active';
var activeTimeClassName = 'timetable__table-time--active';

var table = document.querySelector('.timetable__table');
var timesList = document.querySelector('.timetable__table-time-list');

var removeActiveClasses = (arrayOfClassNames) => {
  arrayOfClassNames.forEach(classname => {
    document.querySelectorAll('.' + classname).forEach(el => el.classList.remove(classname))
  })
};

var handleTableClick = (evt) => {
  var target = evt.target
  var parent = target.parentNode
  var currentIdx = [...parent.children].findIndex(el => el === target)

  if (!currentIdx || target.nodeName !== 'LI' || target.closest('.timetable__table-time-list')) return

  removeActiveClasses([activeDayClassName, activeRowClassName, activeTimeClassName])

  target.classList.add(activeRowClassName)
  parent.querySelector('li').classList.add(activeDayClassName)

  var currentTime = timesList.children[currentIdx]
  currentTime.classList.add(activeTimeClassName)
};

table.addEventListener('click', handleTableClick);

//timetable mobile

var activeOverlayClassName = 'timetable__table-time-overley--active';
var activeClassesListClassName = 'timetable__table-day-classes-list--active';
var activeDayListClassName = 'timetable__table-day--active-list';

var days = document.querySelectorAll('.timetable__table-day')
var colomns = document.querySelectorAll('.timetable__table-day-classes-list')
var overley = document.querySelector('.timetable__table-time-overley')
console.log(days);

var handleTableClick2 = (evt) => {
  var target = evt.target
  var parent = target.parentNode

  function addActiveClasses(el, cls) {
    el.classList.add(cls)
  }


  if (target.hasAttribute('data-day')) {
    days.forEach( el => {
      addActiveClasses(el, activeDayListClassName)
    })
    colomns.forEach( el => {
      addActiveClasses(el, activeClassesListClassName)
    })
    addActiveClasses(overley, activeOverlayClassName)
    console.log('sdd');
  }
}

table.addEventListener('click', handleTableClick2);

