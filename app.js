const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
});

// raise an event
emitter.emit('messaged logged');