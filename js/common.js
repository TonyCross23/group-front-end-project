$(document).ready(function () {
  $('#menu-icon').on('click', function () {
    $(this).toggleClass('active');
    $('.h-menu').toggleClass('is-show');
  });
});
