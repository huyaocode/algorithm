/**
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  if (pRoot == null) {
    return true;
  }
  return isSubTreeSymmetrical(pRoot.left, pRoot.right)
}
function isSubTreeSymmetrical(left, right) {
  if(left === null && right === null) {
    return true;
  }
  // 注意空指针
  if(left === null || right === null) {
    return false;
  }
  if(left.val !== right.val) {
    return false;
  }
  return isSubTreeSymmetrical(left.left, right.right) && isSubTreeSymmetrical(left.right, right.left)
}