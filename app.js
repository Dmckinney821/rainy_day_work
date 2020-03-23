const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

const address = process.argv[2]

if(!address) {
    console.log('please prpovde an address')
} else {

    geocode(address, (error, data) => {
        if(error) {
           return console.log(error)
        } 
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
    
}





