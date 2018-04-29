$(function() {

    // styling for nav bar, for fade effect on mouseover
    $('.fadeElem').hover(function() {
        // on mouseover, make current element visible
      $(this).stop(true).fadeTo(200, 1); // duration, opacity
    }, function() {
        // on mouseout, fade current element
      $(this).stop(true).fadeTo(300, .4);
    });


    // slider - toggle slide down and up on click
    // $(".slider").click(function(){
    //         $(".slideToggle").slideToggle("slow");
    // });

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

});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('#homeBtn').fadeIn();
        } else {
            $('#homeBtn').fadeOut();
        }
    });
    $('#homeBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
