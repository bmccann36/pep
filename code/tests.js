
console.log(findBestSellers(preloaded, 99))

describe("Basic Tests", function () {
  const result = findBestSellers(preloaded, 37)
  const topThree = 'Peanut Butter Sandwich, Thanks-A-Lot, Thin Mints'

  it("retruns a string", function () {
    Test.assertEquals(typeof result, 'string')
  })

  it("returns top three in order of popularity", function () {
    Test.assertEquals(result, topThree)
  })

  it("works when there is only one top product", function () {
    Test.assertEquals(findBestSellers(preloaded, 98), 'Peanut Butter Patties')
  })

  it("returns an empty string when there are no sales", function () {
    Test.assertEquals(findBestSellers(preloaded, 99), '')
  })

})


Test.describe("Random Tests:", function () {
  for (let i = 0; i < 5; i++) {
    const testData = generateSales()
    const num = getRandomInt(1, 100)
    const correct = checkBestSellers(testData)
    it('passes with randomly generated data', function () {
      Test.assertEquals(findBestSellers(testData, num), correct)
    })
  }
}


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }




// Test.assertEquals(findBestSellers(preloaded,66),'')
// Test.assertEquals(findBestSellers(preloaded,91),'Lemonades, Trios')
// Test.assertEquals(findBestSellers(preloaded,53),'Thin Mints')
// Test.assertEquals(findBestSellers(preloaded,55),'Caramel deLites, Girl Scout Smores, Lemonades')
// Test.assertEquals(findBestSellers(preloaded,21),'Shortbread, Lemonades, Thin Mints')











