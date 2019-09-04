/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
 */

// console.log(GetLeastNumbers_Solution_Partition([4, 5, 1, 6, 2, 7, 3, 8], 4));
console.log(GetLeastNumbers_Solution_Heap([1, 4, 7, 8, 5, 2, 3, 6, 9, 5, 4, 0], 4));


function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let num = arr[start];
  let i = start + 1,
    j = end;
  while (true) {
    while (arr[j] > num && j >= start) {
      j--;
    }
    while (arr[i] < num && i <= end) {
      i++;
    }
    if (i > j) {
      break;
    } else {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  swap(arr, start, j);
  return j;
}

function GetLeastNumbers_Solution_Partition(arr, k) {
  let arrLen = arr.length;
  if (!arr || arrLen === 0 || k > arrLen) {
    return arr;
  }
  if (arrLen === k) {
    return arr;
  }

  let start = 0,
    end = arrLen - 1;
  let index = partition(arr, start, end);
  while (index !== k - 1) {
    if (index > k - 1) {
      end = index - 1;
      index = partition(arr, start, end);
    } else {
      start = index + 1;
      index = partition(arr, start, end);
    }
  }
  return arr.slice(0, k).sort();
}

//--------------堆排序------------------

function shiftDown(arr, pos) {

  let arrLen = arr.length;
  while (pos * 2 + 1 < arrLen) {
    let child = pos * 2 + 1;
    if (child + 1 < arrLen && arr[child + 1] < arr[child]) {
      child += 1;
    }
    if (arr[pos] > arr[child]) {
      swap(arr, pos, child);
      pos = child;
    } else {
      break;
    }
  }
}

function build_min_heap(arr) {
  for (let i = (arr.length >> 1); i >= 0; i --) {
    shiftDown(arr, i);
  }
}

function GetLeastNumbers_Solution_Heap(arr, k) {
  if(!arr || k < 0  ){
    return null
  }
  if(k >= arr.length){
    return arr;
  }
  
  build_min_heap(arr);
  let res = []
  for(let i = 0; i < k; i ++){
    res.push(arr[0]);
    swap(arr, 0, arr.length - 1);
    arr.pop();
    shiftDown(arr, 0)
  }
  return res;
}
