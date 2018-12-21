const EventEmitter = require('events');
const emitter = new EventEmitter();
const logger = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// raise an event
emitter.emit('messaged logged', { id: 1, url: 'http//' });

logger.on('logged', (arg) => {
    console.log('logged', arg)
});

logger.emit('logged', { data: 'message'})