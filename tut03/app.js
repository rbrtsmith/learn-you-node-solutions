var fs = require('fs');
var filename = process.argv[2];
var numberOfLines = fs.readFileSync(filename).toString().split('\n');
console.log(numberOfLines.length-1);