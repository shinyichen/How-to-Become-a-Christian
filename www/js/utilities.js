// Authors: Mark Smullen and Terry Penner
// Date Created: March 13, 2014
// Purpose: Supports the h2bac.html and devotionalpages.html pages

// Global Variables
// ****************************************************************************
var permenantStorage = window.localStorage;
var percent = 0;

// Font sizes
var size = {
	TINY: "10pt",
	SMALL: "12pt",
	NORMAL: "14pt",
	LARGE: "16pt",
	HUGE: "18pt"
};

// Document utilities initialization
// ****************************************************************************
$(document).ready(function() {
	loadDoc();
	setupMenu();
});

// Support functions
// ****************************************************************************

// Scaling the text size based on the user's choice
function setScale(fontSize) {
	$('#content').css('font-size', fontSize);
	permenantStorage.setItem("font", fontSize);
	
	if (percent == null) {
		percent = 0;
	}
	var pageLoc = percent * ($(document).height() - $(window).height());
	$('html, body').animate({scrollTop: pageLoc}, 1);
}

// This function sets the click events for showing and hiding the settings menu
function setupMenu() {
	$("#menubutton").click(function() {
		$("#menudropdown").toggle();
	});
	$(document).click(function(e) {
		if ($(e.target).is($("#menudropdown").find("*").add($("#menubutton")))) {
			return false;
		}
		$("#menudropdown").hide();
	});
}

// From https://gist.github.com/tsi/5137145
// By tsi
function loadDoc() { 
	// Load external contents
	$("[data-html]").each(function() {
		element = $(this);
		var src = "content/" + $(this).attr("data-html") + ".html";
		
		element.load(src, updateProgress);
	});
}
