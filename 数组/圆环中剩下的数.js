/**
 *  问题描述：n个人（编号0~(n-1))，从0开始报数，报到(m-1)的退出，剩下的人 继续从0开始报数。求胜利者的编号。
 */

console.log(LastRemaining_Solution(5, 3));

// 模拟环
function LastRemaining_Solution(n, m) {
  if (n == 0 || m == 0) {
    return -1;
  }
  let arr = new Array(n);
  arr.fill(0);
  let count = n;
  let index = -1;
  let step = 0;
  while (count) {
    index++;
    if (index >= n) {
      index = 0;
    }
    if (arr[index] === -1) {
      continue;
    }
    step++;
    if (step === m) {
      arr[index] = -1;
      step = 0;
      count--;
    }
  }
  return index;
}
