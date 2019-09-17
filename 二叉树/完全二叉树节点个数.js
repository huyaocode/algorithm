/**
 * 判断完全二叉树节点个数。
 * 要求事件复杂度小于 O(n)
 *
 * 解题：
 * 满二叉树节点个数：2^h-1（h为二叉树的高度）
 * 遍历右子树，当右子树的高度等于h，那么这颗二叉树的左二叉树一定是满二叉树
 * 此时左子树节点数直接通过公式计算
 */

function CBTNodeNum(root) {
  if (!root) {
    return 0;
  }
  const HEIGHT = CBTHeight(root, 1);
  return bs(head, 1, CBTHeight, 1);
}

function bs(node, leavel, HEIGHT) {
  if (leavel === HEIGHT) {
    return true;
  }
  // 如果右子树的高度等于整棵树高度，那么左子树是满的
  if (CBTHeight(node.right, leavel + 1) === HEIGHT) {
    return (1 << (HEIGHT - leavel)) + bs(node.right, leavel + 1, HEIGHT);
  } 
  // 如果右子树的高度小于整棵树高度，那么右树也是满的，不过高度减一
  else {
    // 左 + 右
    return bs(node.left, leavel + 1, HEIGHT) + (1 << (HEIGHT - leavel - 1)) ;
  }
}

function CBTHeight(root, leavel) {
  while (!root) {
    leavel++;
    root = root.left;
  }
  return leavel - 1;
}
