const { solution } = require('./triangle')

const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]

describe('min triangle path', () => {
  test('will find', () => {
    expect(solution(triangle)).toBe(11)
  })
})