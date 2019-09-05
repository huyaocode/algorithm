function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 4 5 7 8 10 11 12 13

let root = new TreeNode(8);
// ---
root.left = new TreeNode(6);
root.right = new TreeNode(10);
// ---
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(9);
root.right.right = new TreeNode(11);

// ----
// root.right.right.left = new TreeNode(9);

// ----
// root.left.right.right.right = new TreeNode(6);

module.exports = root;
