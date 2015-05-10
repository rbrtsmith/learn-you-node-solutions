var fs = require('fs'),
    path = require('path');
module.exports = function(directory, extension, callback) {
    var list = [];
    extension = '.' + extension;
    fs.readdir(directory, function(err, files) {
        if (err) {
            return(callback(err));
        }
        files.forEach(function(filename) {
            var currExtension = path.extname(filename);
            if (currExtension === extension) {
                list.push(filename);
            }
        });
        callback(null, list);
    });
};