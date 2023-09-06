// This script only shows a message on web browser console
function showJSONMessage() {
	// ASCII Art constant variable
	let asciiArt = `
  _______ _       _______        _  _______    _ _     _____       __     
 |__   __| |     |__   __|      | ||__   __|  | | |   / ____|     / _|    
    | |  | |__   ___| | ___  ___| |__ | | __ _| | | _| |     __ _| |_ ___ 
    | |  | '_ \\ / _ \\ |/ _ \\/ __| '_ \\| |/ _\` | | |/ / |    / _\` |  _/ _ \\
    | |  | | | |  __/ |  __/ (__| | | | | (_| | |   <| |___| (_| | ||  __/
    |_|  |_| |_|\\___|_|\\___|\\___|_| |_|_|\\__,_|_|_|\\_\\\\_____\\__,_|_| \\___|
`;
	// Constant for the message file
	const file = "/files/welcome.json";
	// Get the File Language Extension to show message
	var fileLangExtension = location.href.split("/").slice(-1)[0].split('.')[1];
	// Final message variable
	var finalMsg;

	// Fetch the JSON file
	fetch(file)
		.then(response => {
			// Checking the response is successful
			if (!response.ok) {
				throw new Error("Something went wrong reading the file");
			}
			// Parse the response as a JSON
			return response.json();
		})
		.then(data => {
			// Get the parsed JSON data and assign it to variables
			if (fileLangExtension == 'es') {
				finalMsg = data['msg']['es']['f'] + asciiArt + data['msg']['es']['s'];
			} else {
				finalMsg = data['msg']['en']['f'] + asciiArt + data['msg']['en']['s'];
			}
			console.log(finalMsg);
		})
		.catch(error => {
			// Handling error
			console.error("Error: ", error);
			finalMsg = "Something went wrong displaying the WELCOME message. Please forgive us";
			console.log(finalMsg);
		})
}

window.addEventListener("load", () => {
	showJSONMessage();
})
