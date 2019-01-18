const request = require('request');

request({
    url: 'http://',
    json: true
}, (error, response, body) => {
    console.log(body)
});