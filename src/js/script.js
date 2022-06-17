var slider = tns({
  container: '.carousel__slide',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls:false,
  nav: false,
  autoHeight:true,
  responsive: {
    575: {
      nav: false,
    },
    320: {
      nav: true,
    }
     }
});

document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};

/* $(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            },
          ]
    });
}); slick slider */

