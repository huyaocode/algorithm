/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
 - 必须在原数组上操作，不能拷贝额外的数组。
 - 尽量减少操作次数。

解法：
直接将不为 0 的数使用一个索引依次填到数组的前n位，后面直接赋值0
 */

function moveZeroes(nums) {
  let cur = 0, index = 0;
  while (index < nums.length) {
    if(nums[index] !== 0) {
      nums[cur++] = nums[index++];
    } else {
      index ++;
    }
  }
  while (cur < nums.length) {
    nums[cur++] = 0;
  }
  return nums;
}

console.log(moveZeroes([0,1,0,3,12]))

console.log(moveZeroes([5,1,0,3,12]))

console.log(moveZeroes([5,1,0,3,0]))

console.log(moveZeroes([0,0,0,0,0]))