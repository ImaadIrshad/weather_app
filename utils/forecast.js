const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=23b52544951b7e786c2473d10d792435&query=' + latitude + ',' + longitude + '&units=m' 

    request ({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect, check internet connection', undefined)
        } else if (response.body.error) {
            callback('Unable to get coordinate information, please verify input', undefined)
       } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' +response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degrees.')
       }

    })
}

module.exports = forecast