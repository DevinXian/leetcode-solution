const {
  solutionWithGreedy,
  solutionWithLoop,
  solutionWithDP,
} = require('./122.best-time-to-buy-sell-stock-ii')

function runTest(method) {
  describe(`122.best-time-to-buy-and-sell-stock-ii ${method.name} test`, () => {
    test('common case 1', () => {
      expect(method([7, 1, 5, 3, 6, 4])).toEqual(7)
    })
    test('common case 2', () => {
      expect(method([1, 2, 6, 1, 2])).toEqual(6)
    })
    test('common case 3', () => {
      expect(method([1, 2, 3, 4, 5])).toEqual(4)
    })
    test('common case 4', () => {
      expect(method([7, 6, 4, 3, 1])).toEqual(0)
    })
  })
}

// runTest(solutionWithLoop)
runTest(solutionWithGreedy)
runTest(solutionWithDP)
