/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * （ps：我们约定空树不是任意一个树的子结构）
 */

/* 
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 
*/

function HasSubtree(pRoot1, pRoot2) {
  let res = false;
  if (pRoot1 && pRoot2) {
    if (pRoot1.val === pRoot2.val) {
      res = matchSubTree(pRoot1, pRoot2);
    }
    if (!res) {
      res = HasSubtree(pRoot1.right, pRoot2);
    }
    if (!res) {
      res = HasSubtree(pRoot1.left, pRoot2);
    }
  }
  return res;
}

function matchSubTree(pRoot1, pRoot2) {
  if (pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null) {
    return false;
  }
  if (pRoot1.val !== pRoot2.val) {
    return false;
  }
  return (
    matchSubTree(pRoot1.right, pRoot2.right) &&
    matchSubTree(pRoot1.left, pRoot2.left)
  );
}
