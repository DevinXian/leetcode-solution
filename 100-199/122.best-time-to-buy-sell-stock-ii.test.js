const {
  solutionWithGreedy,
  solutionWithLoop,
  solutionWithDFS,
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

console.time('loop')
runTest(solutionWithLoop)
console.timeEnd('loop')
console.time('dfs')
runTest(solutionWithDFS)
console.timeEnd('dfs')
console.time('greedy')
runTest(solutionWithGreedy)
console.timeEnd('greedy')
console.time('dp')
runTest(solutionWithDP)
console.timeEnd('dp')
