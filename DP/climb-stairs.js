/**
 * 爬楼梯问题:一次只能走一步or两步，有多少种走法
 * 实际上就是斐波那契额序列 f(0) = f(1) = 1, f(2) = f(0) + f(1) = 2 ... f(n) = f(n-1) + f(n-2)
 */
exports.climb = function climb(n) {
  if (n < 2) return 1

  // dp 状态：到当前台阶所需步数
  const dp = [1, 1]
  
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
}
