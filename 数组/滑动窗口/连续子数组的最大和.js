/**
 * 需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。
 * 但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 * 给一个数组，返回它的最大连续子序列的和
 */

function FindGreatestSumOfSubArray(array)
{
  if(!array || array.length === 0) {
    return null;
  }
  let maxSum = array[0];
  let curSum = array[0];
  for(let i = 1; i < array.length; i++){
    if(curSum < 0) { // 累计和小于 0 才舍弃
      curSum = array[i];
    } else {
      curSum += array[i];
    }
    if(curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
}

console.log(FindGreatestSumOfSubArray([1,2,3,4,-1,5]))