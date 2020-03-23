

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')



forecast(-75.7088, 44.1525, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})





