const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

console.log(process.argv)

const userLocation = process.argv[2]

if (!userLocation) {
    console.log(' Please provide location name ')
} else {
    geocode(userLocation, (error,data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
    
}

//const request = require("request")
// const url = 'http://api.weatherstack.com/current?access_key=23b52544951b7e786c2473d10d792435&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response.body.current)
//     if (error) {
//         console.log('Unable to connect to weather services')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' +response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degrees.' )
//     }
// })


// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW1hYWRpcnNoYWQiLCJhIjoiY2t3cDV2aWZ3MDltMzJubzJ3amQwcG51YSJ9.a_YinlLmv1UYu1mA_N2a-Q'

// request({ url: geocodeURL, json:true}, (error,response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length ===0){
//         console.log('Unable to find location. Try another search.')
//     }    else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }


// } )