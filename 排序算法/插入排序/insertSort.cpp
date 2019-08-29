#include <iostream>

using namespace std;

/**
 * 未经改进的插入排序
 */
template <typename T>
void slowinsertionSort(T arr[], int length)
{
  for (int i = 1; i < length; i++)
  {
    //依次和前一个对比，直到碰到比自己小的
    for (int j = i; j > 0; j--)
    {
      if (arr[j] < arr[j - 1])
        swap(arr[j], arr[j - 1]);
      else
        break;
    }
  }
}

/**
 * 优化后的插入排序
 */
template <typename T>
void insertionSort(T arr[], int length)
{
  for (int i = 1; i < length; i++)
  {
    T curItem = arr[i];
    //依次和前一个对比，直到碰到比自己小的
    int j; // j保存元素curItem应该插入的位置
    for (j = i; j > 0 && arr[j-1] > curItem; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = curItem;
  }
}



int main()
{
  // 整型排序
  int arr[] = {1,3,6,2,5,7,4,9,8,0};
  insertionSort(arr, 10);

  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  return 0;
}
