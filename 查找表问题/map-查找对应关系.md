# map 相关题目

### 350. 查找两个数组中共有的元素（关注共有的数量）
```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

```cpp
vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
    
    map<int, int> record;
    for(int i = 0; i < nums1.size(); i ++) {
        record[ nums1[i] ] ++;
    }
    
    vector<int> resultVector;
    for(int i = 0; i < nums2.size(); i ++) {
        if(record[ nums2[i] ] > 0) {
            resultVector.push_back( nums2[i] );
            record[ nums2[i] ] --;
        }
    }
    
    return resultVector;
}
```


### 242. Valid Anagram
对比两个字符串是否只是位置交换而其他如长度、重复个数都没有改变
```cpp
bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    unordered_map<char, int> resolve;
    for(int i = 0; i < s.size(); i++) {
        resolve[ s[i] ] ++;
    }
    for(int i = 0; i < t.size(); i++) {
        if(resolve[ t[i] ] > 0){
            resolve[ t[i] ] --;
        } else{
            return false;
        }
    }
    return true;
}
```


### 1. Two Sum
将所有的元素放入Map，之后对于每一个元素a，查找 target - a是否存在。
```cpp
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> hash;
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
        int numberToFind = target - nums[i];

        if (hash.find(numberToFind) != hash.end()) {
            result.push_back(hash[numberToFind]);
            result.push_back(i);			
            return result;
        }

        hash[nums[i]] = i;
    }
    return result;
}
```
