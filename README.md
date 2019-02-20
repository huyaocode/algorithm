# 算法笔记

### 当我们在面试时碰到算法问题，我们应该回答什么？
把面试官当作一个朋友，共同在开发中碰到了这样一个问题，一起探讨，一起思考。
展示出你的逻辑，思考的过程，优化的方法，以及所处理的问题是否在实际中有用。思维最重要！

就算做不出来，也要展示出往那个方向上努力可能得到正确的解。

解决问题的思路：面对一个问题时，不要简单的，极端的用对或者错这样的态度来看待这个问题，而要能够思考的更加全面一些


### 注意题目中的条件
有一些题目中的条件本质是暗示：
 - 设计一个O(NlogN)的算法
   - 八成离不开分治法
   - O(NlogN)是否是一次排序的事件复杂度
 - 无需考虑额外的空间
   - 那么即可以开辟空间来达到空间换时间的效果
 - 数据规模大概是10000
   - 设计一个O(n^2)的算法也可以算作正解


### 当没有思路的时候
 - 使用几个简单的测试用例，试验一下
 - 不要忽视暴力解法。暴力解法通常是思考的起点 
 - 想一遍常见的算法思路
 - 遍历常见的数据结构
 - 空间换时间（例如hash表）
 - 数据预处理（排序）
 - 在瓶颈处找答案： O(NlogN) + `O(N^2)` 


### 实际编写代码时的问题
 - 对极端条件的判断
   - 数组为空、字符串长度为0、数量为0、指针null
 - 变量名的语义化
 - 模块化、复用性


### 怎样写出一个正确的算法
 - 明确变量的含义
   - 每一个变量都有固定的定义
 - 循环不变量
   - 维护循环中变量的含义，仔细比对边界
 - 小数据量调试
   - 空集、无正确答案集；有正确答案查看每轮的改变
 - 大数据量测试



### 时间复杂度
 O 即时间复杂度，在计算时需要注意两点
 - 取时间复杂度更高的作为结果
   - O(nlogn+ n ) = O(nlogn)
 - 虽然会忽略常数系数，但要记得有这个东西
 - 不相关的数据不可以合并
   - 例如算法中既涉及到数组长度，又指出了字符串长度，那么这个两个数据量不能直接用一个n就表示完了，得n+s


### 算法的事件复杂度与用例相关
 - 快速排序
 - 平均： O(nlogn)
 - 最差： O(n^2)
 - 最好： O(nlogn)


### 空间复杂度
空间复杂度即多开的一个辅助数组，但要注意，递归调用是有空间代价的。

如果递归层数等于n, 并且每层使用了一个变量，那么这个空间复杂度都是n,而不是1