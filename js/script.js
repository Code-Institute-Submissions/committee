$(function() {
 var webpage = $('html, body'); // select html & body elements

    // styling for nav bar, for fade effect on mouseover
    $('.fadeElem').hover(function() {
        // on mouseover, make current element visible
      $(this).stop(true).fadeTo(300, 1); // duration, opacity
    }, function() {
        // on mouseout, fade current element
      $(this).stop(true).fadeTo(300, .7);
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
    $('#homeBtn').on('click', function() {
      evnt.preventDefault();
      evnt.stopPropagation();
        webpage.stop().animate({
          scrollTop: 0
        }, 2000, "easeInOutQuint");
    });


    $(window).on('wheel', function() {
      evnt.stopPropagation();
      evnt.preventDefault();
      var scrollAmt = evnt.originalEvent.wheelDelta > 0 ? '-=350' : '+=350';
      webpage.stop().animate({
        scrollTop:scrollAmt
      },500,"linear");
    });

});
