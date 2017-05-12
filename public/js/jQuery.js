$(document).ready(function() {

  $('body').fadeIn()

  $(".dropdown-button").dropdown();

  $('.carousel').carousel();

  var amountScrolled = 500;

  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });

  $('a.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

});
