/**
 * 二叉树的右视图
 */

/**
 * @param {number[]} tree 二叉树层次遍历数组 - 逐层
 * @returns {number[]} 右视图数组
 */
exports.solution = function solution(tree) {
  if (!tree || !tree.length) return []

  let temp = []
  const res = []

  for (let depth = 0; ; depth++) {
    let len = Math.pow(2, depth)

    // 长度不够第 depth 层截取
    if (tree.length < len) {
      // 排除末尾的null
      _appendLastNumber(tree)
      break;
    } else {
      // 本层数组
      temp = tree.splice(0, len)
      console.log(tree)
      _appendLastNumber(temp)
    }
  }

  function _appendLastNumber(array) {
    let idx = array.length - 1

    while (idx >= 0) {
      if (array[idx]) {
        res.push(array[idx])
        break;
      }
      idx--
    }
  }

  return res
}
