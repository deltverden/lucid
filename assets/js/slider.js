'use strict';

$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }]
});