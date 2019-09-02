using namespace std;

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