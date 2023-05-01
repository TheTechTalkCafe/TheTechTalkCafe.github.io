// This script has the same purpose as the styles.css file
// This script file will provide the basic funtionallity common on every page in this website


// Select the hamburger menu object
document.querySelector(".hamburger").addEventListener("click", showHamburguerMenu);
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");

function showHamburguerMenu() {
	line1.classList.toggle("active-line1");
	line2.classList.toggle("active-line2");
	line3.classList.toggle("active-line3");
}