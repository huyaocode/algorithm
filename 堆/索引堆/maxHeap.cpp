#include <iostream>
#include <algorithm>
#include <string>
#include <ctime>
#include <cassert>

using namespace std;

/**
 * 索引最大堆
 * 从indexes这个数组中拿到第i元素的索引，然后data[indexes[i]]就可以取到数据
 */
template <typename Item>
class IndexMaxHeap
{

private:
  Item *data;   //元素数组
  int* indexes; //根据索引找元素
  int* reverse; //根据元素找索引
  int count;    //当前数量
  int capacity; //容量
  //向上调整
  void shiftUp(int pos)
  {
    while (pos > 1 && data[ indexes[pos / 2] ] < data[ indexes[pos] ])
    {
      //当需要交换位置的时候实际是交换indexes中的位置
      swap(indexes[pos / 2], indexes[pos]);
      reverse[indexes[k/2]] = k/2;
      reverse[indexes[k]] = k;
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
        if (data[ indexes[j + 1]] > data[ indexes[j] ])
        { //判断右孩子是否比左孩子大
          j++;
        }
      }
      if (data[ indexes[pos] ] < data[ indexes[j] ])
      {
        swap(indexes[pos], indexes[j]);
        reverse[indexes[pos]] = pos;
        reverse[indexes[j]] = j;
        pos = j;
      }
      else
      {
        break;
      }
    }
  }

public:
  /**
   * 构造函数
   * capacity 代表容量
   */
  IndexMaxHeap(int capacity)
  {
    //之所以加一是为了让索引从1开始
    data = new Item[capacity + 1];
    indexes = new int[capacity + 1];
    reverse = new int[capacity + 1];
    for(int i = 0; i <= capacity; i++){
      reverse[i] = 0;
    }
    count = 0;
    this->capacity = capacity;
  }
  //析构函数
  ~IndexMaxHeap()
  {
    delete [] data;
    delete [] indexes;
    delete [] reverse;
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
  //传入的i对用户而言，是从0索引的
  void insert(int i, Item item)
  {
    assert(count + 1 <= capacity);
    assert(i + 1 >= 1 && i + 1 <= capacity);

    i += 1;
    data[i] = item; //数据放在data[]中
    indexes[count + 1] = i; //把新的索引放在索引数组末尾
    reverse[i] = count + 1;
    
    count++;
    shiftUp(count);
  }
  //取出最大值
  Item extractMax()
  {
    assert(count > 0);

    Item ret = data[indexes[1]];

    swap(indexes[1], indexes[count]);
     reverse[indexes[1]] = 1;
    //删除
    reverse[indexes[count]] = 0;
    count--;
    shiftDown(1);

    return ret;
  }
  //取出最大值的索引
  int extractMaxIndex()
  {
    assert(count > 0);

    int ret = indexes[1] - 1;

    swap(indexes[1], indexes[count]);
    reverse[indexes[1]] = 1;
    //删除
    reverse[indexes[count]] = 0;
    count--;
    shiftDown(1);

    return ret;
  }
  //判断索引i是否在堆中
  bool contain(int i ) {
    assert( i + 1 >= 1 && i + 1 <= capacity);
    return reverse[i + 1] != 0;
  }
  //根据索引获取值
  Item getItem(int index) {

    assert(contain(i)); //保证索引堆中真的包含这个元素
    return data[index + 1];
  }
  // 将索引为i代表的元素赋值为 newItem
  void change(int i, Item newItem ){

    assert(contain(i)); //保证索引堆中真的包含这个元素
    i += 1;
    //找到原来是第i个位置的元素，赋值后需要维护堆性质
    data[i] = newItem;
    //找到indexes[j] = 索引i; j表示data[i]在堆中的位置
    //之后shiftUp(j), 再shiftDown(j)
    // for( int j = 1; j <= count; j++) {
    //   if(indexes[j] == i) { 
    //     shiftUp(j);
    //     shiftDown(j);
    //   }
    // }
    int j = reverse[i];
    shiftUp(j);
    shiftDown(j);
  }
};

int main()
{
  //创建最大堆
  IndexMaxHeap<int> maxheap = IndexMaxHeap<int>(100);

  return 0;
}
