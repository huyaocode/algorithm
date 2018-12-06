/**
 * 单路快排
 */
#include <iostream>
#include "SortTestHelper.h"
using namespace std;

/**
 * 将arr[left, right] 分为3部分
 * 前一部分都小于arr[j] ,后一部分都大于arr[j]
 * 返回 j, 
 */
template <typename T>
int __partition(T arr[], int left, int right) {

  //优化，使用数组中间元素作为基准元素
  swap(arr[left], arr[(left + right) / 2]);  
  int standard = arr[left];
  // arr[l+1, j] < standard ; arr[j+1, i] > standard
  int j = left;
  for(int i = left + 1; i <= right; i++) {
    if(arr[i] < standard) {
      swap(arr[j + 1], arr[i]);
      j++;
    }
  }
  swap(arr[left], arr[j]);
  return j;
}

//对arr[left, right]排序
template <typename T>
void __quickSort(T arr[], int left, int right) {
  if(left >= right) {
    return;
  }
  int mid = __partition(arr, left, right);
  __quickSort(arr, left, mid - 1);
  __quickSort(arr, mid + 1, right);
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
  cout << "随机数" << endl;
	int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  SortTestHelper::testSort("快速排序", quickSort, arr1, n);

	cout << "近乎有序数组" << endl;
	int *arr2 = SortTestHelper::generateNearlyOrderedArray(n, 10);
	SortTestHelper::testSort("快速排序", quickSort, arr1, n);

  return 0;
}