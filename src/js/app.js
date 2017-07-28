// JS Goes here - ES6 supported

var $ = window.jQuery;

$(document).ready(function() {
  $(".carousel").slick({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    prevArrow: "<button class='heart-arrow heart-left'><img src='/images/assets/heart-left.png'></button>",
    nextArrow: "<button class='heart-arrow heart-right'><img src='/images/assets/heart-right.png'></button>",
    autoplay: true,
    autoplaySpeed: 3000,
    appendArrows: $(".carousel-holder"),
  });

  $(".get-married h1").animate({
    marginLeft: "0px"
  }, {
    duration: 1500,
    done: function() {
      $(".i-left, .i-right").css({
        visibility: "visible"
      });
      $(".i-right, .i-left").animate({
        left: 0
      }, {
        duration: 1000,
        done: function() {
          window.confettify();
        }
      });
    }
  });
});
