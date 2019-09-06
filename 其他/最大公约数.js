function gcd(x, y) {
  if(x === 0) {
    return y;
  } else {
    return gcd(y % x, x);
  }
}
console.log(gcd(1, 4))

console.log(gcd(4, 1))

console.log(gcd(5, 0))

console.log(gcd(0, 5))