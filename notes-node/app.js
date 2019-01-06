console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

let total = notes.add(2,4);

console.log(total)

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username} you are ${notes.age}`, (err) => {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });