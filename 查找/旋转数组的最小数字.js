/**
  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
  输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
  例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

// test
minNumberInRotateArray([3, 4, 5, 1, 2]);
minNumberInRotateArray([1, 1, 1, 1, 0, 1, 1]);

function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }

  let left = 0,
    right = rotateArray.length - 1,
    mid = (left + right) >> 1;
  while (rotateArray[left] >= rotateArray[right]) {
    if (
      rotateArray[left] === rotateArray[right] &&
      rotateArray[left] === rotateArray[mid]
    ) {
      for (let i = left; i <= right; i++) {
        if (rotateArray[i] < rotateArray[left]) {
          return rotateArray[i];
        }
      }
      return 1;
    }
    if (right - left === 1) {
      mid = right;
      break;
    }
    mid = (left + right) >> 1;
    if (rotateArray[mid] > rotateArray[left]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return rotateArray[mid];
}
