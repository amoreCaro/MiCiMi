export default function news() {
  return new Swiper(".news__slider", {
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
}