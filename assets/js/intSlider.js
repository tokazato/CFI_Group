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
    speed: 1000,
    spaceBetween: 100,
  //   on: {
  //     slideChange: function () {

  //       // let currentIndex = this.realIndex + 1;
  //       // document.getElementById("mainslider-index").textContent =  currentIndex < 10 ? '0' + currentIndex : currentIndex;

  //       // if(currentIndex/10 < 1){
  //       //   document.getElementById("mainslider-index").textContent = '0' + (currentIndex);
  //       // }else {
  //       //   document.getElementById("mainslider-index").textContent = (currentIndex)/10;
  //       // }

  //       // document.getElementById("mainslider-index").textContent = (currentIndex)/10;



  //       // transform 
  //       let fromTop = (79 * this.realIndex);
  //       document.getElementById("indexCounter").style.top = `${-fromTop}px`;
  //       console.log(-fromTop + "px");
  //     },
  //   }
  });

  var mq = window.matchMedia(' (min-width:550px)' );

  if(mq.matches){
    swiper.on('slideChange', function(){
      let fromTop = (79 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
          console.log(-fromTop + "px");
    })
  }else{
    swiper.on('slideChange', function(){
      let fromTop = (25 * this.realIndex);
          document.getElementById("indexCounter").style.top = `${-fromTop}px`;
          console.log(-fromTop + "px");
    })
  }

