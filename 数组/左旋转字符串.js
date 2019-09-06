/**
 * 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
 * 例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。
 */

console.log(LeftRotateString('abcXYZdef'))
function LeftRotateString(str, n)
{
  if(str==null||str.length==0){
    return "";
}
    let strArr = str.split('');
    let rePosArr = strArr.splice(0, n);
    strArr.push(...rePosArr);
    return strArr.join('')
}