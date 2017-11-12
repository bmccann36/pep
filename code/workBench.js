// latitude ranges from 40 through 41
// longitude range from 91 through -90

// const sampleSet = data.slice(0, 30)
// console.log(sampleSet)


// INSTANTIATE AN EMPTY GRID FOR STORING SALE DATA
let grid = new Array(10)
for (let i = 0; i <= 10; i++) {
  grid[i] = new Array(10)
  for (let j = 0; j <= 10; j++) {
    grid[i][j] = []
  }
}
// ORANGIZE SALES INTO A 10 BY 10 GRID
data.forEach(sale => {
  let up = calcUp(sale.lat)
  let over = calcOver(sale.lon)
  grid[up][over].push(sale)
})

// const zone55 = (grid[5][5])
// console.log(zone55)
// console.log(reduceSales(zone55))

// MODIFY THE GRID DATA TO JUST BE A LIST OF THE TOP 3 OR LESS
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j]) {
      grid[i][j] = reduceSales(grid[i][j])
    }
  }
}

console.log(grid[3][7])

// TAKES IN A LIST OF SALES AND RETURN THE 3 THAT SOLD MOST
function reduceSales(zone) {
  let report = {}
  zone.forEach(sale => {
    report[sale.type] ? report[sale.type] += sale.quantity : report[sale.type] = sale.quantity // create or add to the quantiy of that cookie
  })
  var props = Object.keys(report).map(function (sale) {
    return { sale: sale, value: this[sale] };
  }, report);
  props.sort(function (p1, p2) { return p2.value - p1.value; });
  return props.slice(0, 3);
}

// TRANSLATE LATITUDE TO GRID POSITION
function calcUp(lat) {
  let dist = +lat - 40 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}

// TRANSLATE LONGITUDE TO GRID POSITION
function calcOver(lon) {
  let dist = +lon + 91 // subtract the base from the value (lowest value)
  return Math.floor(dist * 10) // turn ito a percentage value
}


// sampleSet.forEach(sale => {
//   console.log('lat: ', sale.lat, 'up:', calcUp(sale.lat))
// })

// sampleSet.forEach(sale => {
//   calcOver(sale.lon)
//   console.log('lon: ', sale.lon, 'over: ', calcOver(sale.lon))
// })
