const { longestContinuousSubArray, solutionByDP } = require('./longest-common-subsequence')
const ltsa = longestContinuousSubArray 

describe('longest subarray length', () => {
  test('both empty', () => {
    expect(ltsa([], [])).toEqual(0)
  })
  test('one empty', () => {
    expect(ltsa([], [1, 2, 3])).toEqual(0)
  })
  test('same input', () => {
    expect(ltsa([1, 2, 3], [1, 2, 3])).toEqual(3)
  })
  test('common input', () => {
    expect(ltsa([1, 2, 3], [3, 2, 3, 4])).toEqual(2)
  })
})

describe('longest common subsequence length', () => {
  test('both empty', () => {
    expect(solutionByDP([], [])).toEqual(0)
  })
  test('one empty', () => {
    expect(solutionByDP([], [1, 2, 3])).toEqual(0)
  })
  test('same input', () => {
    expect(solutionByDP([1, 2, 3], [1, 2, 3])).toEqual(3)
  })
  test('common input', () => {
    expect(solutionByDP([1, 2, 3, 6, 4, 1, 6], [3, 2, 3, 4, 0, 6])).toEqual(4)
  })
})
