/**
 * 验证我的优化是正确的
 */

#include <iostream>
#include <cassert>
#include "UnionFind4.h"
#include "myUnionFind.h"

using namespace std;

int main()
{
  int n = 1000;
  int connectTime = 2000;   //集合中随机两两相连的次数

  UF4::UnionFind uf4 = UF4::UnionFind(n); //并查集(状态压缩)
  myUF::UnionFind uf = myUF::UnionFind(n);

  //随机连接几个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf4.unionElements(a, b);
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    bool correct = uf4.isConnected(a, b);
    bool myAns = uf.isConnected(a, b);
    assert(correct == myAns);
  }
  return 0;
}
