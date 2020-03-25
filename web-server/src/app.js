const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const app = express();

// these are variables for paths 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Corny',
        name: 'Micky'
    })
});

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'This is for the hustle',
        name: 'Mickey'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        helpText: 'This is for the needy',
        title: 'Help',
        name: 'Mickey'
    })
})



app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404 Help',
        name:'mickey',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Micky',
        errorMessage: 'Pge not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})