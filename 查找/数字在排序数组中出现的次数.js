/**
 * 统计一个数字在排序数组中出现的次数。
 */

console.log(GetNumberOfK([1, 2, 2, 5, 6, 6, 6, 7, 7, 8], 6));

function GetNumberOfK(data, k) {
  if (!data) {
    return 0;
  }
  let leftPos = GetLeftNumberOfK(data, k);
  let rightPos = GetRightNumberOfK(data, k);
  console.log(leftPos, rightPos);
  if (leftPos === -1 && rightPos === -1) {
    return 0;
  } else {
    return rightPos - leftPos + 1;
  }
}

function GetLeftNumberOfK(data, k) {
  let l = 0,
    r = data.length - 1;

  while (l <= r) {
    mid = (l + r) >> 1;
    if (data[mid] === k) {
      if (mid === 0 || (mid > 0 && data[mid - 1] !== k)) {
        return mid;
      } else {
        r = mid;
      }
    } else if (data[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

function GetRightNumberOfK(data, k) {
  let dataLen = data.length;
  let l = 0,
    r = dataLen - 1;
  while (l <= r) {
    mid = (l + r) >> 1;
    console.log('l r', l, r, mid);
    if (data[mid] === k) {
      if (mid === dataLen - 1 || (mid < dataLen - 1 && data[mid + 1] !== k)) {
        return mid;
      } else {
        l = mid + 1;
      }
    } else if (data[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}
