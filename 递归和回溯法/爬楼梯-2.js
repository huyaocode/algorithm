/**
  在你面前有一个n阶的楼梯(n>=100且n<500)，你一步只能上1阶或3阶。
  请问计算出你可以采用多少种不同的方式爬完这个楼梯（到最后一层为爬完）。
 */

function climbStairsCached(num) {
  let cache = [];
  function climbStairs(num) {
    if (num === 1 || num === 2) {
      return '1';
    }
    if (num === 3) {
      return '2';
    }
    if (cache[num]) {
      return cache[num];
    }
    let res = add(climbStairs(num - 1), climbStairs(num - 3));
    cache[num] = res;
    return res;
  }

  let res = climbStairs(num);
  return res;
}

function add(a, b) {
  a = typeof a === 'number' ? '' + a : a;
  b = typeof b === 'number' ? '' + b : b;
  let num1 = a
      .split('')
      .reverse()
      .map(i => parseInt(i)),
    num2 = b
      .split('')
      .reverse()
      .map(i => parseInt(i));
  let maxLen = Math.max(num1.length, num2.length);
  for (let i = 0; i < maxLen; i++) {
    let num1_i = num1[i] || 0,
      num2_i = num2[i] || 0;

    let sum = num1_i + num2_i;
    if (sum >= 10) {
      num1[i] = sum % 10;
      num1[i + 1] = num1[i + 1] ? num1[i + 1] + 1 : 1;
    } else {
      num1[i] = sum;
    }
  }
  return num1.reverse().join('');
}
// let res = climbStairsCached(100);

// console.log(res);


console.log(add('1234', 2345))
