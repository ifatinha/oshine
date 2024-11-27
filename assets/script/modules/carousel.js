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

const initializeAboutSlide = new Swiper("#aboutCarousel", {
  centeredSlides: true,
  direction: "vertical",
  speed: 600,
  slidesPerView: 1,
  navigation: {
    nextEl: "#aboutSlideNext",
    prevEl: "#aboutSlidePrev",
  },
});

const initializeTestimonialCarousel = new Swiper("#testimonialCarousel", {
  speed: 700,
  pagination: {
    el: "#testimonialCarouselPagination",
    clickable: true,
    dynamicBullets: true,
  },
});
