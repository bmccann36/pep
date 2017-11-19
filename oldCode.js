// change decimals
const chalk = require('chalk')
const constData = require('./cookieTable')

constData.forEach(entry => {
  entry.lat = +entry.lat.toFixed(2)
  entry.lon = +entry.lon.toFixed(2)
})

const newData = constData

module.exports = {newData}



 // UTILITY TO FIND HIGHEST AND LOWEST LAT LON
 const highestLat = data.reduce( (acc, val) => {
  return acc.lat > val.lat ? acc : val
})
console.log('highest lat', highestLat.lat)
// highest Lat  40.91

const lowestLat = data.reduce( (acc, val) => {
  return acc.lat < val.lat ? acc : val
})
console.log('lowest lat', lowestLat.lat)  // 40.502


const highestLon = data.reduce( (acc, val) => {
  return acc.lon > val.lon ? acc : val
})
console.log(highestLon.lon, 'highest lon')  //lon: -73.706596761

const lowestLon = data.reduce( (acc, val) => {
  return acc.lon < val.lon ? acc : val
})
console.log(lowestLon.lon, 'lowest lon')  //   lon: -74.249303727

// highest lat 40.995
// lowest lat 40.007
// -90.999 highest lon
// -90.001 lowest lon
