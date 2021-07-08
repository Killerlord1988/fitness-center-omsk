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


const activeOverlayClassName = 'timetable__table-time-overley--active';
const activeClassesListClassName = 'timetable__table-day-classes-list--active';
const activeDayListClassName = 'timetable__table-day--active-list';
const activeArrowClassName = 'timetable__table-day-arrow--active';


const days = document.querySelectorAll('.timetable__table-day');
const colomns = document.querySelectorAll('.timetable__table-day-classes-list');
const overley = document.querySelector('.timetable__table-time-overley');
const containerDay = document.querySelector('.timetable__table-day-classes');
console.log(containerDay);

function addActiveClass(el, cls) {
  el.classList.add(cls)
}

function removeActiveClass(el, cls) {
  el.classList.remove(cls)
}

let isSelectShown = false

overley.addEventListener('click', ev => {
  removeActiveClass(overley, activeOverlayClassName)
  removeActiveClass(containerDay, activeArrowClassName)


  Array.from(days).forEach(el => {
    removeActiveClass(el, activeDayListClassName)
    removeActiveClass(containerDay, activeArrowClassName)
  })

  Array.from(colomns).filter(c => c !== currentActive.parentNode).forEach(el => {
    removeActiveClass(el, activeClassesListClassName)
    removeActiveClass(containerDay, activeArrowClassName)
  })

  isSelectShown = !isSelectShown
})

days.forEach(day => {
  day.addEventListener('click', evt => {
    if (!isSelectShown) {
      const target = evt.target

      currentActive = target

      addActiveClass(containerDay, activeArrowClassName)


      if (target.hasAttribute('data-day')) {
        days.forEach(el => {
          addActiveClass(el, activeDayListClassName)
        })

        colomns.forEach(el => {
          addActiveClass(el, activeClassesListClassName)
        })

        addActiveClass(overley, activeOverlayClassName)

        isSelectShown = true
      }

    } else {

      removeActiveClass(overley, activeOverlayClassName)
      removeActiveClass(containerDay, activeArrowClassName)


      Array.from(days).forEach(el => {
        removeActiveClass(el, activeDayListClassName)
        removeActiveClass(containerDay, activeArrowClassName)

      })

      Array.from(colomns).filter(c => c !== evt.target.parentNode).forEach(el => {
        removeActiveClass(el, activeClassesListClassName)
        removeActiveClass(containerDay, activeArrowClassName)

      })

      isSelectShown = false
    }


  })
})
