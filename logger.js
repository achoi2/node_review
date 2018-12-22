const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
    // Send an http request
    console.log(message);

    // raise an event
    this.emit('messagedLogged', { id: 1, url: 'http//' });
}
}


module.exports = Logger;