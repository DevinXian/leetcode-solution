function check(arr) {
  return !!arr && arr.length > 0
}

/*** 三数之和 */
exports.threeSumRoughly = function (arr, sum) {
  const res = []
  if (!check(arr)) return res

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          res.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }

  return res
}

exports.threeSum = function (arr, sum) {
  const res = []
  const map = new Map()

  if (!check(arr)) return res

  for (let i = 0; i < arr.length; i++) {
    map.clear() // 必须

    // 内层做 twoSum
    const remain = sum - arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      const rest = remain - arr[j]

      if (map.get(rest)) {
        res.push([arr[i], arr[j], rest])
      } else {
        map.set(arr[j], rest)
      }
    }
  }

  return res
}



/*** 两数之和 */

/**
 * 循环暴力查找
 */
exports.twoSumRoughly = function (arr, sum) {
  const res = []
  if (!check(arr)) return res

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

  if (!check(arr)) return res

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