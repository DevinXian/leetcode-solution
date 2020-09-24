// 给定数组，输出连续最大的乘积
const { twoSumRoughly, twoSum } = require('./three-sum')

const arr = [2, 3, 4, -1, 7, 5, 1, 6]
const arr2 = [2, 3, 4, -1, 7]

describe('two sum loop', () => {
  test('should return empty', () => {
    expect(twoSumRoughly([], 8)).toHaveLength(0)
  })
  test('should return three result', () => {
    expect(twoSumRoughly(arr, 8)).toHaveLength(3)
  })
  test('should return one result', () => {
    expect(twoSumRoughly(arr2, 6)).toHaveLength(2)
  })
})

describe('two sum with map', () => {
  test('should works', () => {
    expect(twoSum([3, 3, 2, 4], 6)).toHaveLength(2)
  })
  test('should return empty', () => {
    expect(twoSum([], 8)).toHaveLength(0)
  })
  test('should return three result', () => {
    expect(twoSum(arr, 8)).toHaveLength(3)
  })
  test('should return one result', () => {
    expect(twoSum(arr2, 6)).toHaveLength(2)
  })
})