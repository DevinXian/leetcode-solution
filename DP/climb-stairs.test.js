// 给定数组，输出连续最大的乘积
const { climb } = require('./climb-stairs')

// 1 1 2 3 5
function fib(n) {
  if (n < 2) return 1
  return fib(n - 1) + fib(n - 2)
}

describe('climb stairs by one/two step', () => {
  test('one stairs', () => {
    expect(climb(1)).toBe(1)
  })
  test('two stairs', () => {
    expect(climb(2)).toBe(1)
  })
  test('validate by fibnacci', () => {
    // climb 返回的是 n-1 的值，所以跟斐波那契差1
    expect(climb(5)).toBe(fib(4))
  })
})