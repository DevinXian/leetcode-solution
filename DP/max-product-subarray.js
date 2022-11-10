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
    }
  }

  return max
}

/**
 * 解法二，DP 算法
 * @notice 本方法 LeetCode 打败 43.06% 用户，不如优化的后者
 * @param {number[]} nums
 * @return {number}
 */
exports.maxProductDP = function (nums) {
  if (!nums || !nums.length) return 0

  var x = 1
  var y = 0
  var curr = nums[0]
  var dp = [[curr, curr], []] // min max
  var res = curr

  for (var i = 1; i < nums.length; i++) {
    curr = nums[i]

    x = i % 2
    y = (i - 1) % 2

    /**
     * 1. 确定当前状态：包含当前元素的最大乘积: DP[i]
     * 2. 确定DP转移方程: 迭代过程中的每一次的乘积只跟上一次乘积和当前元素有关 DP[i] <= DP[i-1] * arr[i]
     * 3. 考虑当前是负数，则上一轮乘积如果是正数，则会变为最小值；否则变为最大值，并且都是带着符号的；
     *    所以每次迭代两个位置分别保存最大和最小值,所以是 nx2 大小二维数组
     *    由于每次迭代只跟前一个最大最小值有关, 所以二维数组可以缩减成 2x2 的，第二位0表示最大值
     */
    dp[x][0] = Math.min(dp[y][0] * curr, dp[y][1] * curr, curr) // min
    dp[x][1] = Math.max(dp[y][0] * curr, dp[y][1] * curr, curr) // max

    // 更新全局最大乘积，保证包含当前元素的乘积跟历史乘积进行比较
    res = Math.max(dp[x][1], res)
  }

  return res
};

/**
 * 优化掉中间变量和二维数组
 * @notice 在leetcode 打败 81.93% 用户
 * @param {number[]} nums
 * @return {number}
 */
exports.maxProductDPBetter = function(nums) {
  if (!nums || !nums.length) return 0
  
    var dp = [nums[0], nums[0]] // min max
    var res = nums[0]
  
    for (var i = 1; i < nums.length; i++) {
      const min = dp[0]  //
      dp[0] = Math.min(dp[0] * nums[i], dp[1] * nums[i], nums[i]) // min
      dp[1] = Math.max(min * nums[i], dp[1] * nums[i], nums[i]) // max
  
      // 更新全局最大乘积，保证包含当前元素的乘积跟历史乘积进行比较
      res = Math.max(dp[1], res)
    }
  
    return res
  };
  