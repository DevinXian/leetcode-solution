// leetcode 122 可以买卖无数次，求最大收益

/**
 * 解法一：暴力解法 - 写出来不是那么简单的事情
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n^n) 太高了
 * @space O(n) 递归深度 n`
 */
function solutionWithLoop(prices) {
  if (!prices || !prices.length) return 0

  const len = prices.length

  return iterator(0)

  /**
   * 分析：外层表示从某天起交易 i: 0 -> n
   *      内层表示某次交易时间点 j: i + 1 -> n;  第 j 天交易完，则要在 j+1 以后范围内获取最大利
   */
  function iterator(start) {
    if (start === len) {
      // 没得交易了
      return 0
    }

    let max = 0

    for (let i = start; i < len - 1; i++) {
      let maxProfit = 0

      // 循环之后的日子，如果有赚头，则卖出，并求卖出之后的最大值
      for (let j = i + 1; j < len; j++) {
        // 有收益才买
        if (prices[j] - prices[i]) {
          // 当前获利 + 以后最大获利 = 当前最大获利
          const profit = prices[j] - prices[i] + iterator(j + 1)
          maxProfit = Math.max(maxProfit, profit)
        }
      }

      max = Math.max(max, maxProfit)
    }

    return max
  }
}
/**
 * 解法二：暴力解法二 - DFS 相比较第一种，更加容易编码，采用树形递归
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(2^n) 计算每天是否持有，2的n次方 - 递归解决
 * @space O(n) 递归深度 n
 */
function solutionWithDFS(prices) {
  if (!prices || !prices.length) return 0

  let result = 0
  const len = prices.length

  dfs(0, false, 0)
  return result

  /**
   * @param {number} index 索引
   * @param {boolean} hold false-无 true-持有
   * @param {number} profit 当前获利 
   */
  function dfs(index, hold, profit) {
    if (index === len) {
      result = Math.max(result, profit)
      return
    }

    const price = prices[index]

    // 1 - 无动作
    dfs(index + 1, hold, profit) // 切记，这句不可胜，否则逻辑错误，递归函数体有问题

    if (hold) {
      // 2 - 持有则卖掉，赚钱
      dfs(index + 1, false, profit + price)
    } else {
      // 3 - 没有则买入，花钱
      dfs(index + 1, true, profit - price)
    }
  }
}

/**
 * 解法三：贪心算法
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
 * 解法四：DP
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n) 一次循环
 * @space O(n)
 */
function solutionWithDP(prices) {
  const len = prices && prices.length
  if (!len) return 0

  // dp 状态，当前交易后的状态（即是否持有股票）；
  // 注意错误思考方式：不是买入或者卖出动作，这些输入转移方程的内容

  // dp 转移：上一天交易后状态和当日是否买卖（有股票才能购买）
  // 不持有股票的收益 = 上一天不持有股票，今天不交易 or 上一天买入，今天卖出 最大值
  // 持有股票的收益 = 上一天持有股票，今天不交易 or 上一天不持有，今天买入 最大值

  const dp = new Array(len)
  for (let k = 0; k < len; k++) {
    dp[k] = [0, 0]
  }

  dp[0] = [0, -prices[0]]

  // 可以用变量滚动来替代第二维度数组
  for (let i = 1; i < len; i++) {
    // 不持有股票的收益 = 上一天不持有股票，今天不交易 or 上一天买入，今天卖出 最大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 持有股票的收益 = 上一天持有股票，今天不交易 or 上一天不持有，今天买入 最大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[len - 1][0] // 最后一天不持有股票的最大收益
}


/**
 * 解法五：波峰波谷差分算法
 * @param {number[]} prices
 * @return {number} 最大利润
 * @time O(n) 一次循环
 * @space O(1)
 */
function solutionWithWave(prices) {
  const len = prices && prices.length
  if (!len) return 0

  let res = 0
  let low = prices[0]
  let high = prices[0]
  let index = 0
  // 也可以 index=1 开始，循环体调整比较 prices[i-1] 和 prices[i]，注意索引边界

  while (index < len - 1) {
    // 递减则继续向后寻找拐点
    while (index < len - 1 && prices[index] >= prices[index + 1]) {
      index += 1
    }
    low = prices[index]

    // 递增
    while (index < len - 1 && prices[index] <= prices[index + 1]) {
      index += 1
    }
    high = prices[index]

    res += high - low
  }

  return res
}

module.exports = {
  solutionWithDP,
  solutionWithGreedy,
  solutionWithLoop,
  solutionWithDFS,
  solutionWithWave,
}
