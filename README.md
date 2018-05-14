# committee
![alt text](https://github.com/sadfaerie/committee/blob/master/images/project.png)
https://sadfaerie.github.io/committee/<br><br>
<h1>A band tribute project.</h1>

<h2>The Purpose:</h2>

<p>Build a static (front-end only) website for a band: The Committee. 
The design is to match the band image: dark, gloom and raw. 
The band's fans listen to metal music and prefer dark themes.</p>

<p>Visitors should be able to:
- get information about the band and its members
- listen to audio files
- watch music videos 
- get information about future events
- contact the band via contact form and via links to social media sites. </p>


<p>Prior to using the imagery, I have obtained written permission from The Committee - band. 
All photos, songs and lyrics are property of The Committee, and can be found here: http://thecommitteeband.weebly.com</p>


<h2>Technologies used:</h2>
HTML<br>
CSS<br>
JS<br>

<<<<<<< HEAD
<h2>Testing:</h2>
Devices used: desktop monitors: 13", 15", 21"<br>
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
  }</code>
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



=======
>>>>>>> b5064a22d5b3cdb31e4435778114b89ada79b3d0

<br><br>

<h2>Credits:</h2>
https://codeinstitute.net<br>
https://sitepoint.com (JQuery tutorials: fade and parallax.js)<br>
https://www.w3schools.com (Less tutorial)<br>
https://stackoverflow.com (used during testing to troubleshoot encountered problems)<br>
https://validator.w3.org/ (used for validation and troubleshooting)<br><br>

