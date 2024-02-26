$(document).ready(function () {
  

  if ($(window).width() <= 1300) {
    $(".accordion-content").css("display", "none");
  $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideToggle('ease-out');
    $(this).toggleClass("open").next().slideToggle('ease-out');
  });
  }
  else {
    $(".accordion-content:not(:first-of-type)").css("display", "none");
    $(".js-accordion-title:first-of-type").addClass("open");

  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideToggle('ease-out');
    $(this).toggleClass("open").next().slideToggle('ease-out');
  });
  }
});