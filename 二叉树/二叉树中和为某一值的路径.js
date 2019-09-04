/**
 * 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * **路径定义**为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const tree = require('./treeTest');

console.log('res', FindPath(tree, 22));

function FindPath(root, expectNumber) {
  if (!root || typeof expectNumber !== 'number' || expectNumber === NaN) {
    return [];
  }
  let pathStack = [],
    resArr = [];
  findPathDeep(root, expectNumber, pathStack, resArr);
  resArr.sort((a, b) => b.length - a.length);
  return resArr;
}

function isLeaf(node) {
  return node.left == null && node.right == null;
}

function findPathDeep(node, expectNumber, pathStack, resArr) {
  pathStack.push(node.val);
  if (isLeaf(node)) {
    if (expectNumber === node.val) {
      let tempArr = [...pathStack];
      resArr.push(tempArr);
    }
  } else {
    expectNumber -= node.val;
    node.left && findPathDeep(node.left, expectNumber, pathStack, resArr);
    node.right && findPathDeep(node.right, expectNumber, pathStack, resArr);
  }
  pathStack.pop();
}
