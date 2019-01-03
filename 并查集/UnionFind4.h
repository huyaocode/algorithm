#include <iostream>
#include <cassert>
using namespace std;

namespace UF4
{

class UnionFind
{
private:
  int *parent;
  int *rank; //rank[i]表示以i为根的集合所表示的树的层数
  int count;

public:
  UnionFind(int n)
  {
    this->count = n;
    parent = new int[n];
    rank = new int[n];
    for (int i = 0; i < count; i++)
    {
      parent[i] = i;
      rank[i] = 1;
    }
  }
  ~UnionFind()
  {
    delete[] parent;
    delete[] rank;
  }
  //查找所在集合
  int find(int p)
  {
    assert(0 <= p && p < count);
    while (parent[p] != p)
    {
      ////////// 路径压缩 ///////////
      parent[p] = parent[parent[p]];
      //////////////////////////////
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
    if (rank[pRoot] < rank[qRoot])
    {
      parent[pRoot] = qRoot;
    }
    else if (rank[qRoot] < rank[pRoot])
    {
      parent[qRoot] = pRoot;
    }
    else
    { //rank[qRoot] == rank[pRoot]
      parent[pRoot] = qRoot;
      rank[qRoot] += 1;
    }
  }
};

}; // namespace UF4