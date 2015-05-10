
var filter = require('./filter'),
    directory = process.argv[2],
    extension = process.argv[3];
    
filter(directory, extension, function(err, data) {
    if (!err) {
        data.forEach(function(value) {
            console.log(value);
        });      
    }
});