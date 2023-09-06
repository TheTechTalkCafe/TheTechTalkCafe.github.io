// This script has the same purpose as the styles.css file
// This script file will provide the basic funtionallity common on every page in this website

// When all the content is loaded:
$(document).ready(() => {
	// Show the ASIDE element
	$("#hamburger-btn").click(() => {
		$('aside').toggleClass("active");
		$("#hamburger-btn").toggleClass("cross");
	})
})

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

// Add listener on load page to show a joke in the FOOTER element
window.addEventListener("load", () => {
	// jQuery DOM to the JOKE div
	const jokeDiv = $("#joke");
	// Constant for the jokes file
	const jokes = "/files/jokes.json";
	// Get the File Language Extension to show message
	var fileLangExtension = location.href.split("/").slice(-1)[0].split('.')[1];

	// Pick a random joke depending on the language extension
	fetch(jokes)
		.then(response => {
			// Checking the response is successful
			if (!response.ok) {
				throw new Error("Something went wrong reading the file");
			}
			// Parse the response as a JSON
			return response.json();
		})
		.then(data => {
			jokeDiv.text(data[fileLangExtension][(Math.floor(Math.random() * data[fileLangExtension].length))]);
		})
		.catch(error => {
			// Handling error
			console.error("Error: ", error);

		})
})