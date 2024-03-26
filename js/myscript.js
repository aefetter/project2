/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// typewriter animation for Chanel page
var i = 0;
var txt = '"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("chanel-quote").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Call the typeWriter function after page loads
window.onload = function() {
  typeWriter();
};