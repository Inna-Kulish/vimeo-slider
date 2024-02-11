import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { indexOfSlide } from "./modal";

// slider video picture
const swiper = new Swiper(".video-swiper", {
  navigation: true,
  loop: false,

  modules: [Navigation, Pagination],
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider in popup
const swiperPopup = new Swiper(".modal", {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".popup-swiper-pagination",
    clickable: true,
  },
});

swiperPopup.on("slidesUpdated", function () {
  console.log('tut')
  swiperPopup.activeIndex = indexOfSlide;
  swiper.update();
});
