exports.maxSum = function (list) {
  if (!list || !list.length) return 0 

  let prevSum = list[0]
  let maxSum = list[0]

  for (let i = 1; i < list.length; i++) {
    // 累加值小于0，则重新开始算
    if (prevSum < 0) {
      prevSum = list[i]
    } else {
      // 否则累加
      prevSum += list[i]
    }

    // 取最大值
    if (prevSum > maxSum) {
      maxSum = prevSum
    }
  }

  return maxSum
}

exports.maxSumArray = function (list) {
  if (!list || !list.length) return [] 

  let start = 0
  let end = start + 1 
  let sum = list[0]
  let maxSum = list[0]
  let lastStart = start
  let lastEnd = end

  for (let i = 0; i < list.length; i++) {
    // 累加值小于0，则重新开始算
    if (sum < 0) {
      sum = list[i]
      start = i
      end = i + 1
    } else {
      // 否则累加
      sum += list[i]
      end++
    }

    // 取最大值
    if (sum >= maxSum) {
      maxSum = sum
      // 更新最大值范围
      lastStart = start
      lastEnd = end
    }
  }

  return list.slice(lastStart, lastEnd)
}
