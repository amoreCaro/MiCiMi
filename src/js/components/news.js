export default function news() {
  return new Swiper(".news__slider", {
    // spaceBetween: 30, // Space between slides
    slidesPerView: 3, // Show 3 slides at once
    autoplay: {
      delay: 2500, // Delay for autoplay
      disableOnInteraction: false, // Keeps autoplay after interaction
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    pagination: {
      el: ".swiper-pagination", // Pagination container
      clickable: true, // Makes pagination clickable
    },
    breakpoints: {

    },
  });
}
