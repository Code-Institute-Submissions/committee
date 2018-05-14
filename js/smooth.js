 $(function() {
   var webpage = $('html, body, main'); // select html & body elements

    $('.navLinks').on('click', function(evnt) {
       // prevent jump scrolling
       evnt.preventDefault();
       evnt.stopPropagation();
       // webpage.stop().animate({
       webpage.animate({
         scrollTop:$($(this).attr('href')).offset().top // get the value of the selected link (section id), then offset it from the top of the page
       }, 2000, "easeInOutQuint"); // delay scroll for smooth effect
    });

 });
