const { initTowDimensionalArray } = require('../helper')

/**
 * leetcode 647 palindromic-substrings
 */

function isPalindrome(str) {
  let i = 0
  let j = str.length - 1

  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++
    j--
  }

  return true
}

/**
 * 解法一：暴力解法
 * @param {*} s 
* @return {number}
* @time O(n^3) 找字符串，再判断是否回文
* @space O(1)
 */
exports.solutionWithLoop = function (s = '') {
  let res = 0
  const len = s.length

  if (!len) return res

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (isPalindrome(s.slice(i, j + 1))) {
        res += 1
      }
    }
  }

  return res
}

/**
 * 解法二：动态规划
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
 * 解法二优化版：动态规划
 * @param {string} s
 * @return {number}
 * @time O(n^2) 两层循环
 * @space O(n) 一维数组
 */
exports.solutionWithDP_2 = function (s = '') {
  let res = 0 // 总数 
  const len = s.length

  if (!len) return res

  /**
   * 空间优化思路：优化外部循环固定时，内部空间重用问题
   * 理解：当 i 固定, dp[j] 状态只跟 i+1 时候的 dp[j+1] 有关，可以复用外层上一次循环(即 i+1)时的空间
   * 以之前解法，i 递减，j 递增，基准方向不同，所以无法重用空间，需改成同向增加
   */
  const dp = new Array(len).fill(false) // 初始化一个数组

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      // dp[j+1] 是上一次外层循环 i-1 计算好的，注意此时：i - j >= 2，故 j+1 存在
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1])) { // 当 j 变大，不能从 dp[j-1] => dp[j]，会覆盖
        dp[j] = true
        res += 1
      } else {
        dp[j] = false // 不可省略，如果二维数组则可省略
      }
    }
  }

  return res
}

/**
 * 解法三：中心扩展法
 * @param {string} s
 * @return {number}
 * @time O(n^2)
 * @space O(1)
 */
exports.solutionWithCenter = function (s = '') {
  let res = 0 // 总数 
  const len = s.length

  if (!len) return res

  // 分析：单字符为中心，则有 len 个；双字符为中心，则有 len - 1 个，共 2 * len - 1
  // 可归纳出(归纳可参考leetcode网友）：left 为 Math.floor(center/2)，right = left + center % 2

  // for (let center = 0; center < 2 * len - 1; center++) {
  //   let left = parseInt(center / 2)
  //   let right = left + center % 2

  //   while (left >= 0 && right < len && s[left] == s[right]) {
  //     res += 1
  //     left--
  //     right++
  //   }
  // }

  // 分别以单字母（奇数个）和双字母（偶数个，如abab，只能以ba为中心扩）扩散
  for (let i = 0; i < len; ++i) {
    let l = i, r = i; //以单字母为中心
    while (l >= 0 && r < len && s[l--] == s[r++]) {
      res += 1
    }

    l = i, r = i + 1; //以双字母为中心
    while (l >= 0 && r < len && s[l--] == s[r++]) {
      res += 1
    }
  }

  return res
}

/**
 * 解法四：Manacher TODO: 较难，有余力再写
 * @param {string} s
 * @return {number}
 * @time O(n)
 * @space O(n)
 */
