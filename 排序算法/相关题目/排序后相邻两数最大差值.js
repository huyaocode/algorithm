/**
 * 给定一个数组，求如果排序之后，相邻两数的最大差值，
 * 要求时间复杂度O(N)，
 * 要求不能用非基于比较的排序。
 */

/**
 * 解法：
 *
 * 1. 准备桶，如果有N个数，就准备N+1个桶，
 * 2. 遍历数组，找到最小值min和最大值max，当min == max,直接返回0
 * 3. 最小值进0号桶，最大值进N号桶
 * 4. 将数字等分为 n + 1份，属于那个范围就进哪号桶。
 *   每个桶里只记录这个范围出现过的最小值、最大值，和是否存在值
 * 5. 遍历，查找
 *  对于每一个非空桶，找他左边非空桶的最大值，他自己这个桶最小值，得出一个差值
 *
 *   注意1，最大差值一定不会出现在同一个桶内，因为至少存在一个空桶。
 *   注意2，最大差值不一定是空桶两边
 */

function maxGap(arr) {
  let arrLen = arr.length;
  let max = Math.max(...arr),
    min = Math.min(...arr);
  if (max === min) {
    return 0;
  }
  let bucketMax = [],
    bucketMin = [],
    hasNumber = [];
  for (let i = 0; i < arrLen; i++) {
    let bid = bucketNumber(arr[i], arrLen, min, max);
    bucketMax[bid] = hasNumber[bid] ? Math.max(bucketMax[bid], arr[i]) : arr[i];
    bucketMin[bid] = hasNumber[bid] ? Math.min(bucketMin[bid], arr[i]) : arr[i];
    hasNumber[bid] = true;
  }
  let res = 0,
    lastMax = bucketMax[0],
    i = 1;
  // 注意，一共有 n + 1 个桶
  for (; i < arrLen + 1; i++) {
    if (hasNumber[i]) {
      res = Math.max(bucketMin[i] - lastMax, res);
      lastMax = bucketMax[i];
    }
  }
  return res;
}

function bucketNumber(num, len, min, max) {
  return parseInt(((num - min) * len / (max - min)) );
}

let arr = [1, 4, 7, 8, 5, 0, 6, 9, 5, 4, 0, 10];

let res = maxGap(arr);

console.log(res);
