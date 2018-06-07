# committee
![alt text](https://github.com/sadfaerie/committee/blob/master/images/project.png)
https://sadfaerie.github.io/committee/<br><br>
<h1>A band tribute project.</h1>

<h2>The Purpose:</h2>

<p>Build a static (front-end only) website for a band: The Committee. <br>
The design is to match the band image: dark, gloom and raw. <br>
The band's fans listen to metal music and prefer dark themes.<br>
</p>

<p>Visitors should be able to:
<ul>
  <li>get information about the band and its members</li>
  <li>listen to audio files</li>
  <li>watch music videos </li>
  <li>get information about future events</li>
  <li>contact the band via contact form and via links to social media sites.</li>
</ul><br>
</p>


<p>Prior to using the imagery, I have obtained written permission from The Committee - band.<br>
All photos, songs and lyrics are property of The Committee, and can be found here: http://thecommitteeband.weebly.com
</p>
<br>

<h2>Technologies used:</h2>
<p><ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  </ul>
</p>
<br>

<h2>Testing:</h2>
<h3>Devices used:</h3>
<ul>
  <li>desktop monitors: 13", 15", 21"</li>
</ul><br>
<h3>Touch devices:</h3>
<ul>
  <li>Xiaomi MI, Android 7.1.2</li>
  <li>iPad mini 2, iOS 11.3</li>
  <li>Google Pixel 1, Android 8.1.0</li>
  <li>iPhone 5SE, iOS 10</li>
</ul>
<br>
<h3>Browsers:</h3>
<ul>
  <li>Google Chrome</li>
  <li>Safari</li>
  <li>IE</li>
  <li>Firefox</li>
</ul>
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
<br><br>

<h2>Validators:</h2>
https://validator.w3.org/i18n-checker/ - passed
https://validator.w3.org/nu/ - passed

<br>

<h2>Credits:</h2>
https://codeinstitute.net<br>
https://sitepoint.com (JQuery tutorials: fade and parallax.js)<br>
https://www.w3schools.com (Less tutorial)<br>
https://stackoverflow.com (used during testing to troubleshoot encountered problems)<br>
https://validator.w3.org/ (used for validation and troubleshooting)<br><br>
