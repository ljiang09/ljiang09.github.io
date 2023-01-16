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

    document.documentElement.style.setProperty('--background-1', '#3A3B3C');
    document.documentElement.style.setProperty('--background-2', '#0c525b');
    document.documentElement.style.setProperty('--text-color', '#b0afad');
    document.documentElement.style.setProperty('--text-color-2', '#000000');
    document.documentElement.style.setProperty('--primary-1', '#73a0a7');
    document.documentElement.style.setProperty('--primary-2', '#98b9be');
    document.documentElement.style.setProperty('--bg-1-filter', 'invert(23%) sepia(6%) saturate(147%) hue-rotate(169deg) brightness(93%) contrast(94%)');
    document.documentElement.style.setProperty('--bg-1-filter', 'invert(23%) sepia(6%) saturate(147%) hue-rotate(169deg) brightness(93%) contrast(94%)');

    // fade(document.getElementById("yft"), '#EAE7DC', '#3A3B3C', 750);
}

function lightMode() {
	switchLabel.style.backgroundImage = "url('images/moon_icon.png')";
    switchLabel.style.backgroundPosition = "90%";

    document.documentElement.style.setProperty('--background-1', '#EAE7DC');
    document.documentElement.style.setProperty('--background-2', '#D8C3A5');
    document.documentElement.style.setProperty('--text-color', '#8E8D8A');
    document.documentElement.style.setProperty('--text-color-2', 'var(--background-1)');
    document.documentElement.style.setProperty('--primary-1', '#E85A4F');
    document.documentElement.style.setProperty('--primary-2', '#E98074');
    document.documentElement.style.setProperty('--bg-1-filter', 'invert(96%) sepia(9%) saturate(599%) hue-rotate(318deg) brightness(104%) contrast(83%)');

    // fade(document.getElementById("yft"), [255,255,60], [0,0,255], 750);
}




// helper functions
function fadeColor(element, startcol, endcol, time_elapsed) {
	// startcol and endcol are of the form `#0033ff`

	// convert colors to rgb
	var startcolor = hexToRgb(startcol);
	var endcolor = hexToRgb(endcol);

	var currentcolor = startcolor;
	var stepcount = 0;
	var timer = setInterval(function(){
	    currentcolor[0] = parseInt(currentcolor[0] - red_change);
	    currentcolor[1] = parseInt(currentcolor[1] - green_change);
	    currentcolor[2] = parseInt(currentcolor[2] - blue_change);
	    element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
	    stepcount += 1;
	    if (stepcount >= steps) {
	        element.style.backgroundColor = 'rgb(' + endcolor.toString() + ')';
	        clearInterval(timer);
	    }
	}, 50);
}

// converts a hex color to rgb, where the hex colors are of the form #0033ff
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


