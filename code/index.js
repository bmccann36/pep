const randomData = require('./tableSeed').table

// const data = require('./cookieTable')

//THERE IS NO ZONE 0 !!

findTopSellers(randomData, 1)

function findTopSellers(data, zone) {
  const loc = zone - 1  // make it easier to deal with in arrays etc..
  const row = (Math.floor(zone / 10))
  const column = (zone % 10)
  // console.log(column)
  const searchLat = 40 + row / 10
  const searchLon = -91 + column / 10
  console.log('searchLon', searchLon, searchLon + 0.09)
  console.log('searchLat', searchLat, searchLat + 0.09)
  const matchingSales = data.filter(entry => {
    return (
      // entry.lat >= searchLat && entry.lat < searchLat + 0.09 &&
      entry.lon >= searchLon && entry.lon < searchLon + 0.09
    )
  })
  // console.log(matchingSales)

  // loop through data and find all where it matches zone
}





// returns a lat lon reference obj
function latLonCreator(zone) {
  const row = (Math.floor(zone / 10))
  const column = (zone % 10)
  const searchLat = 40 + row / 10
  const searchLon = -91 + column / 10

}



// Your task is to combine this GPS and cookie sales information then map it to the 10x10 grid that the Scouts are using to distribute thier sales force. Each square or 'zone' in the grid will be assigned a number from 1-100. The number will grow from the bottom left to the top right corner. For the purpose of this problem the min and max coordinates will be as follows
// latitude 40,41(inclusive) longitude -91,-90 (inclusive)
