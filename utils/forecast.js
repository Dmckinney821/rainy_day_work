const request = require('request');

const forecast = (a,b, callback) => {
    const url = 'https://api.darksky.net/forecast/76e2506ceb935a043ed7e5eb36dd9c61/' + a + ',' + b;
    request({ url, json: true }, (error, response) => {
        if(error) {
            console.log('something wrong')
        } else if (response.body.error) {
            console.log(`Unable to find locatio with error `)
        } else {
            callback(undefined,
                `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`
            )
        }
        
    })

}


module.exports = forecast