//library
let fs = require('fs');

//input
let args = process.argv.slice(2);


function readFile(returnFunction) {
	fs.readFile(args[0], 'utf8', function(err, contents) { 	
		var fileSplit = contents.split('\n');
		var fileCount = fileSplit.length;
		// console.log('here ' + fileCount);
		var lineCount = fileCount - 1
		returnFunction(lineCount);
	;})
}

function consoleLog(lineCount) {

	console.log(lineCount);
}

readFile(consoleLog);
