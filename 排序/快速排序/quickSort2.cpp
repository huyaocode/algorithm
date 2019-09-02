/**
 * 双路快排
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
int __partition2(T arr[], int left, int right) {

  //优化，使用数组中间元素作为基准元素
  swap(arr[left], arr[(left + right) / 2]);  
  int standard = arr[left];

  // arr[left+1, i) <= standard ; arr(j, right] >= standard
  int i = left + 1, j = right;
  while(true) {
    while( i <= right && arr[i] < standard) {
      i ++;
    }
    while(j >= left+1 && arr[j] > standard) {
      j--;
    }
    if( i > j ) {
      break;
    }
    swap(arr[i], arr[j]);
    i++;
    j--;
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
  int mid = __partition2(arr, left, right);
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

  cout << "双路快排3种不同特征的数据下的效率" << endl;
	int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  SortTestHelper::testSort("随机数", quickSort, arr1, n);

	int *arr2 = SortTestHelper::generateNearlyOrderedArray(n, 10);
	SortTestHelper::testSort("近乎有序数组", quickSort, arr2, n);

	int *arr3 = SortTestHelper::generateRandomArray(n, 0, 10);
	SortTestHelper::testSort("大量重复的数", quickSort, arr3, n);

  return 0;
}