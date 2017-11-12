const data = require('./data/cookieTable.js')

// highest lat 40.1
// lowest lat 40.0
// -91.0 highest lon
// -90.0 lowest lon

// const sampleSet = data.slice(0, 30)

// console.log(sampleSet)

// sampleSet.forEach(sale => {
//   console.log('lat: ', sale.lat, 'up:', calcUp(sale.lat))
// })

// sampleSet.forEach(sale => {
//   calcOver(sale.lon)
//   console.log('lon: ', sale.lon, 'over: ', calcOver(sale.lon))
// })

let grid = new Array(10)
for (let i = 0; i <= 10; i++) {
  grid[i] = new Array(10)
  for (let j = 0; j <= 10; j++) {
    grid[i][j] = []
  }
}


data.forEach(sale => {
  let up = calcUp(sale.lat)
  let over = calcOver(sale.lon)
  grid[up][over].push(sale)

})

console.log(grid)

// data.forEach(entry => {
//   let up = calcUp(entry.lat)
//   let over = calcOver(entry.lon)
// if (grid[up] && grid[up][over]) { // is something is there push into it
//   grid[up][over].push(entry)
// }
// else { // if no array yet create one with entry as first element
//   // console.log('up and over', up, over)
//   grid[up][over] = [entry]
// }
// })


function calcUp(lat) {
  let dist = +lat - 40 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}


function calcOver(lon) {
  let dist = +lon + 91 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}

