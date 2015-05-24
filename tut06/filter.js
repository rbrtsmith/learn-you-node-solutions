var fs = require('fs'),
    path = require('path');
var listFiles = function(dir, ext, cb) {
    fs.readdir(dir, function(err, list) {
        var result = [];
        if (err) {
            return cb(err);
        } else {
            return(cb(null,list.filter(function(val) {
                if (path.extname(val) === '.' + ext) {
                    return val;
                }
            })));
        }
    });
};

module.exports = listFiles;
