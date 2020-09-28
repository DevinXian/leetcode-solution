// 给定数组，获取最大累加值和范围
const { maxSum, maxSumArray } = require('./max-sum-subarray')

describe('subarray maxSum', () => {
  test('empty input', () => {
    expect(maxSum([])).toBe(0)
  })
  test('only negative element', () => {
    expect(maxSum([-1])).toBe(-1)
  })
  test('zero and negative element', () => {
    expect(maxSum([-1, 0])).toBe(0)
  })
  test('only positive element', () => {
    expect(maxSum([1, 2, 3])).toBe(6)
  })
  test('mix case1: positive and negative element', () => {
    expect(maxSum([-1, 2, 3, 4, -10, 5, 6, -10, 8, -1])).toBe(11)
  })
  test('mix case2: positive and negative element', () => {
    expect(maxSum([-1, 2, 3, 4, -8, 5, 6, -10, 8, -1])).toBe(12)
  })
})

describe('maxSum subarray', () => {
  test('empty', () => {
    expect(maxSumArray([])).toEqual([])
  })
  test('only negative element', () => {
    expect(maxSumArray([-1])).toEqual([-1])
  })
  test('zero and negative element', () => {
    expect(maxSumArray([-1, 0])).toEqual([0])
  })
  test('only positive element', () => {
    expect(maxSumArray([1, 2, 3])).toEqual([1, 2, 3])
  })
  test('mix case1: positive and negative element', () => {
    expect(maxSumArray([-1, 2, 3, 4, -10, 5, 6, -10, 8, -1])).toEqual([5, 6])
  })
  test('mix case2: positive and negative element', () => {
    expect(maxSumArray([-1, 2, 3, 4, -8, 5, 6, -10, 8, -1])).toEqual([2, 3, 4, -8, 5, 6])
  })

})