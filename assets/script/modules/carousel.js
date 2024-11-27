import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const initializeSwiperHome = new Swiper("#homeCarousel", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  spaceBetween: 30,
});

const initializeAboutSlide = new Swiper("#swiperAboutSlide", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  pagination: {
    el: "#swipeAboutSlidePagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#aboutSlideNext",
    prevEl: "#aboutSlidePrev",
  },
});
