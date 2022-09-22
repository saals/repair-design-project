// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper, { Controller, Pagination, Scrollbar, Navigation } from "swiper";
Swiper.use([Controller, Pagination, Scrollbar, Navigation]);

document.addEventListener('DOMContentLoaded', () => {

  const swiperImg = new Swiper(".projects__swiper-img", {
    speed: 1200,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  const swiperTxt = new Swiper(".projects__swiper-txt", {
    speed: 1200,
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });

  swiperTxt.controller.control = swiperImg;
  swiperImg.controller.control = swiperTxt;
})
