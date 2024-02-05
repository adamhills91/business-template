import Swiper from "swiper/bundle";

if (document.querySelector(".reviews-swiper")) {
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
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1024: {
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
}

if (document.querySelector(".team-swiper")) {
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
}

if (document.querySelector(".portfolio-swiper")) {
  const portfolioSwiper = new Swiper(".portfolio-swiper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
