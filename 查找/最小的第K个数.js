let arr = [5, 4, 6, 7, 2, 3, 1, 8, 9, 10];

// console.log('adsf')
console.log('ans', findKthLargest(arr, 0))

// console.log('ans', findKthLargest(arr, 1))


function __partition(arr, left, right) {
  let flagItem = arr[left];
  let i = left + 1,
    j = right;
  while (true) {
    while (i <= right && arr[i] <= flagItem) {
      i++;
    }
    while (j >= left+1 && arr[j] >= flagItem) {
      j--;
    }
    if(i > j) {
        break;
    }
    swap(arr, i, j);
    i ++;
    j --;
  }
  swap(arr, left, j);
  return j;
}

function findKthLargest(arr, target, left = 0, right = arr.length - 1) {
    if(target >= arr.length || target < 0) {
        return null;
    }
  let mid = __partition(arr, left, right);
  if (mid === target) {
    return arr[mid];
  } else if (mid > target) {
    return findKthLargest(arr, target, left, mid - 1);
  } else {
    return findKthLargest(arr, target, mid + 1, right);
  }
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  