// leetcode 122 可以买卖无数次，求最大收益

/**
 * 解法一：暴力解法
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n^2) 两层循环
 * @space O(1)
 */
function solutionWithLoop(prices) {
  if (!prices || !prices.length) return 0

  let max = 0
  const len = prices.length

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

module.exports = {
  solutionWithGreedy,
  solutionWithLoop,
}
