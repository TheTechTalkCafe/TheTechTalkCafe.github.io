// This script has the same purpose as the styles.css file
// This script file will provide the basic funtionallity common on every page in this website

document.getElementById('burgerMenu').checked;

function showMenu() {
	let hamburger = document.getElementById('burgerMenu').checked;
	let aside = document.getElementsByTagName(aside)
	if (hamburger) {
		// aside.style.translate = "0";
		console.log(hamburger);
	} else {
		// aside.style.translate = "-100";
		console.log(hamburger);
	}
}


