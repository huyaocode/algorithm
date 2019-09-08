/**
 * 作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。
 * 为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），
 * 在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。手串上的颜色一共有c种。
 * 现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。
 * 请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。
 */
#include <iostream>
using namespace std;

int circle[10000][51];

int colorMap[50] = {0};

int main()
{
  int arrLen = 5, m = 2, colorNum = 3, notOk = 0;
  cin >> arrLen >> m >> colorNum;
  int len;
  for (int i = 0; i < arrLen; i++)
  {
    cin >> len;
    circle[i][0] = len;
    for (int j = 1; j <= len; j++)
    {
      cin >> circle[i][j];
    }
  }

  // 吧最底部的那一串加入
  for (int j = 1; j <= circle[arrLen - 1][0] + m; j++)
    {
      int color = circle[arrLen - 1][j];
      colorMap[color] ++;
    }

  for (int i = 0; i < arrLen; i++)
  {
    // 滑动窗口中添加
    bool isOk = true;
    for (int j = 1; j <= circle[i][0]; j++)
    {
      int color = circle[i][j];
      colorMap[color] ++;
      if(isOk && colorMap[color] >= 2) {
        isOk = false;
      }
    }
    if(!isOk) {
      notOk ++;
    }
    // 滑动窗口中删除
    int pre = (i - m - 1 < 0) ? arrLen + (i - m + 1) : i - m - 1;
    for (int j = 1; j <= circle[pre][0]; j++)
    {
      int color = circle[pre][j];
      color && colorMap[color] --;
    }
  }
  cout << notOk << endl;
  return 0;
}