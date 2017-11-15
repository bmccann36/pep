

let cookieTypes = ['Thin Mints', 'Caramel deLites', 'Peanut Butter Sandwich', 'Peanut Butter Patties', 'Lemonades', 'Shortbread', 'Thanks-A-Lot', 'Savannah Smiles', 'Girl Scout Smores', 'Trios']
// console.log(cookieTypes.length) 0-9


function generateSales() {
  let table = []
  for (let i = 0; i < 1000; i++) { // 100 for now
    let sale = {}
    sale.type = cookieTypes[getRandomInt(0, 10)]
    sale.quantity = getRandomInt(1, 6)
    sale.scoutId = getRandomInt(1, 100)
    sale.saleId = i
    sale.lat = makeNum(40, 41, 3)
    sale.lon = makeNum(-91, -90, 3)
    table.push(sale)
  }
  return table
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 //The maximum is exclusive and the minimum is inclusive

function makeNum(min, max, fixed) {
  let num = Math.random() * (max - min) + min;
  return +num.toFixed(fixed)
}

const table = generateSales()

module.exports = { table }
