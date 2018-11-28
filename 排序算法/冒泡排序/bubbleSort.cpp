#include <iostream>
using namespace std;

/**
 * 基础版，没有优化
 */
template <typename T>
void basicBubbleSort(T arr[], int length)
{
  for (int i = 1; i < length; i++)
  {
    for (int j = 0; j < length - i; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
}

/**
 * 优化后的冒泡排序
 */
template <typename T>
void bubbleSort(T arr[], int length)
{
  int lastSwapPos; // 记录最后交换的位置
  do
  {
    lastSwapPos = 0;
    for (int i = 1; i < length - lastSwapPos; i++)
    {
      if (arr[i - 1] > arr[i])
      {
        swap(arr[i], arr[i - 1]);
        //记录最后一次的交换位置, 在此之后的元素在下一轮扫描中均不考虑
        lastSwapPos = i;
      }
    }
  } while (lastSwapPos > 0);
}

int main()
{
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8, 6};
  bubbleSort(arr, 10);

  for (int i = 0; i < 10; i++)
  {
    cout << arr[i] << " ";
  }

  return 0;
}
