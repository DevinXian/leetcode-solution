/**
 * leetcode 1143 求最长公共子序列
 * 如 abcde 和 acek 的最长公共子序列是 ace
 */
exports.solutionByDP = function (a, b) {
  /**
   * 定义DP状态: dpa[i] dpb[j] 表示到 a[i] 和 b[j] 的最长公共子序列
   * 确定DP转移方程:
   * dp[i][j] = a[i] === b[j] ? dp[i-1][j-1].push(a[i]): []
   *    不算 a[i] 时最长子序列
   *    不算 b[j] 时最长子序列
   * a [1, 2, 3, 6]
   * b [2, 3, 2, 3, 6]
   */
  const dpa = [a[0]]
  const dpb = [b[0]]
}

/**
 * 扩展：求最长连续公共子序列
 * // TODO: 输出公共子序列值
 */
exports.longestContinuousSubArray = function (a, b) {
  if (!a || !a.length || !b || !b.length) return 0 

  let res = 0
  const dp = []

  // 慎用 Array.prototype.fill，如果fill接受非基本类型，会一荣俱荣
  for (let k = 0; k < a.length; k++) {
    dp[k] = new Array(b.length)
    dp[k].fill(0)
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      // 要么a开头，要么b开头，初始化为1
      if (i === 0 || j === 0) {
        dp[i][j] = a[i] === b[j] ? 1 : 0
      } else {
        if (a[i] === b[j]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = 0
        }
      }
      res = Math.max(dp[i][j], res)
    }
  }

  return res
}
