
//new module for filtering the directory, to be called in filteredCallback.js

module.exports = function (directoryName, ext, callback) {
	//readdir(pathname, callback) returns array of file names
	let fs = require('fs');

	//check if ext includes .
	if(!ext.includes('.')) {
		extension = '.' + ext;
	}
	else{
		extension = ext;
	}

	fs.readdir(directoryName, function(err, files) { 	
		if(err) {
			return callback(err);
		}
		else {
			//could've used path.extname for a comparison
			var filteredList = files.filter((file, index) => file.includes(extension));
			callback(null,filteredList);
		}
	});
}