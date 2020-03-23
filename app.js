

const request = require('request');

// const url = 'https://api.darksky.net/forecast/76e2506ceb935a043ed7e5eb36dd9c61/37.8267,-122.4233';

// request({ url, json: true }, (error, response) => {
//     if(error) {
//         console.log('something wrong')
//     } else if (response.body.error) {
//         console.log(`Unable to find locatio with error `)
//     } else {
//         console.log(response.body.daily.data[0].summary + 
//             `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`
//         )
//     }
    
// })

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiM2RoZGFuaWVsIiwiYSI6ImNrM2cyNTkwcDBiNmIzb283MHlmajc1NWMifQ.xqz0UzvTPafUsjSl3F-kqg";

request({ url, json: true}, (error, response) => {
    if(error) {
        console.log('something went wrong')
    } else if (response.body.features.length === 0) {
        console.log('unable top find location')
    } else {
        const lat = response.body.features[0].center[0]
        const long = response.body.features[0].center[1]
        console.log(lat,long)
    }






    
})