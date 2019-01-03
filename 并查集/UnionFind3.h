#include <iostream>
#include <cassert>
using namespace std;

namespace UF3
{

class UnionFind
{
private:
  int *parent;
  int *size; //size[i]表示以i为根的集合中元素个数
  int count;

public:
  UnionFind(int n)
  {
    this->count = n;
    parent = new int[n];
    size = new int[n];
    for (int i = 0; i < count; i++)
    {
      parent[i] = i;
      size[i] = 1;
    }
  }
  ~UnionFind()
  {
    delete[] parent;
    delete[] size;
  }
  //查找所在集合
  int find(int p)
  {
    assert(0 <= p && p < count);
    while (parent[p] != p)
    {
      p = parent[p];
    }
    return p;
  }
  //是否为同一集合
  bool isConnected(int p, int q)
  {
    return find(p) == find(q);
  }
  //将p q 归到同一集合中
  void unionElements(int p, int q)
  {
    int pRoot = find(p);
    int qRoot = find(q);
    if (pRoot == qRoot)
    {
      return;
    }
    if (size[pRoot] < size[qRoot])
    {
      parent[pRoot] = qRoot;
      size[qRoot] += size[pRoot];
    }
    else
    {
      parent[qRoot] = pRoot;
      size[pRoot] += size[qRoot];
    }
  }
};

}; // namespace UF3