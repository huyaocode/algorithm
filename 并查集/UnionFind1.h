#include <iostream>
#include <cassert>
using namespace std;

namespace UF1
{

class UnionFind
{
private:
  int *id;
  int count;

public:
  UnionFind(int n)
  {
    this->count = n;
    id = new int[n];
    for (int i = 0; i < count; i++)
    {
      id[i] = i;
    }
  }
  ~UnionFind()
  {
    delete[] id;
  }
  //判断p所在的集合
  int find(int p)
  {
    assert(0 <= p && p < count);
    return id[p];
  }
  //判断是否连接
  bool isConnected(int p, int q)
  {
    return find(p) == find(q);
  }
  // 将两个元素归到同一个集合中
  void unionElements(int p, int q)
  {
    int pID = find(p);
    int qID = find(q);
    if (pID == qID)
    {
      return;
    }
    for (int i = 0; i < count; i++)
    {
      if (id[i] == pID)
      {
        id[i] = qID;
      }
    }
  }
};
};