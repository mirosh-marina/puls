// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right_solid.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 } 
//             }
//         ]
    
//       });
//       }); 


const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1,
        arrows: false
      },
      700: {
        gutter: 30,
        arrows: false
      },
      900: {
        items: 1,
        arrows: false
      }
    }
  });

document.querySelector('.prev').addEventListener('click' , function () {slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click' , function () {slider.goTo('next');
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
$(this)
  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});








