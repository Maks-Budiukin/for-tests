$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        speed: 750,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        touchThreshold: 15,
        waitForAnimate: false,
        asNavFor: ".slider-image",
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '185px',
        focusOnSelect: true,
        


        
    });

    $('.slider-image').slick({
        arrows: false,
        speed: 750,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        touchTreshold: 15,
        waitForAnimate: false,
        fade: true,
        
    });
});