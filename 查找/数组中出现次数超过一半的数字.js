/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 */

console.log(MoreThanHalfNum_Solution_1([1,3,4,5,2,2,2,2,2]))

function MoreThanHalfNum_Solution_1(numbers) {
  let numLen = numbers.length;
  if (!numbers || numLen === 0) {
    return 0;
  }

  let l = 0,
    r = numLen - 1,
    mid = (l + r) >> 1;
  let flag = numbers[mid];
  while (true) {
    while (l < numLen && numbers[l] <= flag) {
      l ++;
    }
    while (r >= 0 && numbers[r] > flag) {
      r --;
    }
    if(l >= r){
      break;
    }
    let temp = numbers[l];
    numbers[l] = numbers[r];
    numbers[r]= temp;
  }
  if(checkMoreThanHalf(numbers, mid)){
    return numbers[mid]
  } else {
    return 0;
  }
}

function checkMoreThanHalf(numbers, index) {
  let item = numbers[index];
  let times = 0;
  for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] === item){
      times ++;
    }
  }
  return times > numbers.length / 2;
}