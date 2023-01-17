'use strict';


const transitionTime = 200;

var colorMode = localStorage['colorMode'];

if (colorMode == 'dark') {
	// checkbox.setAttribute("checked", "true");
	darkMode();
}



function darkMode() {
    fadeColor('--background-1', '#EAE7DC', '#3A3B3C', transitionTime);
    fadeColor('--background-2', '#D8C3A5', '#0C525B', transitionTime);
    fadeColor('--text-color', '#8E8D8A', '#b0afad', transitionTime);
    fadeColor('--text-color-2', '#EAE7DC', '#b0afad', transitionTime);
    fadeColor('--primary-1', '#E85A4F', '#73a0a7', transitionTime);
    fadeColor('--primary-2', '#E98074', '#98b9be', transitionTime);
}

function lightMode() {
    // over an interval, change the colors
    fadeColor('--background-1', '#3A3B3C', '#EAE7DC', transitionTime);
    fadeColor('--background-2', '#0C525B', '#D8C3A5', transitionTime);
    fadeColor('--text-color', '#b0afad', '#8E8D8A', transitionTime);
    fadeColor('--text-color-2', '#b0afad', '#EAE7DC', transitionTime);
    fadeColor('--primary-1', '#73a0a7', '#E85A4F', transitionTime);
    fadeColor('--primary-2', '#98b9be', '#E98074', transitionTime);
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
