$(document).ready(function(e){


  /* 스와이퍼 */
  var swiper = new Swiper(".mainSwiper", {
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: {
      enabled: true,
    }
  });
})