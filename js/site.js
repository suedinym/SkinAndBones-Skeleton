/* Sliding top navigation */
function openTopNav() {
    document.getElementById("slidingTopNav").style.height = "100%";
}

function closeTopNav() {
    document.getElementById("slidingTopNav").style.height = "0%";
}


var slideMq = window.matchMedia("(min-width: 479px)");

/* Sliding side navigation */
 function openSideNav() {
if (slideMq.matches) {
  /* the viewport is at least 479 pixels wide */
  document.getElementById("slidingSideNav").style.width = "40%";
  
} else {
  /* the viewport is less than 479 pixels wide */
  document.getElementById("slidingSideNav").style.width = "100%";
}


}
slideMq.addListener(function(changed) {
   
       document.getElementById("slidingSideNav").style.width = "0";
   
});



function closeSideNav() {
    document.getElementById("slidingSideNav").style.width = "0%";
}
