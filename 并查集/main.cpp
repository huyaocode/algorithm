#include <iostream>
#include "UnionFindTestHelper.h"
using namespace std;

int main()
{
  int n = 1000000;   //元素个数
  int connectTime = 100000; //随机连接次数

  int repeatTime = 5;
  for (int i = 0; i < repeatTime; i++)
  {
    // UnionFindTestHelper::testUF1(n, connectTime);
    // UnionFindTestHelper::testUF2(n, connectTime);
    UnionFindTestHelper::testUF3(n, connectTime);
    UnionFindTestHelper::testUF4(n, connectTime);
    UnionFindTestHelper::testmyUF(n, connectTime);
    cout << endl;
  }

  return 0;
}