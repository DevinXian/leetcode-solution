const { binarySearchMinLarger } = require('../helper')
/**
 * 最长非连续上升子序列 - 暴力复杂度 O(2^n)
 */

/**
 * 解法：DP解法 复杂度 O(n^2) 
 */
exports.solution = function (list) {
  if (!list || !list.length) return []

  // 1. dp 状态：包含当前节点的当前最长子序列
  // 2. 转移方程：前面所有节点到当前节点最长距离 + 1
  let curr = list[0]
  let dp = [[curr]]
  let res = [curr]

  for (let i = 1; i < list.length; i++) {
    let curr = list[i]
    let arr = []
    dp[i] = []

    // 能算上 curr 的
    for (let j = i - 1; j >= 0; j--) {
      const pre = dp[j]
      // 当前元素可以添加进去
      if (pre[pre.length - 1] < curr) {
        arr = [...pre, curr]
      } else {
        arr = [curr]
      }
      dp[i] = dp[i].length > arr.length ? dp[i] : arr
    }

    // 更新最长上升序列 - 长度相等第一个
    res = dp[i].length > res.length ? dp[i] : res
  }

  return res
}

/**
 * 附加题：最长连续上升子序列 
 */
exports.solutionContinuously = function (list) {
  if (!list || !list.length) return []

  let result = [list[0]]
  let array = [list[0]]

  for (let i = 1; i < list.length; i++) {
    // 比上一个元素大
    if (list[i] >= list[i - 1]) {
      array.push(list[i])

      // 更新最大长度
      if (result.length < array.length) {
        result = array // 指向最长的同一数组
      }
    } else {
      array = [list[i]]
    }
  }

  return result
}

/**
 * 最长上升子序列长度（非数组）: 复杂度 O(n*lg(n))
 */
exports.maxLength = function (list) {
  if (!list || !list.length) return 0 

  let curr = list[0]
  let index = -1
  const res = [curr] // 维护结果队列

  for (let i = 1; i < list.length; i++) {
    curr = list[i]
    // 找合适位置：都小于curr，添加至结尾；
    // 否则替换第一个大于curr的元素: a<b<c 且 b<d<c，则 a<d<c
    index = binarySearchMinLarger(res, curr, 0, res.length - 1)

    index === -1
      ? res.push(curr)
      : res.splice(index, 1, curr)
  }

  // 虽然数组不对，但是长度正确, 如 list=[2,3,1] => res=[1, 3]
  // 解释：替换元素只是为了让后面元素可以加进来，本质上还是一换一，不影响长度
  return res.length
}

