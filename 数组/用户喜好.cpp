
#include <iostream>
using namespace std;
int userLove[300001];
int main()
{
  int userNum;
  cin >> userNum;
  int userLove[300001];
  int love;
  for(int i = 1;i <= userNum; i ++) {
    cin >> love;
    userLove[i] = love;
  }

  int q;
  cin >> q;
  int start, end, value;
  while(q--) {
    cin >> start >> end >> value;
    int sum = 0;
    while(start <= end) {
      userLove[start++] == value && sum ++;
    }
    cout << sum << endl;
  }
}
