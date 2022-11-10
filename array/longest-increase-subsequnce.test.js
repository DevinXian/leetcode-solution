// 给定数组，获取最大累加值和范围
const { solution, maxLength, solutionContinuously } = require('./longest-increase-subsequnce')

describe('solution continuously', () => {
  test('empty input', () => {
    expect(solutionContinuously([])).toEqual([])
  })
  test('only negative element', () => {
    expect(solutionContinuously([-1])).toEqual([-1])
  })
  test('zero and negative element', () => {
    expect(solutionContinuously([-1, 0])).toEqual([-1, 0])
  })
  test('only positive element', () => {
    expect(solutionContinuously([1, 2, 3])).toEqual([1, 2, 3])
  })
  test('mix case1', () => {
    expect(solutionContinuously([1, -10, 0, -1])).toEqual([-10, 0])
  })
  test('mix case2: positive and negative element', () => {
    expect(solutionContinuously([-1, 2, 3, 4, -10, 5, 6, -10, 8, -1])).toEqual([-1, 2, 3, 4])
  })
})

describe('solution jumply', () => {
  test('empty input', () => {
    expect(solution([])).toEqual([])
  })
  test('only negative element', () => {
    expect(solution([-1])).toEqual([-1])
  })
  test('zero and negative element', () => {
    expect(solution([-1, 0])).toEqual([-1, 0])
  })
  test('only positive element', () => {
    expect(solution([1, 2, 3])).toEqual([1, 2, 3])
  })
  test('mix case1', () => {
    expect(solution([1, -10, 0, -1])).toEqual([-10, 0])
  })
  test('mix case2: positive and negative element', () => {
    expect(solution([-1, 2, -3, 4, -12, 5, 6, -10, 8, -1])).toEqual([-1, 2, 4, 5, 6, 8])
  })
})

describe('max length', () => {
  test('empty input', () => {
    expect(maxLength([])).toBe(0)
  })
  test('only negative element', () => {
    expect(maxLength([-1])).toEqual(1)
  })
  test('zero and negative element', () => {
    expect(maxLength([-1, 0])).toEqual(2)
  })
  test('only positive element', () => {
    expect(maxLength([1, 2, 3])).toEqual(3)
  })
  test('mix case1', () => {
    // 注意：循环得到的不是 [-10, 0]
    expect(maxLength([1, -10, 0, -1])).toEqual(2)
  })
  test('mix case2: positive and negative element', () => {
    expect(maxLength([-1, 2, -3, 4, -12, 5, 6, -10, 8, -2])).toEqual(6)
  })
  test('mix case3: positive and negative element', () => {
    expect(maxLength([10, 9, 2, 5, 3, 7, 101, 18, 20])).toEqual(5)
  })
})