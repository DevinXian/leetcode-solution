/**
 * 全排列问题
 */

/**
 * 元素交换法
 * @param {number[]} nums
 * @return {number[][]}
 */
exports.permuteByElementReplacement = function (nums) {
  if (!nums?.length) return nums;

  const result = [];

  function each(pre, res) {
    if (res.length <= 1) {
      result.push(pre.concat(res));
      return;
    }

    for (let i = 0; i < res.length; i++) {
      const newRes = [...res];
      newRes.splice(i, 1, newRes[0]);
      each(pre.concat(res[i]), newRes.slice(1));
    }
  }

  each([], nums);

  return result;
};
