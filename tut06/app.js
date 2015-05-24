var dir = process.argv[2],
    ext = process.argv[3],
    listFiles = require('./listFiles');

listFiles(dir,ext, function(err, list) {
    if (err) {
        console.log(err);
    } else {
        list.forEach(function(val) {
            console.log(val);
        });
    }
});
