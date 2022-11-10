/**
 * 有序递增序列查找不小于该数字的第一个数字
 */
function binarySearchMinLarger(list, value, start, end) {
  // 循环终结
  if (start >= end) {
    return list[end] >= value ? end : -1
  }

  const mid = Math.floor((start + end) / 2)

  return list[mid] < value
    ? binarySearchMinLarger(list, value, mid + 1, end)
    : binarySearchMinLarger(list, value, start, mid)
}

exports.binarySearchMinLarger = binarySearchMinLarger

exports.initTowDimensionalArray = function (size, defaultValue) {
  const dp = new Array(size)

  for (let k = 0; k < size; k++) {
    dp[k] = new Array(size)
    dp[k].fill(defaultValue)
  }

  return dp
}