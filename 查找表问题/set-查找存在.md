# 查找元素是否存在

### 349. 查找两个数组中都出现过的元素（只关注存在）

set的基本使用方式

```cpp
vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    
  set<int> record;
  for(int i = 0; i < nums1.size(); i++) {
    record.insert(nums1[i]);
  }
  
  set<int> resultSet;
  for(int i = 0; i < nums2.size(); i ++){
    //判断 set中是否存在某值使用这个方法 record.find(some) != record.end
    if(record.find(nums2[i]) != record.end() ) {   
      resultSet.insert(nums2[i]);
    }
  }
  
  vector<int> resultVector;
  // 遍历 set 方法，一般都是使用迭代器
  for(set<int>::iterator iter = resultSet.begin(); iter != resultSet.end(); iter ++){
    resultVector.push_back( *iter );
  }
  
  return resultVector;
}
```

简化写法
```cpp
  // 使用 vector 创建一个set 可以这样化简
  set<int> record( nums1.begin(), nums2.end() );

  // 使用set 创建一个 vector 可以这样化简
  vector<int>(someSet.begin(), someSet.end())
}
```


### 202. Happy Number
```
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

```cpp
bool isHappy(int n) {
  unordered_set<int> resolve;
  while(true) {
    int sum = 0;
    while(n >= 10){
      sum += (n % 10) * (n % 10);
      n /= 10;
    }
    sum += n * n;
    if(resolve.find(sum) == resolve.end()) {
      resolve.insert(sum);
      n = sum;
    } else {
      return false;
    }
    if(sum == 1){
      return true;
    }
  }
}
```