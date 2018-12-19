const fs = require('fs');


// sync
// const files = fs.readdirSync('./');
// console.log(files)

// async

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('result', files);
});