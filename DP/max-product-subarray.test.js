// 给定数组，输出连续最大的乘积
const { maxProduct, maxProductDP } = require('./max-product-subarray')

const arr1 = [2, 3, -1, 5]
const arr2 = [2, 3, 0, 6, 4]

describe('max product subarray', () => {
  test('loop only one element', () => {
    expect(maxProduct([10])).toBe(10)
  })
  test('loop without zero', () => {
    expect(maxProduct(arr1)).toBe(6)
  })
  test('loop with zero', () => {
    expect(maxProduct(arr2)).toBe(24)
  })
  test('dp only one element', () => {
    expect(maxProduct([10])).toBe(10)
  })
  test('dp without zero', () => {
    expect(maxProductDP(arr1)).toBe(6)
  })
  test('dp with zero', () => {
    expect(maxProductDP(arr2)).toBe(24)
  })
})