$(document).ready(function() {
    $('.mouse-click, #about').click(function() {
      $('html, body, .intro').animate({ scrollTop: $('.about').offset().top}, 1000, 'linear');
    });
  });