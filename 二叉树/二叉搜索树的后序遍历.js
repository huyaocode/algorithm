/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */
console.log(VerifySquenceOfBST([4, 8, 6, 12, 16, 14, 10]));

function VerifySquenceOfBST(sequence) {
  if (!sequence || sequence.length === 0) {
    return false;
  }
  return judge(sequence)
}


function judge(sequence) {
  if (sequence.length === 0) {
    return true;
  }
  let i = 0,
    leftLen = 0;
  let root = sequence[sequence.length - 1];
  // 左子树，都比root小
  for (; i < sequence.length; i++) {
    if (sequence[i] < root) {
      i++;
    } else {
      break;
    }
  }
  leftLen = i - 1;
  // 右子树，都比root大
  for (; i < sequence.length - 1; i++) {
    if (sequence[i] < root) {
      return false;
    }
  }

  return (
    judge(sequence.slice(0, leftLen)) &&
    judge(sequence.slice(leftLen - 1, sequence.length - 1))
  );
}