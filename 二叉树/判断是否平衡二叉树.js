/**
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

const tree = require('./treeTest')
console.log(IsBalanced_Solution(tree))


function IsBalanced_Solution(pRoot) {
  if (!pRoot) {
    return true;
  }
  let depth =treeDepth(pRoot, 0) 
  return depth === -1 ? false : true
}

function treeDepth(node, depth) {
  if (!node) {
    return depth;
  }
  let leftDepth = 0,
    rightDepth = 0;

  if (node.left) {
    leftDepth = treeDepth(node.left, depth + 1);
    if (leftDepth === -1) {
      return -1;
    }
  }
  if (node.right) {
    rightDepth = treeDepth(node.right, depth + 1);
    if (rightDepth === -1) {
      return -1;
    }
  }
  if(Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  } else {
    return 1 + Math.max(leftDepth, rightDepth)
  }
}
