/**
输入
  +2147483647
  1a33

输出
  2147483647
  0
 */

console.log(StrToInt('+2147483647'));

// ------牛客网优质解法-------

function StrToInt(str) {
  let n = str.length,
    s = 1;
  let res = 0;
  if (!n) return 0;
  if (str[0] == '-') s = -1;
  for (let i = str[0] == '-' || str[0] == '+' ? 1 : 0; i < n; ++i) {
    if (!('0' <= str[i] && str[i] <= '9')) return 0;
    res = (res << 1) + (res << 3) + (str[i] & 0xf); //res=res*10+str[i]-'0';
  }
  return res * s;
}
// ------我的解法---------
function StrToInt(str) {
  let strLen = str.length;
  if (!str) {
    return 0;
  }
  let res = 0,
    s = 1,
    i = 0;
  if (str[0] === '+' || str[0] === '-') {
    if (str[0] === '-') {
      s = -1;
    }
    i = 1;
  }
  for (; i < strLen; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      res += str[i] - '0';
      res *= 10;
    } else {
      return 0;
    }
  }
  res /= 10;
  return res * s;
}
