//////////////////////////
/*  自底向上的归并排序   */
//////////////////////////
#include <iostream>
// #include "InsertionSort.h"
using namespace std;


/**
 * 归并数组的两个有序部分
 * 
 * 将arr[left, mid], arr[mid, right]两部分归并
 */
template <typename T>
void __merge(T arr[], int left, int mid, int right){
  
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
 * 自底向上的归并排序
 */
template <typename T>
void mergeSortBU(T arr[], int length)
{
  //第一层循环，每次merge的元素个数size，每一轮size翻倍
  for(int size = 1; size <= length; size += size) {
    //每一轮归并过程中的起始位置
    for(int i = 0; i + size < length; i += size*2) {
      //队arr[i, i + size-1]和arr[i + size, i + size*2 - 1]进行归并
      __merge(arr, i, i + size - 1, min(i + size*2 - 1, length - 1));
    }
  }
}


int main()
{
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8, 6};
  // cout <<  "---------- ";
  mergeSortBU(arr, 10);
   
  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  return 0;
}



