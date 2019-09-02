#include <iostream>
#include "InsertionSort.h"
using namespace std;

/**
 * 归并数组的两个有序部分
 * 
 * 将arr[left, mid], arr[mid, right]两部分归并
 */
template <typename T>
void __merge(T arr[], int left,int mid, int right){
  
  T tempArr[right - left + 1]; //创建临时空间
  for (int i = left; i <= right; i++) {
    tempArr[i - left] = arr[i];
  }

  // i，j分别为数组两部分的游标
  int i = left, j = mid + 1;
  for(int k = left; k <= right; k++) {

    //考虑越界的情况
    if( i > mid ) {
      arr[k] = tempArr[j - left];
      j ++;
    } 
    else if(j > right) {
      arr[k] = tempArr[i - left];
      i ++;
    }
    //不越界
    else if(tempArr[i - left] < tempArr[j - left]) {
      arr[k] = tempArr[i - left];
      i ++;
    } else {
      arr[k] = tempArr[j - left];
      j ++;
    }
  }
}

/**
 * 递归使用归并排序，队arr[left, right]范围进行排序
 */
template <typename T>
void __mergeSort(T arr[], int left, int right){
  // //使用插入排序进行优化
  // if(right - left <= 15) {
  //   insertionSort(arr, left, right);
  //   return;
  // }
  if (left >= right) {
    return;
  }

  int mid = (left + right) / 2;
  __mergeSort(arr, left, mid);
  __mergeSort(arr, mid + 1, right);
  //将两个数组进行归并
  if(arr[mid] > arr[mid+1]) { //这个判断可以很大程度提升再接近有序时的性能
    __merge(arr, left, mid, right);
  }
}

/**
 * 归并排序
 */
template <typename T>
void mergeSort(T arr[], int length)
{
  __mergeSort(arr, 0, length - 1);
}


int main()
{
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8, 6};
  mergeSort(arr, 10);

  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  return 0;
}