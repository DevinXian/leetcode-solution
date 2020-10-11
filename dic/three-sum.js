function check(arr, len) {
  return !!arr && arr.length >= len 
}

/*** 
 * 三数之和: 本处解法均不考虑数字重复
 */

// 暴力求解
exports.threeSumRoughly = function (arr, sum) {
  const res = []
  if (!check(arr, 3)) return res

  for (let i = 0; i < arr.length - 2; i++) {
    // if (arr[i] === arr[i + 1]) continue // 可去重

    for (let j = i + 1; j < arr.length - 1; j++) {
      // if (arr[j] === arr[j + 1]) continue // 可去重

      for (let k = j + 1; k < arr.length; k++) {
        // if (arr[k] === arr[k + 1]) continue // 可去重

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

  if (!check(arr, 3)) return res

  for (let i = 0; i < arr.length - 2; i++) {
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

/**
 * 双指针逼近法
 */
exports.threeSumDoublePointer = function (arr, sum) {
  const res = []

  if (!check(arr, 3)) return res

  arr.sort() // 也可以新开数组，防止输入被改变

  for (let i = 0; i < arr.length; i++) {
    let start = i + 1
    let end = arr.length - 1

    while (start <= end) {
      const tmp = arr[i] + arr[start] + arr[end]
      if (tmp === sum) {
        res.push([arr[i], arr[start], arr[end]])
      } else {
        tmp > sum ? end-- : start++
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
  if (!check(arr, 2)) return res

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

  if (!check(arr, 2)) return res

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

// 贴个网友的骚操作 - 注：其中 ar.splice(1) 是用来将数组后面全部去掉，相当于length赋值 i+1，提前终止循环
function twoSum3(nums, target) {
  return nums.reduce((p, v, i, ar) => p[v] !== undefined && ar.splice(1) && [p[v], i] || (i === p['l'] ? [] : p[target - v] = i, p), {l: nums.length - 1})
}
