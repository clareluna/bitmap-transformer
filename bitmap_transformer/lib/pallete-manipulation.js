'use strict';

 // pull in information from bitmap-constructor Bitmap.pixelatedColors

var ColorChanges = function(data) {
	this.invertedColors = [];
	this.grayscaleColors = [];
}

 ColorChanges.prototype.inverted = function() {
 	for (var i = 0; i < Bitmap.colorPallete.length; i += 3) {
 		var colors = Bitmap.colorPallete;
 		colors.blue = 255 - colorPallete[i]; 
 		colors.green = 255 - colorPallete[i +1]; 
 		colors.red = 255 - colorPallete [i + 2]; 
 	};
 };

 ColorChanges.prototype.grayscale = function(){
 	for (var i = 0; i < Bitmap.colorPallete.length; i += 3) {
 		var average = (colorPallete[i] + colorPallete [i + 1] + pixelatedColors[i +2]) /3;
 		var colors = Bitmap.colorPallete
 		colors[i] = average; 
 		colors[i +1] = average; 
 		colors[i +2} = average;
 	};
 };

 modules.export = ColorChanges;