// This script has the same purpose as the styles.css file
// This script file will provide the basic funtionallity common on every page in this website


// Select the hamburger menu object
document.querySelector(".hamburger").addEventListener("click", showHamburguerMenu);
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const aside = document.querySelector(".aside");
const hamb = document.querySelector(".hamburger");

function showHamburguerMenu() {
	line1.classList.toggle("active-line1");
	line2.classList.toggle("active-line2");
	line3.classList.toggle("active-line3");
	aside.classList.toggle("aside-active");
}

// Listener to close ASIDE if user clicks outside when it's active

document.onclick = function (e) {
	if (!aside.contains(e.target) && !hamb.contains(e.target)) {
		line1.classList.remove("active-line1");
		line2.classList.remove("active-line2");
		line3.classList.remove("active-line3");
		aside.classList.remove("aside-active");
	}
}