#include <iostream>
#include <algorithm>
#include <string>
#include <ctime>
#include <cassert>

using namespace std;

/**
 * 最大堆
 */
template <typename Item>
class MaxHeap
{

private:
  Item *data;   //元素数组
  int count;    //当前数量
  int capacity; //容量
  //向上调整
  void shiftUp(int pos)
  {
    while (pos > 1 && data[pos / 2] < data[pos])
    {
      swap(data[pos / 2], data[pos]);
      pos /= 2;
    }
  }
  void shiftDown(int pos)
  {
    // 2 * pos <= count 表示该节点有左孩子
    while (2 * pos <= count)
    {
      int j = 2 * pos; // j代表此轮循环中，data[pos]和data[j]交换位置
      if (j + 1 <= count)
      { //判断是否有右孩子
        if (data[j + 1] > data[j])
        { //判断右孩子是否比左孩子大
          j++;
        }
      }
      if (data[pos] < data[j])
      {
        swap(data[pos], data[j]);
        pos = j;
      }
      else {
        break;
      }
    }
  }

public:
  /**
   * 构造函数
   * capacity 代表容量
   */
  MaxHeap(int capacity)
  {
    //之所以加一是为了让索引从1开始
    data = new Item[capacity + 1];
    count = 0;
    this->capacity = capacity;
  }
  /**
   * 使用Heapify操作在堆构造时就将数组变成一个最大堆
   */
  MaxHeap(Item arr[], int n)
  {
    data = new Item[n + 1];
    capacity = n;
    //赋值
    for (int i = 0; i < n; i++) {
      data[i+1] = arr[i];
    }
    count = n;
    //Heapify
    for(int i = count / 2; i >= 1; i--) {
      shiftDown(i);
    }
  }

  //析构函数
  ~MaxHeap()
  {
    delete[] data;
  }
  //返回堆当前个数
  int size()
  {
    return count;
  }
  //堆是否位空
  bool isEmpty()
  {
    return count == 0;
  }
  //插入新值
  void insert(Item item)
  {
    assert(count + 1 <= capacity);
    data[count + 1] = item;
    count++;
    shiftUp(count);
  }
  //取出最大值
  Item extractMax()
  {
    assert(count > 0);
    Item ret = data[1];
    swap(data[1], data[count]);
    count--;
    shiftDown(1);
    return ret;
  }
};