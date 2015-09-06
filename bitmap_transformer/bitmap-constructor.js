'use strict';

var Bitmap = function(buffer) {
	this.buffer = buffer; // this will link to Alex's read bitmap file
	this.header = this.buffer.splice(0, 14);
	this.headerDIB = this.buffer.splice(14, 40);
	this.width = this.buffer.readUint32[18];
	this.height = this.bufferreadUint32[22];
	this.colorPallete = this.bufferslice(54, buffer.length);
	this.binaryData = [];
	this.colorsArray = [];
	};
}
// generate a way of reading out the the binary data for where header, width, height, do we need this?
Bitmap.prototype.binaryData = function(header, width, height) {
	var binaryData = {};
	binaryData.header = this.bitmapFile.readUint32[14];
	binaryData.width = this.bitmapFile.readUint32[18];
	binaryData.height = this.bitmapFile.readUint32[22];
	binaryData.push(binaryData);
}

Bitmap.prototype.colorPallete = function() {
	this.colorPallete = this.bitmapFile.readUint32[54]; //accounting for 14 bits header and 40 bits DIB
};

Bitmap.prototype.palleteColorData = function() { // assigns RGB data to pallete
	for(var i = 0; i < colorPallete.length; i = i + 3) {
		var colorObject = {};
		colorObject.blue = this.colorPallete.readUInt8(i); // based on wiki it appears blue, green, red order of pixel data
		colorObject.green = this.colorPallete.readUInt8(i + 1);
		colorObject.red = this.colorPallete.readUInt8(i + 2); 
		this.colorArray.push(colorPallete); // pushes the pixelation data into Bitmap.colorPallete array
	};
}

module.exports = Bitmap;