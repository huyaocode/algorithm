#include <iostream>

using namespace std;

/**
 * 未经改进的选择排序
 */
template <typename T>
void slowSelectionSort(T arr[], int length)
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
 * 优化后的选择排序
 */
template <typename T>
void selectionSort(T arr[], int length)
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
  selectionSort(arr, 10);

  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }
  return 0;
}
