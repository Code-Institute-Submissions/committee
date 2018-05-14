<h2>Testing:</h2>
Devices used: desktop monitors: 13", 15", 21"<br><br>
Touch devices: <br>
Xiaomi MI, Android 7.1.2<br>
iPad mini 2, iOS 11.3<br>
Google Pixel 1, Android 8.1.0<br>
iPhone 5SE, iOS 10<br>
<br>
Browsers: <br>
Google Chrome: <br>
Safari: <br>
IE: <br>
Firefox: <br>
<br>
<br>
- :hover used to highlight band members photos proved unusable on touch devices, and was addressed by adding: <br>
  <code>@media (hover:hover) {
  .................
  }</code><br>
  Ultimately, this did not pass validation tests and was removed, to avoid display issues on touch devices. <br>
<br>
- css @media property was used extensively to achieve consistens layout when displaying the project on various devices<br>
<br>
- removed .hover for sliders as it was causing problems on touch devices
<p><code>
    // slider for lyrics
    // hide .lyrics elements
    $(".slideToggle").hide('slow');
    // $(".slider").hover(function() { -- changing to click, due to hover issues on touch devices
    $(".slider").hover(function() {
    // toggle child elements of current object
    $(this).parent().children(".slideToggle").slideToggle();
    });
  </code></p>
<br>
iframe for youtube video: failed validation, moved deprecated attributes (frameborder, widht%) to CSS stylesheet
<br>

<h3>CSS Validation:</h3>
<h4>https://jigsaw.w3.org/css-validator/validator</h4>
<p>Showing results for<br>
- carousel.css: Document checking completed. No errors or warnings to show.<br>
- contact.css: Document checking completed. No errors or warnings to show.<br>
- members.css: Document checking completed. No errors or warnings to show.<br>
- nav.css: Document checking completed. No errors or warnings to show.<br>
- responsive.css: Document checking completed. No errors or warnings to show.<br>
- style.css: Document checking completed. No errors or warnings to show.<br>
