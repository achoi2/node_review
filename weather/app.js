const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            descibe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);

request(
    {
        url:
            `http://www.mapquestapi.com/geocoding/v1/address?key=aaD1WP7OACu69YrPCnK1ATZvbMLOCMkt&location=${encodedAddress}`,
        json: true
    },
    (error, response, body) => {
        if (error) {
            console.log('unable to connect');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('unable to find that address');
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].providedLocation.location}`);
            console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
            console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
        } 
    }
);