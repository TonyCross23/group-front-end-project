$(document).ready(function () {
  $(".category-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
  });
  $('.pslider').slick({
    dots:false,
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow:' <span class="left-arrow"><img src="./img/product/img_leftarrow.png" alt="left-arrow"></span>',
    nextArrow:' <span class="right-arrow"><img src="./img/product/img_rightarrow.png" alt="right-arrow"></span>'
  });
});