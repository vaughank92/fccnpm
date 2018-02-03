//utilizes created module filteredDirectory

var fd = require('./filteredDirectory.js');
var fs = require('fs');
var path = require('path');

let args = process.argv.slice(2);

function filtering() {
	let pathname = path.normalize(args[0]);
	let extension = '.' + args[1];

	fd(pathname, extension, function(err,filteredList) {
		for(var i=0; i < filteredList.length; i++) {
			console.log(filteredList[i]);
		}
	});
}

filtering();