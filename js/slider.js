import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { indexOfSlide } from "./modal";

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


const swiperPopup = new Swiper('.modal', {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".popup-swiper-pagination",
    clickable: true,
  },
});

swiperPopup.on('slidesUpdated', function () {
  swiperPopup.activeIndex = indexOfSlide;
  swiper.update();
  // swiper.pagination.update();
  // console.log(swiperPopup)
})