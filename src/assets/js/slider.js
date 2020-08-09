import $ from "jquery";
import "slick-carousel";
import "../../../node_modules/slick-slider/slick/slick.scss";

$(".slider-testimonials").slick({
  dots: true,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
});
