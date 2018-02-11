let http = require('http');

let args = process.argv.slice(2);

function collectData(url) {
	http.get(url, function(response) {
		var output = '';
		// console.log(response);
		//collect the data from the response
		response.setEncoding('utf8');
		response.on('data', (data) => {
			output += data;
		});
		//when 'end' send the output to be printed
		response.on('end', function() {
			printOutput(output);
		});
	}).on('error', function(error) {
		console.log(error);
	});

}

function printOutput(output) {
	console.log(output.length)
	console.log(output);
}

collectData(args[0]);