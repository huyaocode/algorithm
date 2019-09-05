/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。
 * 例如，（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 * 2 3 4 5 6 7 8
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const treeRoot = require('./treeTest')
console.log(KthNode(treeRoot, 1))
console.log(KthNode(treeRoot, 2))
console.log(KthNode(treeRoot, 3))
console.log(KthNode(treeRoot, 4))
console.log(KthNode(treeRoot, 5))
console.log(KthNode(treeRoot, 6))
console.log(KthNode(treeRoot, 7))


function KthNode(pRoot, k) {
  if (!pRoot || k === 0) {
    return null;
  }
  let list = [];
  let value = midTravelTree(pRoot, list, k);
  if(value === -1) {
    return null;
  } else {
    return value;
  }
}

function midTravelTree(pRoot, list, k) {
  if (!pRoot) {
    return -1;
  }
  // pre
  if (pRoot.left) {
    let res = midTravelTree(pRoot.left, list, k);
    if (res !== -1) {
      return res;
    }
  }
  // mid 
  list.push(pRoot.val);
  if (list.length === k) {
    return pRoot.val;
  }
  // next
  if (pRoot.right) {
    let res = midTravelTree(pRoot.right, list, k);
    if (res !== -1) {
      return res;
    }
  }
  return -1;
}
