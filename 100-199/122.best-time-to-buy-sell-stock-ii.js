// leetcode 122 可以买卖无数次，求最大收益

/**
 * 解法一：暴力解法
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(2^n) 两层循环
 * @space O(1)
 */
function solutionWithLoop(prices) {
  if (!prices || !prices.length) return 0

  let max = 0
  const len = prices.length

  // 普通循环无法达到指数级

  // 深度优先遍历
  function dfs() {

  }

  // TODO:
  return max
}

/**
 * 解法二：贪心算法
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n) 一次循环
 * @space O(1)
 */
function solutionWithGreedy(prices) {
  const len = prices && prices.length
  if (!len) return 0

  let res = 0

  for (let i = 0; i < len - 1; i++) {
    // 贪心，只要能买就买，能获利就卖 - 因为无数次，所以相邻或者间隔的最大收益能获取，如 1 2 5 => 1 买入 2卖出 2买入 5卖出，则获利 4
    if (prices[i + 1] > prices[i]) {
      res += prices[i + 1] - prices[i]
    }
  }

  return res
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

  // dp 状态，当前交易后的状态（即是否持有股票）注意不是动作（即不是买入或卖出）
  // dp 转移：上一天交易后状态和当日是否买卖（有股票才能购买）

  const dp = new Array(len)
  for (let k = 0; k < len; k++) {
    dp[k] = [0, 0]
  }

  dp[0] = [0, -prices[0]]

  for (let i = 1; i < len; i++) {
    // 不持有股票的收益 = 上一天不持有股票，今天不交易 or 上一天买入，今天卖出 最大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 持有股票的收益 = 上一天持有股票，今天不交易 or 上一天不持有，今天买入 最大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[len - 1][0] // 最后一天不持有股票的最大收益
}

module.exports = {
  solutionWithDP,
  solutionWithGreedy,
  solutionWithLoop,
}
