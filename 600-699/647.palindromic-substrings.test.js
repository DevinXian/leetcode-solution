const {
  solutionWithDP,
  solutionWithDP_2,
  solutionWithCenter,
  solutionWithLoop
} = require('./647.palindromic-substrings')

function runner(method) {
  test('empty string', () => {
    expect(method('')).toEqual(0)
  })
  test('only one char', () => {
    expect(method('a')).toEqual(1)
  })
  test('two different char', () => {
    expect(method('ab')).toEqual(2)
  })
  test('two same char', () => {
    expect(method('aa')).toEqual(3)
  })
  test('three same char', () => {
    expect(method('aaa')).toEqual(6)
  })
  test('common case1', () => {
    expect(method('aba')).toEqual(4)
  })
  test('common case2', () => {
    expect(method('cabac')).toEqual(7)
  })
  test('common case3', () => {
    expect(method('fdsklf')).toEqual(6)
  })
}

describe('647.palindromis-substring solutionWithLoop test', () => {
  runner(solutionWithLoop)
})

describe('647.palindromis-substring solutionWithDP test', () => {
  runner(solutionWithDP)
})

describe('647.palindromis-substring solutionWithDP_2 test', () => {
  runner(solutionWithDP_2)
})

describe('647.palindromis-substring solutionWithCenter test', () => {
  runner(solutionWithCenter)
})