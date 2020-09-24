/*** 两数之和 */

/**
 * 循环暴力查找
 */
exports.twoSumRoughly = function (arr, sum) {
  const res = []

  if (!arr || !arr.length) return []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        res.push([arr[i], arr[j]])
      }
    }
  }

  return res
}

/**
 * map 辅助实现
 */
exports.twoSum = function (arr, sum) {
  const res = []
  const map = new Map()

  if (!arr || !arr.length) return []

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i]
    const flag = map.get(sum - ele)

    if (flag) {
      res.push([ele, sum - ele])
    } else {
      map.set(ele, sum - ele)
    }
  }

  return res
}