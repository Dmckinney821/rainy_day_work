const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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
    res.send({
        forecast: 'It gon rain',
        location: 'Atlanta'
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