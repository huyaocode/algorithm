function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 

let root = new TreeNode(10)
// ---
root.left = new TreeNode(5)
root.right = new TreeNode(12)
// ---
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(7)

// root.right.left = new TreeNode(6)
// root.right.right = new TreeNode(7)

// // ----
// root.left.right.right = new TreeNode(2)

module.exports = root;
