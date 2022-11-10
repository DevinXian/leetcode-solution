// leetcode 121 只能买卖一次，求最大收益

/**
 * 解法一：暴力解法
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n^2) 两层循环
 * @space O(1)
 */
function solutionWithLoop(prices) {
  if (!prices.length) return 0

  let max = 0 

  // 任选一天买入
  for (let i = 0; i < prices.length - 1; i++) {
    // 任选买入后的某天卖出
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i])
    }
  }
  return max
}

/**
 * 解法二：循环优化
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n) 一次循环
 * @space O(1)
 */
function solutionWithLoopOptimized(prices) {
  if (!prices.length) return 0

  let max = 0 
  let minPrice = prices[0]

  // 任选一天买入
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i] // 最小值，则是待定的买入时机
    } else {
      // 非最小值，假设卖出，判断是否更多获利
      max = Math.max(max, prices[i] - minPrice)
    }
  }
  return max
}

/**
 * 解法三：DP
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n) 一次循环
 * @space O(1)
 */
function solutionWithDP(prices) {
  const len = prices && prices.length
  if (!len) return 0

  /**
   * dp状态：当前天为止获取的最大利润
   * dp转移方程：今天最大获利 = 昨天最大获利 vs 今天以当前最大差价卖出 较大者
   */
  let minPrice = prices[0]
  const dp = new Array(len).fill(0)

  for (let i = 1; i < len; i++) {
    minPrice = Math.min(minPrice, prices[i])
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
  }

  return dp[len - 1]
}

module.exports = {
  solutionWithDP,
  solutionWithLoop,
  solutionWithLoopOptimized
}
