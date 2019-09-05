/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 */

function FindNumbersWithSum(array, sum) {
  if (!array || array.length < 2) {
    return [];
  }
  let i = 0,
    j = array.length - 1;
  let curSum;
  while (i < j) {
    curSum = array[i] + array[j];
    if (curSum === sum) {
      return [array[i], array[j]];
    } else if (curSum > sum) {
      j--;
    } else {
      i++;
    }
  }
  return [];
}
