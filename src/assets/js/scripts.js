import $ from "jquery";

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 200) {
    $(".nav-bar").addClass("nav-bar_scroll");
    $(".nav-bar-inner").addClass("nav-bar-inner_scroll");
  } else {
    $(".nav-bar").removeClass("nav-bar_scroll");
    $(".nav-bar-inner").removeClass("nav-bar-inner_scroll");
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > $("#apps").offset().top - 400) {
    $(".content-info").removeClass("hidden");
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > $("#content-info-second").offset().top - 400) {
    $(".content-info").removeClass("hidden-second");
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > $("#find-a-doctor").offset().top - 300) {
    $(".services-option:nth-child(1)").removeClass("hidden");
    setTimeout(() => {
      $(".services-option:nth-child(2)").removeClass("hidden");
    }, 200);
    setTimeout(() => {
      $(".services-option:nth-child(3)").removeClass("hidden");
    }, 400);
    setTimeout(() => {
      $(".services-option:nth-child(4)").removeClass("hidden");
    }, 600);
    setTimeout(() => {
      $(".services-option:nth-child(5)").removeClass("hidden");
    }, 800);
    setTimeout(() => {
      $(".services-option:nth-child(6)").removeClass("hidden");
    }, 1000);
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > $("#about-us").offset().top - 400) {
    $(".separate-article:nth-child(1)").removeClass("hidden");
    setTimeout(() => {
      $(".separate-article:nth-child(2)").removeClass("hidden");
    }, 200);
    setTimeout(() => {
      $(".separate-article:nth-child(3)").removeClass("hidden");
    }, 400);
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 700) {
    $(".arrow").addClass("arrow-shown");
  } else {
    $(".arrow").removeClass("arrow-shown");
  }
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > $("#footer").offset().top - 800) {
    $(".arrow").addClass("arrow-light");
  } else {
    $(".arrow").removeClass("arrow-light");
  }
});

function scrolling(className) {
  $(className).click(function () {
    $(".menu").removeClass("menu-shown");
    $(".burger-menu").removeClass("burger-menu_clicked");
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 750,
        easing: "swing",
      }
    );
    return false;
  });
}

$(document).ready(scrolling(".menu__link"));
$(document).ready(scrolling(".footer-list__link"));
$(document).ready(scrolling(".arrow"));

$(document).scroll(function () {
  if (
    $(window).scrollTop() > $("#home").offset().top &&
    $(window).scrollTop() < $("#find-a-doctor").offset().top - 101
  ) {
    $(".menu__link_active").removeClass("menu__link_active");
    $(".menu__link-home").addClass("menu__link_active");
  } else if (
    $(window).scrollTop() > $("#find-a-doctor").offset().top - 100 &&
    $(window).scrollTop() < $("#apps").offset().top - 101
  ) {
    $(".menu__link_active").removeClass("menu__link_active");
    $(".menu__link-find-a-doctor").addClass("menu__link_active");
  } else if (
    $(window).scrollTop() > $("#apps").offset().top - 100 &&
    $(window).scrollTop() < $("#testimonials").offset().top - 101
  ) {
    $(".menu__link_active").removeClass("menu__link_active");
    $(".menu__link-apps").addClass("menu__link_active");
  } else if (
    $(window).scrollTop() > $("#testimonials").offset().top - 100 &&
    $(window).scrollTop() < $("#about-us").offset().top - 101
  ) {
    $(".menu__link_active").removeClass("menu__link_active");
    $(".menu__link-testimonials").addClass("menu__link_active");
  } else if ($(window).scrollTop() > $("#about-us").offset().top - 100) {
    $(".menu__link_active").removeClass("menu__link_active");
    $(".menu__link-about-us").addClass("menu__link_active");
  }
});

$(".burger-menu").on("click", function () {
  $(".menu").toggleClass("menu-shown");
  $(this).toggleClass("burger-menu_clicked");
});
