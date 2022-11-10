const { permuteByElementReplacement } = require("./46.permutation");

function runTest(method) {
  describe(`46. ${method.name} test`, () => {
    test("common case 1", () => {
      expect(method([1, 2, 3])).toHaveLength(6);
    });
    test("common case 2", () => {
      expect(method([1, 2, 3, 4])).toHaveLength(24);
    });
  });
}

runTest(permuteByElementReplacement);
