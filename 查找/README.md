# 查找问题

 - 查找有无
   - 元素'a'是否存在？
   - set 集合

 - 查找对应关系
   - 元素'a'出现了几次？
   - map 字典

常见操作
 - insert
 - find
 - erase
 - change(map)

在C++中，set和map是使用平衡二叉树来实现的，所以增删查改的时间复杂度为 O(nlogn)，但是很多情况下其实我们只需要用到很基本的操作，用 `unorderd_map` 和 `unorderd_set`就足够了， unorderd_map底层是用哈希表来实现的。哈希表的增删查改事件复杂度为O(1)，会快很多。