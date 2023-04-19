// manages activity

'use strict';

var primary1 = document.documentElement.style.getPropertyValue('--primary-1');   // #E85A4F
var primary2 = document.documentElement.style.getPropertyValue('--primary-2');



// TODO: make hovering over buttons change what is displayed in them



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
		document.getElementById('sortCoursework').style.display = 'none';

		// show correct items, fade in
		filteredItems.style.display = 'block';
		fadeIn(filteredItems)

		// get clicked button item
		var btn = document.getElementById(arguments[0].toString().concat('Btn'));

		document.getElementById('sortAllBtn').style.backgroundColor = primary1;
		document.getElementById('sortSoftwareBtn').style.backgroundColor = primary1;
		document.getElementById('sortIOSBtn').style.backgroundColor = primary1;
		document.getElementById('sortFirmwareBtn').style.backgroundColor = primary1;
		document.getElementById('sortMechanicalBtn').style.backgroundColor = primary1;
		document.getElementById('sortCourseworkBtn').style.backgroundColor = primary1;

		btn.style.backgroundColor = 'var(--primary-2)';   // #E98074
	}

	// move underline to pressed button. add slide transition if possible
}



function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 10);
}




// for changing light/dark mode
const checkbox = document.getElementById('switch');
const switchLabel = document.getElementById('switchLabel');

const transitionTime = 200;

// check whether the user was on dark mode previously
var colorMode = localStorage['colorMode'] || 'light';

if (colorMode == 'dark') {
	checkbox.setAttribute("checked", "true");
	darkMode();
}

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
  	// turning dark mode on
  	darkMode();

    localStorage['colorMode'] = 'dark';    // store in cache
  } else {
    // turning light mode on
    lightMode();

    localStorage['colorMode'] = 'light';
  }
})


function darkMode() {
	switchLabel.style.backgroundImage = "url('images/sun_icon.png')";
  	switchLabel.style.backgroundPosition = "10%";

    fadeColor('--background-1', '#EAE7DC', '#3A3B3C', transitionTime);
    fadeColor('--background-2', '#D8C3A5', '#0C525B', transitionTime);
    fadeColor('--text-color', '#8E8D8A', '#b0afad', transitionTime);
    fadeColor('--text-color-2', '#EAE7DC', '#000000', transitionTime);
    fadeColor('--primary-1', '#E85A4F', '#73a0a7', transitionTime);
    fadeColor('--primary-2', '#E98074', '#98b9be', transitionTime);

    document.documentElement.style.setProperty('--bg-1-filter', 'invert(23%) sepia(6%) saturate(147%) hue-rotate(169deg) brightness(93%) contrast(94%)');
}

function lightMode() {
	switchLabel.style.backgroundImage = "url('images/moon_icon.png')";
    switchLabel.style.backgroundPosition = "90%";


    // over an interval, change the colors
    fadeColor('--background-1', '#3A3B3C', '#EAE7DC', transitionTime);
    fadeColor('--background-2', '#0C525B', '#D8C3A5', transitionTime);
    fadeColor('--text-color', '#b0afad', '#8E8D8A', transitionTime);
    fadeColor('--text-color-2', '#000000', '#EAE7DC', transitionTime);
    fadeColor('--primary-1', '#73a0a7', '#E85A4F', transitionTime);
    fadeColor('--primary-2', '#98b9be', '#E98074', transitionTime);

    // TODO: find a way to fade this
    document.documentElement.style.setProperty('--bg-1-filter', 'invert(98%) sepia(32%) saturate(209%) hue-rotate(325deg) brightness(98%) contrast(86%)');
}




// helper function to fade the color of a css root variable
function fadeColor(property, startcol, endcol, total_time) {
	// property is a string representing the document's property to set
	// startcol and endcol are of the form `#0033ff`
	// total_time is the total number of ms this process should occur for

	// set 50 ms between each minor color shift
	const time_interval = 20;
	const numSteps = Math.floor(total_time / time_interval);

	// convert colors to rgb
	var currcolor = hexToRgb(startcol);
	const endcolor = hexToRgb(endcol);

	// for each of the three base colors, find the amt to change each by for each increment
	var diffs = [(endcolor[0] - currcolor[0]) / numSteps,
				(endcolor[1] - currcolor[1]) / numSteps,
				(endcolor[2] - currcolor[2]) / numSteps
		];

	console.log(diffs);

	var counter = 0;

	var timer = setInterval(function() {
		currcolor[0] += diffs[0];
		currcolor[1] += diffs[1];
		currcolor[2] += diffs[2];

		document.documentElement.style.setProperty(property, "rgb(" + currcolor[0] + "," + currcolor[1] + "," + currcolor[2] + ")");

	    counter += 1;
	    console.log(currcolor);
	    if (counter >= numSteps) {
	        clearInterval(timer);
	    }
	}, time_interval);
}

// converts a hex color to rgb, where the hex colors are of the form #0033ff
function hexToRgb(hex) {
	hex = hex;
	if (hex.charAt(0) == '#') {
		hex = hex.substring(1);
	}
	var aRgbHex = hex.match(/.{1,2}/g);
	var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

