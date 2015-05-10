
var directory = process.argv[2],
    extension = '.' + process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir(directory, function(err, files) {
    if (err) {
        throw err;
    }
    files.forEach(function(filename) {
        var currExtension = path.extname(filename);
        if (currExtension === extension) {
            console.log(filename);
        }
    });
});    
