function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shiftDown(arr, pos, len) {
  while (pos * 2 + 1 < len) {
    let child = pos * 2 + 1; // 左孩子，加一重要！
    if (child + 1 < len && arr[child + 1] > arr[child]) {
      child = child + 1; // 右孩子
    }
    if (arr[child] > arr[pos]) {
      swap(arr, child, pos);
      pos = child;
    } else {
      break;  // 重要！
    }
  }
}

function heapSort(arr) {
  for (let i = ((arr.length - 1) / 2) >> 0; i >= 0; i--) {
    shiftDown(arr, i, arr.length);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    shiftDown(arr, 0, i);
  }
}

let arr = [1, 4, 7, 8, 5, 2, 3, 6, 9, 5, 4, 0];

heapSort(arr);

console.log(arr);
