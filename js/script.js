
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.
	loadData();
});

function loadData() {

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
	$.getJSON("js/donations_over_5K.json", function(data) {
		writeTable(data);
    });
}


function writeTable(data) {

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
	for (i=0; i<data.length; i++) {
		var ComNm = data[i]["Committee"];
		var ConDate = data[i]["Contribution Date"];
		var ConInf = data[i]["Contribution Information"];
		var Amount = data[i]["Amount"];

		if (ComNm == "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"){
			$(".table").append(
				"<tr>"+"<td class = 'Date'>"+ConDate+"</td>"+"<td class = 'Info'>"+ConInf+"</td>"+"<td class = 'Amt'>"+Amount+"</td>"+"</tr>"

				);

				}
		}
}

