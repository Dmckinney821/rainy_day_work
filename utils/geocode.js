const request = require('request');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiM2RoZGFuaWVsIiwiYSI6ImNrM2cyNTkwcDBiNmIzb283MHlmajc1NWMifQ.xqz0UzvTPafUsjSl3F-kqg';
    
    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to services')
        } else if (response.body.features.length === 0) {
                callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[0],
                lng: response.body.features[0].center[1],
                loc: response.body.features[0].place_name
            })
        }
    })
}

geocode('NYC', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

module.exports = geocode