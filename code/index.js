const ogData = require('./data/cookieTable.js')

console.log(findBestSellers(ogData, 37))


function findBestSellers(data, zone) {
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
  // MODIFY THE GRID DATA TO JUST BE A LIST OF THE TOP 3 OR LESS
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        grid[i][j] = reduceSales(grid[i][j])
      }
    }
  }
  // CONVERT INTEGER TO GRID COORDINATES
  const up = Math.floor(zone / 10)
  const over = zone % 10
  let answer = []
  // CREATE A STRING OF THE TOP SELLERS
  grid[up][over].forEach(record => {
    answer.push(record.sale)
  })
  return answer.join(', ')
}

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
