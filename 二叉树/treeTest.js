function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 

let root = new TreeNode(1)
// ---
root.left = new TreeNode(2)
root.right = new TreeNode(3)
// ---
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

// ----
root.left.right.right = new TreeNode(8)

module.exports = root;
