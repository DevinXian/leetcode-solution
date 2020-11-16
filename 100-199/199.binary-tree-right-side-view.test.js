const {
    solution
  } = require('./199.binary-tree-right-side-view')
  
  function runTest(method) {
    describe(`199.binary-tree-right-side-view ${method.name} test`, () => {
      test('common case 1', () => {
        expect(method([1, 2, 3, null, 5, null, 4])).toEqual([1, 3, 4])
      })
      test('common case 2', () => {
        expect(method([1, 2, 3])).toEqual([1, 3])
      })
      test('common case 3', () => {
        expect(method([1, null, 2, 3])).toEqual([1, 2, 3])
      })
      test('common case 4', () => {
        expect(method([5, 4, 7, 3, null, 2, null, -1, null, 9])).toEqual([5, 7, 2, 9])
      })
    })
  }
  
  runTest(solution)