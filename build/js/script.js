'use strict';

//swiper slider initialslide

const swiper = new Swiper('.mySwiper', {
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


const swiper2 = new Swiper('.mySwiper2', {
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

let currentActive = null

const activeRowClassName = 'timetable__table-active';
const activeDayClassName = 'timetable__table-day--active';
const activeTimeClassName = 'timetable__table-time--active';

const table = document.querySelector('.timetable__table');
const timesList = document.querySelector('.timetable__table-time-list');

const removeActiveClasses = (arrayOfClassNames) => {
  Array.from(arrayOfClassNames).forEach(classname => {
    document.querySelectorAll('.' + classname).forEach(el => el.classList.remove(classname))
  })
};

const handleTableClick = (evt) => {
  const target = evt.target
  const parent = target.parentNode
  const currentIdx = [...parent.children].findIndex(el => el === target)

  if (!currentIdx || target.nodeName !== 'LI' || target.closest('.timetable__table-time-list')) return

  removeActiveClasses([activeDayClassName, activeRowClassName, activeTimeClassName])

  currentActive = target

  target.classList.add(activeRowClassName)
  parent.querySelector('li').classList.add(activeDayClassName)

  const currentTime = timesList.children[currentIdx]
  currentTime.classList.add(activeTimeClassName)
};

table.addEventListener('click', handleTableClick);

//timetable mobile


<<<<<<< HEAD
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
=======
const activeOverlayClassName = 'timetable__table-time-overley--active';
const activeClassesListClassName = 'timetable__table-day-classes-list--active';
const activeDayListClassName = 'timetable__table-day--active-list';

const days = document.querySelectorAll('.timetable__table-day')
const colomns = document.querySelectorAll('.timetable__table-day-classes-list')
const overley = document.querySelector('.timetable__table-time-overley')

function addActiveClass(el, cls) {
  el.classList.add(cls)
}

function removeActiveClass(el, cls) {
  el.classList.remove(cls)
}

let isSelectShown = false

const handleTableClick2 = (evt) => {
  if (isSelectShown) return

  const target = evt.target

  currentActive = target

  if (target.hasAttribute('data-day')) {
    days.forEach(el => {
      addActiveClass(el, activeDayListClassName)
    })

    colomns.forEach(el => {
      addActiveClass(el, activeClassesListClassName)
    })

    addActiveClass(overley, activeOverlayClassName)

    isSelectShown = true
>>>>>>> 8b8562efcd097c0fc3d6a33e6b857876dea27207
  }
}

table.addEventListener('click', handleTableClick2);

<<<<<<< HEAD
=======
overley.addEventListener('click', ev => {
  removeActiveClass(overley, activeOverlayClassName)

  Array.from(days).forEach(el => {
    removeActiveClass(el, activeDayListClassName)
  })

  Array.from(colomns).filter(c => c !== currentActive.parentNode).forEach( el => {
    removeActiveClass(el, activeClassesListClassName)
  })
})

days.forEach(day => {
  day.addEventListener('click', evt => {
    removeActiveClass(overley, activeOverlayClassName)

    Array.from(days).forEach(el => {
      removeActiveClass(el, activeDayListClassName)
    })

    Array.from(colomns).filter(c => c !== evt.target.parentNode).forEach( el => {
      removeActiveClass(el, activeClassesListClassName)
    })
  })
})
>>>>>>> 8b8562efcd097c0fc3d6a33e6b857876dea27207
