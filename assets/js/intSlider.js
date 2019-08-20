var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    navigation: {
      nextEl: '.mainSliderRight',
      prevEl: '.mainSliderLeft',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });