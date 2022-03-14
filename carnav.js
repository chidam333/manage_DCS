const carousel = document.querySelector("gcar");
const slides = document.querySelectorAll(".gslide1");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

function left(){

}

function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".icon");
    var z = document.querySelector(".icon1");
    var u = document.querySelector(".navbar");
    if (x.style.display === "block") {
      u.style.height = "8vh"
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      
    } else {
      u.style.height = "50vh"
      y.style.display = "none" ;
      x.style.display = "block";
      z.style.display = "block"
    }
  }