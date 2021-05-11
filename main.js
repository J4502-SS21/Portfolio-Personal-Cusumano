<script>

"use strict";

var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementByID('menu_trigger');

menuTrigger.onclick = function() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  console.log("The menu has been toggled!")
}

menuTrigger.onclick = menuToggle;
</script>

<p id="demo"></p>

var countDownDate = new Date("Jan 1, 2064 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY ST. LOUIS!";
  }
}, 1000);
</script>
