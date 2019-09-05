/**
 * 找出所有和为S的连续正数序列,
 * 如：正数和为100的序列:18,19,20,21,22 或 9~16
 *
 * 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 */

console.log(FindContinuousSequence(0));

function FindContinuousSequence(sum) {
  let res = [],
    tempArr = [];
  let curSum = 0;
  for (let i = 1; i < sum; i++) {
    tempArr.push(i);
    curSum += i;
    while (curSum > sum) {
      curSum -= tempArr.shift();
    }
    if (curSum === sum) {
      res.push([...tempArr]);
    }
  }
  return res;
}
