/**
 * 荷兰国旗问题
 *
 * 给定一个数组arr，和一个数num，请把小于num的数放在数组的左边，
 * 等于num的数放在数组的中间，大于num的数放在数组的右边。
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition3way(arr, num) {
  // 索引为 i, left = 0, right = arr.length-1
  // [左, mid) < num
  // (max, 右] > num
  // [mid, i) == num
  let left = 0,
    max = arr.length - 1,
    mid = left,
    i = left;
  while (i < max) {
    if (arr[i] === num) {
      i++;
    } else if (arr[i] < num) {
      swap(arr, mid, i);
      mid++;
      i++;
    } else {
      swap(arr, i, max);
      max--;
    }
  }
}

let arr = [1, 4, 7, 8, 5, 2, 3, 6, 9, 5, 4, 0];
partition3way(arr, 5);
console.log(arr);
