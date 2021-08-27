// Scroll effect of the mouse click icon
$(document).ready(function() {
    $('.mouse-click').click(function() {
      $('html, body, .intro').animate({ scrollTop: $('.about').offset().top}, 1000, 'linear');
    });
  });