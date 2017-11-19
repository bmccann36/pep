// const randomData = require('./tableSeed').table

const data = require('../cookieTable2').data

// console.log(data)
findBestSellers(data, 66)


function findBestSellers(preloadedData, zone) {
  salesInZone = preloadedData.filter((data) => { return inZone(data, zone) })
    .map((data) => { return data.type }).toString()
}

// function inZone(coord, zone){
//   saleZone = Math.floor((coord.lat-40)*10)*10 + Math.floor((coord.lon+91)*10)+1
//   return (zone == saleZone)
// }

function inZone(coord, zone) {
  saleZone = Math.floor((coord.lat - 40) * 10) * 10 + Math.floor((coord.lon + 91) * 10) + 1
  if (zone == saleZone) console.log(coord)
}
