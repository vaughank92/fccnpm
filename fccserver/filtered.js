let fs = require('fs');
let path = require('path');

//input
let args = process.argv.slice(2);

function filterDirectory(returnFunction) {
	//readdir(pathname, callback) returns array of file names

	let pathname = path.normalize(args[0]);
	let extension = '.' + args[1];

	fs.readdir(pathname, function(err, files) { 	
		if(err) {
			console.log(err);
		}
		else {
			//could've used path.extName for a comparison
			//var filteredList = files.filter((file, index)) => file.extName(extension)
			var filteredList = files.filter((file, index) => file.includes(extension));
		}

		returnFunction(filteredList);

	;})
}

function consoleLog(filteredList) {

	for(var i=0; i < filteredList.length; i++) {
		console.log(filteredList[i]);
	}
}

filterDirectory(consoleLog);