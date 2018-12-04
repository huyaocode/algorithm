/**
 * 单路快排
 */
#include <iostream>
using namespace std;

/**
 * 将arr[left, right] 分为3部分
 * 前一部分都小于arr[mid] ,后一部分都大于arr[mid]
 * 返回 mid, 
 */
template <typename T>
int __partition(T arr[], int left, int right) {
  int v = arr[left];
  // arr[l+1, mid] < v ; arr[mid+1, i] > v
  int mid = left;
  for(int i = left + 1; i <= right; i++) {
    if(arr[i] < v) {
      swap(arr[mid+1], arr[i]);
      mid++;
    }
  }
  swap(arr[left],arr[mid]);
  return mid;
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
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8, 6};
  quickSort(arr, 10);

  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  return 0;
}