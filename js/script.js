// This script has the same purpose as the styles.css file
// This script file will provide the basic funtionallity common on every page in this website

// DOM for the aside element
let aside = document.querySelector('#aside');

// Show aside menu function
function showAside() {
	aside.style.visibility = "visible";
}

// Hide aside menu function
function closeAside() {
	aside.style.visibility = "hidden";
}

// TODO: Add listener to document to close aside if user clicks outside the menu
// TODO: JS Animation on close&open aside

// Listener to close ASIDE if user clicks outside when it's active

// document.onclick = function (e) {
// 	if (!aside.contains(e.target) && !hamb.contains(e.target)) {
// 		line1.classList.remove("active-line1");
// 		line2.classList.remove("active-line2");
// 		line3.classList.remove("active-line3");
// 		aside.classList.remove("aside-active");
// 	}
// }