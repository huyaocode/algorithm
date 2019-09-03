/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

const tree = require('./treeTest.js');

function Print(root) {
  let queue = [];
  addNode(root, queue, 0);
  return queue;
}

function addNode(root, queue, deep) {
  if (root) {
    if (queue[deep]) {
      queue[deep].push(root.val);
    } else {
      queue[deep] = [root.val];
    }
    addNode(root.left, queue, deep + 1);
    addNode(root.right, queue, deep + 1);
  }
}

console.log(Print(tree));
