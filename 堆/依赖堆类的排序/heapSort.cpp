#include <iostream>
#include <algorithm>
#include "Heap.h"
#include "SortTestHelper.h"

using namespace std;
/**
 * 基本堆排序
 */
template <typename T>
void heapSortBasic(T arr[], int n)
{

  MaxHeap<T> maxheap = MaxHeap<T>(n);
  for (int i = 0; i < n; i++)
  {
    maxheap.insert(arr[i]);
  }
  for (int i = n - 1; i >= 0; i--)
  {
    arr[i] = maxheap.extractMax();
  }
}


/**
 * Heapify创建堆的堆排序
 */
template <typename T>
void heapSort(T arr[], int n)
{
  MaxHeap<T> maxheap = MaxHeap<T>(arr, n);
  for (int i = n - 1; i >= 0; i--)
  {
    arr[i] = maxheap.extractMax();
  }
}



int main()
{
  int n = 100000;
  cout << "随机数" << endl;
  int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
  int *copyed_arr1 = SortTestHelper::copyIntArray(arr1,n);
  SortTestHelper::testSort("heapSortBasic", heapSortBasic, copyed_arr1, n);
  SortTestHelper::testSort("heapSort     ", heapSort, arr1, n);

  cout << "近乎有序数" << endl;
  int *arr2 = SortTestHelper::generateNearlyOrderedArray(n, 10);
  int *copyed_arr2 = SortTestHelper::copyIntArray(arr2,n);
  SortTestHelper::testSort("heapSortBasic", heapSortBasic, copyed_arr2, n);
  SortTestHelper::testSort("heapSort     ", heapSort, arr2, n);

  cout << "大量重复数" << endl;
  int *arr3 = SortTestHelper::generateRandomArray(n, 0, 10);
  int *copyed_arr3 = SortTestHelper::copyIntArray(arr3,n);
  SortTestHelper::testSort("heapSortBasic", heapSortBasic, copyed_arr3, n);
  SortTestHelper::testSort("heapSort     ", heapSort, arr3, n);
  return 0;
}