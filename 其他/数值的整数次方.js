/**
  给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
  保证base和exponent不同时为0
 */

function Power(base, exponent) {
  if (base === 0 && exponent < 0) {
    return 0;
  }
  if (exponent < 0) {
    return 1 / powerWithUnsignedExponent(base, -exponent);
  } else {
    return powerWithUnsignedExponent(base, exponent);
  }
}

function powerWithUnsignedExponent(base, exponent) {
  // 特殊条件
  if (exponent === 0) {
    return 1;
  }
  // 递归出口
  if (exponent === 1) {
    return base;
  }
  let res = powerWithUnsignedExponent(base, exponent >> 1);
  res *= res;
  // 奇数
  if ((exponent & 0x1) === 1) {
    res *= base;
  }
  return res;
}


console.log(Power(2, 3))