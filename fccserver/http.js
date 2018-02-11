let http = require('http');
let process = require('process');

let args = process.argv.slice(2);

function getData(logFunction) {
	http.get(args[0], function(response) {
		// console.log(response);
		response.setEncoding('utf8')
		response.on('data', function(data) {
			// process.stdout.write(data + '\n');
			console.log(data);

			//process.stdout.write can be used without setting the encoding
		});
		response.on('error', function(error) {
			console.log(error);
		});
	});

}

getData();