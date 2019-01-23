const express = require('express');
const hbs = require('hbs')

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizeIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('hello express')
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'welcome!'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'about page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('server is up on port 3000')
});