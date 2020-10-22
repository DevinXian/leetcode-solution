const { initTowDimensionalArray } = require('../helper')

/**
 * leetcode 647 palindromic-substrings
 */

/**
 * 解法一：动态规划
 * @param {string} s
 * @return {number}
 * @time O(n^2) 两层循环
 * @space O(n^2) 开辟二维数组
 */
exports.solutionWithDP = function (s = '') {
  let res = 0 // 总数 
  const len = s.length

  if (!len) return res

  // dp 分析：回文意味着可以从中心扩展
  // dp 状态：s[i][j] 表示s中 i->j 部分是回文（闭区间）
  // dp 转移方程: s[i][j] = s[i] === s[j] && dp[i-1][j+1]，左右两边各扩展1个字符

  // 初始化一个二维数组
  const dp = initTowDimensionalArray(len, false)

  // 为了满足扩展的方向性，需要 i: len -> 0
  for (let i = len - 1; i >= 0; i--) {
    // 内层：j: i -> len 区间扩散，相当于内层从左边向右边扩散寻找回文
    for (let j = i; j < len; j++) {
      // j - i < 2 意味着只有1个或2个字符且相等肯定是回文字符串
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        res += 1
      }
    }
  }

  return res
}

/**
 * 解法二：中心扩展法
 * @param {string} s
 * @return {number}
 * @time O(n^2)
 * @space O(1)
 */
exports.solutionWithCenter = function (s = '') {
  let res = 0 // 总数 
  const len = s.length

  if (!len) return res

  for (let center = 0; center < 2 * len - 1; center++) {
    let left = parseInt(center / 2)
    let right = left + center % 2

    while (left >= 0 && right < len && s[left] == s[right]) {
      res += 1
      left--
      right++
    }
  }

  return res
}

/**
 * 解法三：
 * @param {string} s
 * @return {number}
 *
 */
