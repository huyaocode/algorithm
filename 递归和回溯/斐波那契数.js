/**
 * 现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 * n<=39
 * 自底向上解开递归
 * f(0) = 0
 * f(1) = 1
 * f(n) = f(n-1) + f(n-2)
 */
function Fibonacci(n)
{
    let f1 = 0, f2 = 1;
    if(n === 0){
      return f1;
    } else if(n === 1){
      return f2;
    }
    let res;
    for (let i = 1; i < n; i++) {
      res = f1 + f2;
      f1 = f2;
      f2 = res;
    }
    return res;
}

Fibonacci(3)