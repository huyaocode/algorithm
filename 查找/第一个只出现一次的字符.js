/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */

 console.log(FirstNotRepeatingChar('google'))

function FirstNotRepeatingChar(str)
{
  let map = {};
  let strLen = str.length;
  for(let i = 0; i < strLen; i ++){
    let char = str[i]
    if(!map[char]) {
      map[char] = 1;
    } else {
      map[char] ++;
    }
  }
  for(let i = 0; i < strLen; i ++) {
    let char = str[i]
    if(map[char] === 1){
      return i;
    }
  }
  return -1;
}