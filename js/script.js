$(function() {
    $('.fadeElem').hover(function() {
        // Code for Mouseover
      $(this).stop(true).fadeTo(200, 1); // duration, opacity
    }, function() {
        // Code for Mouseout
      $(this).stop(true).fadeTo(300, .4);
    });
});
