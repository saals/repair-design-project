// подключение Swiper оставлено, т.к. используется в слайдере секции dreams
import Swiper, {Controller, Pagination, Scrollbar, Navigation} from 'swiper';
import replaceElem from './utils/replaceElem.js';
import getDataBase from './utils/getDataBase.js';
import initSlider from './utils/initSlider.js';

Swiper.use([Controller, Pagination, Scrollbar, Navigation]);

document.addEventListener('DOMContentLoaded', () => {
  // projects section
  replaceElem('.projects__navigation');
  const someData = getDataBase();
  initSlider(someData);

  // dreams section
  const swiperDreamsGround = new Swiper('.dreams__swiper-ground', {
    speed: 1200,
    loop: false,
    pagination: {
      el: '.swiper-pagination-dreams',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });

  const swiperDreamsCollage = new Swiper('.dreams__swiper-collage', {
    speed: 1200,
    loop: false,
  });

  swiperDreamsGround.controller.control = swiperDreamsCollage;
  swiperDreamsCollage.controller.control = swiperDreamsGround;
})
