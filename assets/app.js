$(document).ready(function(){
    $('.slider_top').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 768, // 768
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
  });