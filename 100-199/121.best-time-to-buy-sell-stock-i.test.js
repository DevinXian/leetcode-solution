const {
  solutionWithDP,
  solutionWithLoop,
  solutionWithLoopOptimized
} = require('./121.best-time-to-buy-sell-stock-i')

function runTest(method) {
  describe(`121.best-time-to-buy-and-sell-stock-i ${method.name} test`, () => {
    test('common case 1', () => {
      expect(method([7, 1, 5, 3, 6, 4])).toEqual(5)
    })
    test('common case 1', () => {
      expect(method([1, 2])).toEqual(1)
    })
    test('common case 2', () => {
      expect(method([7, 6, 4, 3, 1])).toEqual(0)
    })
  })
}

runTest(solutionWithLoop)
runTest(solutionWithDP)
runTest(solutionWithLoopOptimized)
