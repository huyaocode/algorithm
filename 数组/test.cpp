#include<iostream>
#include<vector>

using namespace std;

int minSubArrayLen(int s, vector<int>& nums) {
 int l = 0, r = -1; // nums[l, r]
    int nums_len = nums.size();
    int sum = 0;
    int min_len = nums_len + 1;

    while(l < nums.size()) {
      if(r+1 < nums_len && sum < s) {
        sum += nums[ ++r ];
      }
      else {
        sum -= nums[ l++ ];
      }
      if(sum >= s) {
        min_len = min(min_len, r - l + 1);
      }
    }
    return (min_len > nums_len) ? 0 : min_len;
}

int main() 
{
  int s = 7;
  vector<int> arr = {2,3,1,2,4,3};
  cout << minSubArrayLen(s, arr) << endl;
  return 0;
}