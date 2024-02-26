$(document).ready(function () {
    $('.tab-nav li:first-child').addClass('active');
  $('.navtab-content').hide();
  $('.navtab-content:first').show();

  $('.tab-nav li').click(function () {
    $('.tab-nav li').removeClass('active');
    $(this).addClass('active');
    $('.navtab-content').hide();

    var Tab = $(this).find('a').attr('href');
    $(Tab).fadeIn();
    return false;
  })
});