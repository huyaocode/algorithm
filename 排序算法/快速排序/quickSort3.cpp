/**
 * 三路快排
 */
#include <iostream>
#include "SortTestHelper.h"
using namespace std;

/**
 * 对arr[left, right]排序
 * 
 * 将arr[l, r]分为 小于v, 等于v, 大于v 三部分
 * 之后递归对 小于v和大于v的部分进行三路快排
 */
template <typename T>
void __quickSort(T arr[], int left, int right) {
  if(left >= right) {
    return;
  }
  // mid 代表小于v的最右边的那个元素位置加一的位置, 即等于基准值的第一个元素, 使得 arr[left+1, mid) < v                                                  < v
  // rt 代表大于v的最左边的那个元素位置, 使得 arr(rt, right] > v
  // arr[mid, i) == v, 因为i是正在考察的元素，所以为右开区间
  int mid = left + 1, rt = right, i = left + 1;
  swap(arr[left], arr[(left + right) / 2]);
  T v = arr[left];
  // 如果arr[i] < v; 将等于基准值的第一个元素与当前元素交换
  while(i <= rt) {
    if(arr[i] < v) {
      swap(arr[mid], arr[i]);
      mid ++;
      i ++;
    } else if(arr[i] > v) {
      swap(arr[i], arr[rt]);
      rt --;
    } else {  //arr[i] === v
      i ++;
    } 
  }
  swap(arr[left], arr[mid - 1]);
  __quickSort(arr, left, mid - 1);
  __quickSort(arr, rt+1, right);
}

/**
 * 单路快排
 */
template <typename T>
void quickSort(T arr[], int length)
{
  __quickSort(arr, 0, length - 1);
}

int main()
{
  int n = 100000;

  cout << "双路快排3种不同特征的数据下的效率" << endl;
	int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  SortTestHelper::testSort("随机数", quickSort, arr1, n);

	int *arr2 = SortTestHelper::generateNearlyOrderedArray(n, 10);
	SortTestHelper::testSort("近乎有序数组", quickSort, arr2, n);

	int *arr3 = SortTestHelper::generateRandomArray(n, 0, 10);
	SortTestHelper::testSort("大量重复的数", quickSort, arr3, n);

  return 0;
}