function reOrderArray(array) {
  let left = 0,
    right = array.length - 1;
  let tempArr = [];
  let i = left;
  j = right;
  while (left < right) {
    if(isEven(array[j])) {
      tempArr[right --] = array[j];
    }
    if(!isEven(array[i])) {
      tempArr[left ++] = array[i];
    }
    i ++;
    j --;
  }
  return tempArr;
}

// 是否为偶数
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(reOrderArray([1,4,7,8,5,2,3,6,9]))