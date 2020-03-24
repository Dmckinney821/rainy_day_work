const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

const address = process.argv[2]

if(!address) {
    console.log('please prpovde an address')
} else {

    geocode(address, (error, { latitude, longitude, location}) => {
        if(error) {
           return console.log(error)
        } 
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    
}





