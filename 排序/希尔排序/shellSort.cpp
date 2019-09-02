#include <iostream>
#include "SortTestHelper.h"
using namespace std;

/**
 * 希尔排序
 */
template <typename T>
void shellSort(T arr[], int length)
{
  // 计算跨度: 1, 4, 13, 40, 121, 364, 1093...
  int span = 1;
  while (span < length / 3)
  {
    span = span * 3 + 1;
  }
  while (span >= 1)
  {
    for (int i = span; i < length / span; i++)
    {
      // 对 arr[i], arr[i-span], arr[i-2*span], arr[i-3*span]... 使用插入排序
      T e = arr[i];
      int j;
      for (j = i; j >= span && e < arr[j - span]; j -= span)
      {
        arr[j] = arr[j - span];
      }
      arr[j] = e;
    }
    span /= 3;
  }
}

/**
 * 选择排序
 */
template <typename T>
void insertionSort(T arr[], int length)
{
  for (int i = 1; i < length; i++)
  {
    T curItem = arr[i];
    //依次和前一个对比，直到碰到比自己小的
    for (int j = i; j > 0; j--)
    {
      if (arr[j - 1] > curItem)
      {
        arr[j] = arr[j - 1];
      }
      else
      {
        arr[j] = curItem;
        break;
      }
    }
  }
}

int main()
{
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8, 6};
  shellSort(arr, 10);
  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;

  /**
   * 对比希尔排序与插入排序的效率
   */
  int n = 10000;
  int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  int *arr2 = SortTestHelper::copyIntArray(arr1, n);

  SortTestHelper::testSort("希尔排序", shellSort, arr1, n);
  SortTestHelper::testSort("插入排序", insertionSort, arr2, n);
  delete[] arr1;
  delete[] arr2;
  return 0;
}
