// manages activity

'use strict';

var primary1 = document.documentElement.style.getPropertyValue('--primary-1');   // #E85A4F
var primary2 = document.documentElement.style.getPropertyValue('--primary-2');

// create reference to button in page
// const switcher = document.querySelector('.btn');


// TODO: make hovering over stuff change stuff


// handle event for button click
// let btn = document.querySelector(".projectButton"),

// btn.addEventListener("mouseenter", function( event ) {   
//   event.target.style.color = "purple";
// }, false);
// btn.addEventListener("mouseleave", function( event ) {   
//   event.target.style.color = "";
// }, false);


// `filter` is a string representing the id to refer to the div to show
function sortBy(filter) {
	var filteredItems = document.getElementById(arguments[0]);

	// only do stuff if the clicked button's content isn't currently being displayed
	if (filteredItems.style.display != 'block') {
		// hide all currently displayed divs, then show the correct one + highlight selected category
		document.getElementById('sortAll').style.display = 'none';
		document.getElementById('sortSoftware').style.display = 'none';
		document.getElementById('sortIOS').style.display = 'none';
		document.getElementById('sortFirmware').style.display = 'none';
		document.getElementById('sortMechanical').style.display = 'none';

		filteredItems.style.display = 'block';

		// get clicked button item
		var btn = document.getElementById(arguments[0].toString().concat('Btn'));

		document.getElementById('sortAllBtn').style.backgroundColor = primary1;
		document.getElementById('sortSoftwareBtn').style.backgroundColor = primary1;
		document.getElementById('sortIOSBtn').style.backgroundColor = primary1;
		document.getElementById('sortFirmwareBtn').style.backgroundColor = primary1;
		document.getElementById('sortMechanicalBtn').style.backgroundColor = primary1;

		btn.style.backgroundColor = 'rgb(233, 128, 116)';   // #E98074
	}

	// move underline to pressed button. add slide transition if possible
}




