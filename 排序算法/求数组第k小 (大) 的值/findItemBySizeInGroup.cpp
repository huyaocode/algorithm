#include <iostream>
#include <cassert>
#include "TestHelper.h"

using namespace std;

template <typename T>
int __partition(T arr[], int l, int r)
{
  swap(arr[l], arr[(l + r) / 2]);
  int i = l + 1, j = r;
  T v = arr[l];
  while(true){
    while(i <= r && arr[i] < v){
      i ++;
    }
    while(j >= l && arr[j] > v){
      j --;
    }
    if(i > j){
      break;
    }
    swap(arr[i], arr[j]);
    i++;
    j--;
  }
  swap(arr[l], arr[j]);
  return j;
}
// 求出arr[l...r]范围里第k小的数
template <typename T>
int __selection(T arr[], int l, int r, int k)
{
  if(l == r) {
    return arr[l];
  }
  int mid = __partition(arr, l, r);
  if(mid == k){
    return arr[mid];
  }
  else if(k < mid) {
    // 如果 k < p, 只需要在arr[l...p-1]中找第k小元素即可
    return __selection(arr, l, mid - 1, k);
  }
  else {
    // 如果 k > p, 则需要在arr[p+1...r]中找第k-p-1小元素
    return __selection(arr, mid + 1, r, k);
  }
}

// 寻找arr数组中第k小的元素
// 注意: 在我们的算法中, k是从0开始索引的, 即最小的元素是第0小元素, 以此类推
// 如果希望我们的算法中k的语意是从1开始的, 只需要在整个逻辑开始进行k--即可, 可以参考selection2
template <typename T>
int selection(T arr[], int n, int k)
{
  assert(k >= 0 && k < n);
  return __selection(arr, 0, n - 1, k);
}

int main()
{
  // 生成一个大小为n, 包含0...n-1这n个元素的随机数组arr
  int n = 10000;
  int *arr = TestHelper::generateOrderedArray(n);
  TestHelper::shuffleArray(arr, n);
  
  // 验证selection算法, 对arr数组求第i小元素, 应该为i
  for (int i = 0; i < n; i++)
  {
    assert(selection(arr, n, i) == i);
    cout << "test " << i << " complete." << endl;
  }
  cout << "Test selection completed." << endl;
  delete[] arr;
  return 0;
}