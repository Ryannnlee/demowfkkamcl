"use strict";

// homepage.js
;

(function ($) {
  $('.slide-banner').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    cssEase: 'ease-in-out'
  });
})($);