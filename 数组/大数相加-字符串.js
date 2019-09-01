function add(a, b) {
  a = typeof a === 'number' ? '' + a : a;
  b = typeof b === 'number' ? '' + b : b;
  let num1 = a
      .split('')
      .reverse()
      .map(i => parseInt(i)),
    num2 = b
      .split('')
      .reverse()
      .map(i => parseInt(i));
  let maxLen = Math.max(num1.length, num2.length);
  for (let i = 0; i < maxLen; i++) {
    let num1_i = num1[i] || 0,
      num2_i = num2[i] || 0;

    let sum = num1_i + num2_i;
    if (sum >= 10) {
      num1[i] = sum % 10;
      num1[i + 1] = num1[i + 1] ? num1[i + 1] + 1 : 1;
    } else {
      num1[i] = sum;
    }
  }
  return num1.reverse().join('');
}

console.log(add('1234', 2345))