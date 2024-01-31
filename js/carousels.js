import Swiper from "swiper/bundle";

const reviewsSwiper = new Swiper(".reviews-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 500,
  grabCursor: true,
  autoHeight: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const teamSwiper = new Swiper(".team-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 500,
  grabCursor: true,
  autoHeight: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
