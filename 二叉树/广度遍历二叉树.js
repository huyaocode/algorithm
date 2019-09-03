/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

const tree = require('./treeTest.js')


function PrintFromTopToBottom(root)
{
    let queue = [];
    let res = []
    root && queue.push(root)
    while(queue.length > 0) {
      let node = queue.shift();
      res.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    return res;
}

console.log(PrintFromTopToBottom(tree))