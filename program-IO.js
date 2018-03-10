var fs = require('fs');
// console.log(process.argv);
var fileContent = fs.readFileSync(process.argv[2]);
var lines = fileContent.toString().split('\n');
var newLinesCount = lines.length - 1;
console.log(newLinesCount);
