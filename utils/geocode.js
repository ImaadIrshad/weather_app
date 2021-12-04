const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaW1hYWRpcnNoYWQiLCJhIjoiY2t3cDV2aWZ3MDltMzJubzJ3amQwcG51YSJ9.a_YinlLmv1UYu1mA_N2a-Q'

    request({url: url, json:true}, (error, response) =>{
        if (error) {
            callback('Unable to connect to location services!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


