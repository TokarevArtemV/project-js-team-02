import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    speed: 200,
    loop: true,
  
    pagination: {
      el: '.pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    },
  });
  