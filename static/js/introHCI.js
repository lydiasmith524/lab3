'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
console.log("some string");

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$(".jumbotron p").toggleClass("active");
		$("#testjs").text("Please wait ...");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
$("a.thumbnail").click(projectClick);
function projectClick(e) {
	console.log("project clicked");
	e.preventDefault();
	$(this).css("background-color", "#9332a8");
	//var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
    $(description).fadeOut()
}


}
