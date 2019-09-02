#include <iostream>
#include <string>
#include "Student.h"

using namespace std;

template <typename T>
void selectionSort(T arr[], int length)
{
  for (int i = 0; i < length - 1; i++)
  {
    int minIndex = i;
    //寻找 [i, n) 的最小值，注意是从 i + 1 开始找
    for (int j = i + 1; j < length; j++)
    {
      if (arr[j] < arr[minIndex])
      {
        minIndex = j;
      }
    }
    //交换
    if (minIndex != i)
    {
      swap(arr[i], arr[minIndex]);
    }
  }
}

int main()
{
  // 整型排序
  int arr[] = {1, 3, 5, 2, 4, 7, 9, 8, 8};
  selectionSort(arr, 9);
  for (int i = 0; i < 9; i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl
       << "-------" << endl;

  // 浮点型排序
  float farr[] = {1.2, 3.6, 5, 2.3, 4.66, 7.3, 0.9, 8.6, 8};
  selectionSort(farr, 9);
  for (int i = 0; i < 9; i++)
  {
    cout << farr[i] << " ";
  }
  cout << endl
       << "-------" << endl;

  // string型排序
  string carr[] = {"D", "A", "C", "B"};
  selectionSort(carr, 4);
  for (int i = 0; i < 4; i++)
  {
    cout << carr[i] << " ";
  }
  cout << endl
       << "-------" << endl;

  //自定义类型排序
  Student d[4] = {
      {"D", 90},
      {"C", 100},
      {"B", 80},
      {"A", 80},
  };
  selectionSort(d, 4);
  for (int i = 0; i < 4; i++)
  {
    cout << d[i];
  }
  return 0;
}


/**
 * 错误写法
 */
void WrongselectionSort(int arr[], int length)
{
  for (int i = 0; i < length - 1; i++)
  {
    //寻找 [i, n) 的最小值
    for (int j = i; j < length; j++)
    {
      if (arr[j] < arr[i])
      {
        int t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
      }
    }
  }
}