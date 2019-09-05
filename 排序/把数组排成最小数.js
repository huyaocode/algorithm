/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */

let arr = [3, 32, 321];
let res = PrintMinNumber(arr);
console.log(res);

function PrintMinNumber(numbers) {
  quickSort(numbers);
  return numbers.join('');
}

function isAmoreB(a, b) {
  a = ('' + a).split('');
  b = ('' + b).split('');
  var lastA = a[a.length - 1],
    lastB = b[b.length - 1];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let _a = a[i] || lastA;
    let _b = b[i] || lastB;
    if (_a > _b) {
      return true;
    } else if (_a < _b) {
      return false;
    }
  }
  return false;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  // 数组中间位置不具有特殊性，而数组两端有
  swap(arr, start, (start + end) >> 1);
  let flag = arr[start];
  let l = start + 1,
    r = end;
  while (true) {
    while (l <= end && !isAmoreB(arr[l], flag)) {
      l++;
    }
    while (r >= start && isAmoreB(arr[r], flag)) {
      r--;
    }
    if (l > r) {
      break;
    }
    swap(arr, l, r);
    l++;
    r--;
  }
  swap(arr, start, r);
  return r;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let mid = partition(arr, start, end);
  quickSort(arr, start, mid - 1);
  quickSort(arr, mid + 1, end);
}
