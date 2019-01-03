#include <iostream>
#include <cassert>
using namespace std;

namespace myUF2
{

class UnionFind
{

private:
  int* parent;
  int count; // 数据个数

public:
  // 构造函数
  UnionFind(int count)
  {
    parent = new int[count];
    this->count = count;
    // 初始化, 每一个parent[i]指向自己, 表示每一个元素自己自成一个集合
    for (int i = 0; i < count; i++)
    {
      parent[i] = i;
    }
  }

  // 析构函数
  ~UnionFind()
  {
    delete[] parent;
  }

  // 查找过程, 查找元素p所对应的集合编号
  // O(h)复杂度, h为树的高度
  int find(int p)
  {
    assert(p >= 0 && p < count);
    if(p != parent[p]) {
      int root = find(parent[p]);
      parent[p] = root;
      return root;
    } else {
      return p;
    }
  }

  // 查看元素p和元素q是否所属一个集合
  bool isConnected(int p, int q)
  {
    return find(p) == find(q);
  }

  // 合并元素p和元素q所属的集合
  void unionElements(int p, int q)
  {
    int qRoot = find(q);
    parent[q] = qRoot;
    //如果这个节点不是根，并且这个节点没有指向向合并的根节点
    if (parent[p] != p && parent[p] != qRoot)
    {
      unionElements(parent[p], q);
    }
    parent[p] = qRoot;
  }
};
} // namespace UF2