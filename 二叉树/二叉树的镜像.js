/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
    	    8       
    	   /  \     
    	  6   10    
    	 / \  / \   
      5  7 9  11  
         	8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (root) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
  }
  return root;
}
