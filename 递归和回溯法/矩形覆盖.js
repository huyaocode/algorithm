/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2* 1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * 
 * f(n) = f(n - 1) + f(n - 2)
 * f(1) = 1
 * f(2) = 2
 */

function rectCover(number)
{
    let f1 = 1,
    f2 = 2,
    res = 0;
    if(number === 1 ) {
      return 1;
    } else if(number === 2) {
      return  2;
    }
    for (let i = 2; i < number; i++){
      res = f1 + f2;
      f1 = f2;
      f2 = res;
    }
    return res;
}

rectCover(2)