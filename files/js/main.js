var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var logo = document.getElementById("logo");
var nadpis = document.getElementById("nadpis");
var podnadpis = document.getElementById("podnadpis");
var navbar = document.getElementById("navbarID");
var menuPortfolio = document.getElementById("menuPortfolio");
var textWrap = document.getElementById("textWrap");
var uvod = document.getElementById("uvod");
var referenceClient = document.getElementById("referenceClient");
var referencePersonal = document.getElementById("referencePersonal");
var buttonWrap = document.getElementById("workButtons");

function buttonSwitch(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}
function Client() {
    referenceClient.style.display = "block";
    referencePersonal.style.display = "none";
}
function Personal() {
    referenceClient.style.display = "none";
    referencePersonal.style.display = "block";
}
