
//library
let fs = require('fs');

//input
let args = process.argv.slice(2);

//read file and move to a string for analysis
var file = (fs.readFileSync(args[0])).toString();
var fileSplit = file.split('\n');

//as per instructions, there is no return at the last line
let fileCount = fileSplit.length;
let finalLineCount = fileCount - 1;
console.log(finalLineCount);