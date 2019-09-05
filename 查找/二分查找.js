function binarySearch(arr, k, start = 0, end = arr.length - 1) {
  if (!arr || arr.length === 0) return null;
  let l = start,
    r = end;
  while (l <= r) {
    // 只要有区间就可以查找
    let mid = (l + r) >> 1; // (l + r) / 2 再取整
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      // [l, mid, k, r]
      l = mid + 1;
    } else {
      // [l, k, mid, r]
      r = mid - 1;
    }
  }
  // -1 代表未找到
  return -1;
}
