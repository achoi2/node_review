const request = require('request');

request(
    {
        url:
            'http://www.mapquestapi.com/geocoding/v1/address?key=aaD1WP7OACu69YrPCnK1ATZvbMLOCMkt&location=1301%20lombard%20street%20philadelphia',
        json: true
    },
    (error, response, body) => {
        console.log(JSON.stringify(body, undefined, 2));
    }
);