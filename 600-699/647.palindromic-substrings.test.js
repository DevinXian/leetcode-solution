const {
  solutionWithDP,
  solutionWithCenter
} = require('./647.palindromic-substrings')

describe('647.palindromis-substring solutionWithDP test', () => {
  test('empty string', () => {
    expect(solutionWithDP('')).toEqual(0)
  })
  test('only one char', () => {
    expect(solutionWithDP('a')).toEqual(1)
  })
  test('two different char', () => {
    expect(solutionWithDP('ab')).toEqual(2)
  })
  test('two same char', () => {
    expect(solutionWithDP('aa')).toEqual(3)
  })
  test('three same char', () => {
    expect(solutionWithDP('aaa')).toEqual(6)
  })
  test('common case1', () => {
    expect(solutionWithDP('aba')).toEqual(4)
  })
  test('common case2', () => {
    expect(solutionWithDP('cabac')).toEqual(7)
  })
})

describe('647.palindromis-substring solutionWithCenter test', () => {
  test('empty string', () => {
    expect(solutionWithCenter('')).toEqual(0)
  })
  test('only one char', () => {
    expect(solutionWithCenter('a')).toEqual(1)
  })
  test('two different char', () => {
    expect(solutionWithCenter('ab')).toEqual(2)
  })
  test('two same char', () => {
    expect(solutionWithCenter('aa')).toEqual(3)
  })
  test('three same char', () => {
    expect(solutionWithCenter('aaa')).toEqual(6)
  })
  test('common case1', () => {
    expect(solutionWithCenter('aba')).toEqual(4)
  })
  test('common case2', () => {
    expect(solutionWithCenter('cabac')).toEqual(7)
  })
})