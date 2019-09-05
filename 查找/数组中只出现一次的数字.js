/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
 * 请写程序找出这两个只出现一次的数字。
 */

/**
 * 例如：[2,4,3,6,3,2,5,5]，异或结果是 0010,那我们可以用数字二进制的倒数第二位是不是1来讲该数组分为两个数组
 * 即：[2,3,6,3,2]和[4,5,5], 再在这两个数组里面分别进行异或就可以了
 *
 * @return list, 比如[a,b]，其中ab是出现一次的两个数字
 */

console.log(FindNumsAppearOnce([2,4,3,6,3,2,5,5]))

function FindNumsAppearOnce(array) {
  if (!array || array.length < 2) {
    return;
  }
  let xor = 0;
  for (let i = 0; i < array.length; i++) {
    xor ^= array[i];
  }
  let bit1Index = findFirstBit1(xor);
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (matchBit1Pos(array[i], bit1Index)) {
      num1 ^= array[i];
    } else {
      num2 ^= array[i];
    }
  }
  return [num1, num2]
}

function findFirstBit1(num) {
  let index = 0;
  while ((num & 1) === 0 && index < 32) {
    num = num >> 1;
    index++;
  }
  return index;
}

function matchBit1Pos(num, index) {
  num = num >> index;
  return (num & 1) === 1;
}
