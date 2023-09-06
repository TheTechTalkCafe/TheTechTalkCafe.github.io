// This script only shows a message on web browser console

function showConsoleMessage() {
	// Get the File Language Extension to show message
	var fileLangExtension = location.href.split("/").slice(-1)[0].split('.')[1];

	let asciiArt = `
  _______ _       _______        _  _______    _ _     _____       __     
 |__   __| |     |__   __|      | ||__   __|  | | |   / ____|     / _|    
    | |  | |__   ___| | ___  ___| |__ | | __ _| | | _| |     __ _| |_ ___ 
    | |  | '_ \\ / _ \\ |/ _ \\/ __| '_ \\| |/ _\` | | |/ / |    / _\` |  _/ _ \\
    | |  | | | |  __/ |  __/ (__| | | | | (_| | |   <| |___| (_| | ||  __/
    |_|  |_| |_|\\___|_|\\___|\\___|_| |_|_|\\__,_|_|_|\\_\\\\_____\\__,_|_| \\___|
`;
	var msg = "";

	if (fileLangExtension == 'es') {
		msg += "Bienvenido a ...\n" + asciiArt + "\nEl podcast de tecnología y más!\n\nSi Estás viendo esto quiere decir que probablemente sepas algo más sobre tecnología... Entonces diviértete con nuestro contenido!"
	} else {
		msg += "Welcome to ... \n" + asciiArt + "\nThe podcast about tech and more!\n\nIf you are watching this means that you'll probably know something more about tech... So enjoy yourself with our content!!"
	}

	console.log(msg);
}

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
	showConsoleMessage();
	showJSONMessage(); // TESTING -> // TODO: solve asciiArt displaying bad
})

// TODO -> On changing languages, display correct message (now it persists)