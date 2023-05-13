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
  fadeColor('--background-3', '#FFFFFF', '#4a4c4d', transitionTime);
  document.querySelector(':root').style.setProperty(
      '--box-shadow-color', 'rgba(0, 0, 0, 0.0)');

  // remove mix blend mode
  window.onload = function() {
    const removeBg = document.querySelectorAll('.removeBg');
    for (let element in Object.entries(removeBg)) {
      removeBg[element].style.removeProperty('mix-blend-mode');
    }
  };


  // TODO: make sure this only runs if the property was already set to mix blend
  // mode?? have some kind of indicator to specify whether the mix blending
  // should happen
}

function lightMode() {
  // over an interval, change the colors
  fadeColor('--background-1', '#3A3B3C', '#EAE7DC', transitionTime);
  fadeColor('--background-2', '#0C525B', '#D8C3A5', transitionTime);
  fadeColor('--text-color', '#b0afad', '#8E8D8A', transitionTime);
  fadeColor('--text-color-2', '#b0afad', '#EAE7DC', transitionTime);
  fadeColor('--background-3', '#4a4c4d', '#FFFFFF', transitionTime);
  document.querySelector(':root').style.setProperty(
      '--box-shadow-color', 'rgba(0, 0, 0, 0.4)');

  // set image background to be clear
  window.onload = function() {
    const removeBg = document.querySelectorAll('.removeBg');
    for (let element in Object.entries(removeBg)) {
      removeBg[element].style.removeProperty('mix-blend-mode');
    }
  };
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

  // for each of the three base colors, find the amt to change each by for each
  // increment
  var diffs = [
    (endcolor[0] - currcolor[0]) / numSteps,
    (endcolor[1] - currcolor[1]) / numSteps,
    (endcolor[2] - currcolor[2]) / numSteps
  ];

  var counter = 0;

  var timer = setInterval(function() {
    currcolor[0] += diffs[0];
    currcolor[1] += diffs[1];
    currcolor[2] += diffs[2];

    document.documentElement.style.setProperty(
        property,
        'rgb(' + currcolor[0] + ',' + currcolor[1] + ',' + currcolor[2] + ')');

    counter += 1;
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
    parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
}
