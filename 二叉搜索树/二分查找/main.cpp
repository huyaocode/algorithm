#include <iostream>
using namespace std;

template<typename T>
int binarySearch(T arr[], int len, T target) {

  int left = 0, right = len - 1;
  //循环判定条件: left <= right
  while(left <= right) {
    int mid = left + (right - left) / 2;
    if(arr[mid] == target) {
      break;
    }
    // 在arr[left, mid-1]中找, 因为mid已经被排除掉了
    else if(target < arr[mid]) {
      right = mid - 1;
    }
    // 在arr[mid+1, right]中找
    else {
      left = mid + 1;
    }
  }
  return -1;
}

int main()
{
  int arr [] = {1,2,3,4,5,6,7,8,9,10};
  int pos = binarySearch(arr, 10, 3);
  cout << pos << " " << arr[pos] << endl;
  return 0;
}