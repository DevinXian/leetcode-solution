const { longestContinuousSubArray } = require('./longest-common-subsequence')
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
