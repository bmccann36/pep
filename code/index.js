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

// const zone55 = (grid[5][5])
// console.log(zone55)
// console.log(reduceSales(zone55))


// transform grid so that each spot contains the top five crimes for that location
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j]) {
      grid[i][j] = reduceSales(grid[i][j])
    }
  }
}

console.log(grid[1][9])

// TAKES IN A LIST OF CRIMES GIVES BACK THE TOP FIVE MOST OCCURING AND THEIR FREQ
function reduceSales(zone) {
  let report = {}
  // sales.filter(sale => sale !== undefined)
  zone.forEach(sale => {
    report[sale.type] ? report[sale.type] += sale.quantity : report[sale.type] = sale.quantity // create or add to the quantiy of that cookie
  })
  var props = Object.keys(report).map(function (sale) {
    return { sale: sale, value: this[sale] };
  }, report);
  props.sort(function (p1, p2) { return p2.value - p1.value; });
  return props.slice(0, 3);
  // return report
}


function calcUp(lat) {
  let dist = +lat - 40 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}


function calcOver(lon) {
  let dist = +lon + 91 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}

