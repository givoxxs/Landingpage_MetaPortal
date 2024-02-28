$(document).ready(function(){
    $('.slider_top').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        draggable: false,
        prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
            breakpoint: 768, // 768
            settings: {
                centerMode: false,
                // centerPadding: '40px',
                slidesToShow: 1
            }
            },
        ]

    
    });
  });

  $('.slider_step').slick({
    dots: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    draggable: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });