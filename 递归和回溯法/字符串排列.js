/**
  输入一个字符串,按字典序打印出该字符串中字符的所有排列。
  例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */
console.log(Permutation('abc'));


function Permutation(str) {
  let resultSet = new Set();
  if (str.length == 0) {
    return [];
  }
  let strArr = str.split('');
  let swapIndex = 0;
  PermutationHelper(resultSet, strArr, swapIndex)
  return [...resultSet].sort()
}

function PermutationHelper(resultSet, strArr, swapIndex){
  if(swapIndex === strArr.length - 1) {
    resultSet.add(strArr.join(''));
  } else {
    for(let i = swapIndex; i < strArr.length; i ++) {
      swap(strArr, swapIndex, i);
      PermutationHelper(resultSet, strArr, swapIndex + 1)
      swap(strArr, swapIndex, i);
    }
  }
}

function swap(arr, i , j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}