/**
 * 给定一个数组arr，和一个数num，
 * 请把小于等于num的数放在数组的左边，大于num的数放在数组的右边。
 * 要求额外空间复杂度O(1)，时间复杂度O(N)
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [1, 4, 7, 8, 5, 2, 3, 6, 9, 5, 4, 0];

function partition(arr, num) {
  let i = 0,
    j = arr.length - 1;
  while (true) {
    while (arr[i] <= num && i <= j) {
      i++;
    }
    while (arr[j] > num && i <= j) {
      j--;
    }
    if (i > j) {
      break;
    } else {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
}

partition(arr, 5);

console.log(arr);
