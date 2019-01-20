const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('hello express')
    res.send({
        name: 'andy',
        likes: [
            'tea',
            'coffee'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3000);