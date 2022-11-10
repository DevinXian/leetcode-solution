/**
 * 三角形最小路径和（从顶点出发，每次选择左右两边，到达最下面一条边所经过的路径缩小和）
 * 如 [2]
 *    [3, 4]
 *    [6, 5, 7]
 *    [4, 1, 8, 3]
 * @notice 贪心算法不能解决问题
 * @param {Array<number>} matrix
 */
exports.solution = function(matrix) {
  // DP 解决方向：自底向上 - 如何判断DP转移方向，个人理解是相当于“收拢”过程，多个路径的DP汇聚到当前DP
  // DP 状态：自底向上，包含当前节点的最小路径和
  // DP 方程：dp[i, j] = min(dp[i+1, j], dp[i+1, j+1]) + matrix[i, j]

  // DP初始状态
  const dp = matrix[matrix.length - 1]

  // matrix.length - 1 最底下一层，最小值即为本身值；向上层计算
  for (let i = matrix.length - 2; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 右边的 dp[j] 和 dp[j+1] 是上一次循环计算的结果
      // 最开始是最下边的一行，即 matrix[matrix.length - 1]
      dp[j] = Math.min(dp[j], dp[j + 1]) + matrix[i][j]
    }
  }

  return dp[0]
}