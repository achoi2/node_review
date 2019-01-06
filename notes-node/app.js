console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('andrew'));

let filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);
console.log(filteredArray)


// let total = notes.add(2,4);
// console.log(total)

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username} you are ${notes.age}`, (err) => {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });