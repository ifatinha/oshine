import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const initializeSwiper = new Swiper("#homeCarousel", {
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
