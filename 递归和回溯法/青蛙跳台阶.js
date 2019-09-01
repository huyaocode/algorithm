/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

/**
 * f(n) = f(n - 1) + f(n - 2)
 * f(1) = 1
 * f(2) = 2;
 */
function jumpFloor(number) {
  let res = 0;
  let f1 = 1,
    f2 = 2;
  if (number === 1) {
    return 1;
  } else if(number === 2){
    return 2;
  }
  while (--number >= 2) {
    res = f1 + f2;
    f1 = f2;
    f2 = res;
  }
  return res;
}
