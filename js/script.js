$(function() {
 var webpage = $('html, body'); // select html & body elements

    // styling for nav bar, for fade effect on mouseover
    $('.fadeElem').hover(function() {
        // on mouseover, make current element visible
      $(this).stop(true).fadeTo(300, 1); // duration, opacity
    }, function() {
        // on mouseout, fade current element
      $(this).stop(true).fadeTo(300, .8);
    });

    // slider for lyrics
    // hide .lyrics elements
    $(".lyrics").hide('slow');
    $(".title").click(function() {
    // toggle child elements of current object
    $(this).parent().children(".lyrics").slideToggle();
    });


    // slider for lyrics
    // hide .lyrics elements
    $(".slideToggle").hide('slow');
    $(".slider").hover(function() {
    // toggle child elements of current object
    $(this).parent().children(".slideToggle").slideToggle();
    });

    // home button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('#homeBtn').fadeIn(); // show homebutton when scrolled away from top
        } else {
            $('#homeBtn').fadeOut();
        }
    });

    //home button smooth scroll to top
    $('#homeBtn').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
        webpage.stop().animate({
          scrollTop: 0
        }, 2000, "easeInOutQuint");
    });
});
