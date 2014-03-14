// Authors: Mark Smullen and Terry Penner
// Date Created: March 13, 2014
// Purpose: Supports the h2bac.html page

// Document initialization
// ****************************************************************************
$(document).ready(function() {
	loadDoc();
	setupMenu();
	
	// Loading the user's current page at the beginning and setting the text size
	currentPage = permenantStorage.getItem("page");
	if (currentPage == null) {
		currentPage = 2;
	}
	setScale(permenantStorage.getItem("font"));
});

// Support functions
// ****************************************************************************

// This function sends the email with the form's values
function sendResponse() {
	window.plugin.email.isServiceAvailable(
		function (isAvailable) {
			window.plugin.email.open({
				to:          ['terrencepenner@gmail.com'],
				subject:     'H2BAC Response',
				body:        '<h3>TEST</h3><h2>TEST</h2><h1>TEST</h1>',
				isHtml:      true
			});
		}
	);
}

// Dummy function for document load callback
function updateProgress() {
}

function openResponse() {
	// Open response form
	$("#response").style.display = "inherit";
}

function closeResponse() {
	// Close response form when anywhere else is clicked
	$("#response").style.display = "none";
}

$("button").on("click", openResponse);