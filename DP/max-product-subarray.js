/** 
 * 给定数组，输出连续最大的乘积
 */

// 解法1，暴力双层循环
exports.maxProduct = function (arr) {
  let max = Number.MIN_VALUE

  // 假设元素为 1 2 3，则相当于 1, 1*2, 1*2*3, 2, 2*3, 3，效率很低
  for (let i = 0; i < arr.length; i += 1) {

    let res = 1
    for (let j = i; j < arr.length; j += 1) {
      res = res * arr[j]
      max = Math.max(res, max)
      console.log(res, max)
    }
  }

  return max
}

// 解法二，DP 算法
exports.maxProductDP = function (arr) {
  if (!arr.length) return 0

  /**
   * 1. 确定当前状态：包含当前元素的最大乘积: DP[i]
   * 2. 确定DP转移方程: 迭代过程中的每一次的乘积只跟上一次乘积和当前元素有关 DP[i] <= DP[i-1] * arr[i]
   * 3. 考虑当前是负数，则上一轮乘积如果是正数，则会变为最小值；否则变为最大值，并且都是带着符号的；
   *    所以每次迭代两个位置分别保存最大和最小值,所以是 nx2 大小二维数组
   *    由于每次迭代只跟前一个最大最小值有关, 所以二维数组可以缩减成 2x2 的，第二位0表示最大值
   */
  let cur = arr[0]
  let res = Number.MIN_VALUE // 全局最大乘积 
  let x = 0
  let y = 0
  const dp = [[cur], [cur]] // 大小 2x2

  for (let i = 1; i < arr.length; i += 1) {
    cur = arr[i]

    x = i % 2 // 当前位置 DP 索引
    y = (i - 1) % 2 // 上一轮 DP 索引

    // 存储当前最大值
    dp[x, 0] = Math.max(dp[y, 0] * cur, dp[y, 1] * cur, cur)
    // 储存当前最小值
    dp[x, 1] = Math.min(dp[y, 0] * cur, dp[y, 1] * cur, cur)

    // 更新全局最大乘积，保证包含当前元素的乘积跟历史乘积进行比较
    res = Math.max(dp[x, 0], res)
  }

  return res
}

