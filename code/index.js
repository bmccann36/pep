const randomData = require('./tableSeed').table

const constData = require('./cookieTable')

// findTopSellers(randomData, 10)
console.log(findTopSellers(constData, 21))

function findTopSellers(data, zone) {
  const loc = zone - 1  // CONVERT TO 0 INDEXED SYSTEM
  const row = (Math.floor(loc / 10))
  const column = (loc % 10)
  console.log('row', row + 1)
  console.log('colomn', column + 1)

  // SET THE LAT / LON RANGE OF OUR SEARCH
  const searchLat = 40 + row / 10  // up + down
  const searchLon = -91 + column / 10  // across
  // console.log('searchLon', searchLon, searchLon + 0.09)
  console.log('searchLat', searchLat, searchLat + 0.09)
  console.log('serachLon', searchLon, searchLon + 0.09)
  //FILTER DATA SET TO ONLY INCLUDE SALES FOR THE INPUT ZONE
  const matchingSales = data.filter(entry => {
    return (
      entry.lat >= searchLat && entry.lat < searchLat + 0.09 &&
      entry.lon >= searchLon && entry.lon < searchLon + 0.09
    )
  })
  // CREATE A 'REPORT' LISTING ALL COOKIE VARITIES SOLD AND THE QUANTITY SOLD
  console.log('matching sales', matchingSales)
  let report = {}
  matchingSales.forEach(sale => {
    report[sale.type] ? report[sale.type] += sale.quantity : report[sale.type] = sale.quantity // create or add to the quantiy of that
  })
  // MODIFY REPORT STRUCTURE SO THAT WE CAN SORT ON QUANTITY
  let topSellers = Object.keys(report).map(function (sale) {
    return { sale: sale, value: this[sale] }
  }, report)
  console.log('topSellers', topSellers)
  topSellers.sort(function (p1, p2) { return p2.value - p1.value; })
  topSellers = topSellers.slice(0, 3)
  // JUST RETURN THE NAMES OF THE TOP SELLERS
  return topSellers.map(el => el.sale).join(', ')
}


