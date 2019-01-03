#include <iostream>
#include <ctime>

#include "UnionFind1.h"
#include "UnionFind2.h"
#include "UnionFind3.h"
#include "UnionFind4.h"
#include "myUnionFind.h"
#include "myUnionFind2.h"

using namespace std;

namespace UnionFindTestHelper
{
void testUF1(int n, int connectTime)
{
  srand(time(NULL));
  UF1::UnionFind uf = UF1::UnionFind(n);
  time_t startTime = clock();
  //随机连接connectTime个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "UF1, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}
//测试testUF2
void testUF2(int n, int connectTime)
{
  srand(time(NULL));
  UF2::UnionFind uf = UF2::UnionFind(n);
  time_t startTime = clock();
  //随机连接几个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "UF2, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}

//测试testUF3
void testUF3(int n, int connectTime)
{
  srand(time(NULL));
  UF3::UnionFind uf = UF3::UnionFind(n);
  time_t startTime = clock();
  //随机连接几个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "UF3, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}

//测试testUF4
void testUF4(int n, int connectTime)
{
  srand(time(NULL));
  UF4::UnionFind uf = UF4::UnionFind(n);
  time_t startTime = clock();
  //随机连接几个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "UF4, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}

//测试我自己优化后的并查集
void testmyUF(int n, int connectTime)
{
  srand(time(NULL));
  myUF::UnionFind uf = myUF::UnionFind(n);
  time_t startTime = clock();
  //随机连接connectTime个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % (n / 3);
    int b = rand() % (n / 3);
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "myUF, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}

//测试我自己优化后的并查集
void testmyUF2(int n, int connectTime)
{
  srand(time(NULL));
  myUF2::UnionFind uf = myUF2::UnionFind(n);
  time_t startTime = clock();
  //随机连接connectTime个节点
  for (int i = 0; i < connectTime; i++)
  {
    int a = rand() % (n / 3);
    int b = rand() % (n / 3);
    uf.unionElements(a, b);
  }
  //判断是否在同一集合中
  for (int i = 0; i < n; i++)
  {
    int a = rand() % n;
    int b = rand() % n;
    uf.isConnected(a, b);
  }
  time_t endTime = clock();
  cout << "myUF2, " << connectTime + n << "ops, " << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
}
} // namespace UnionFindTestHelper