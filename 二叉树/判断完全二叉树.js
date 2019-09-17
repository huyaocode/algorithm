/**
 * 完全二叉树按层遍历是横着一排一排的。
 * 判断方法：
 *  1. 如果一个节点有右节点，没有左节点，一定不是完全二叉树
 *  2. 如果一个节点只有左节点、或者两个节点都没有，那么层序遍历之后的节点都应该是叶子节点
 *  3. 如果已经判断现在应该为叶节点了，还出现节点有子节点，返会false;
 */
function isCBT(head) {
  if (!head) {
    return true;
  }
  let queue = [];
  let leafStart = false;
  queue.push(head);
  while (queue.length) {
    let node = queue.shift();
    let l = node.left,
      r = node.right;
    if (!l && r) {
      return false;
    }
    if (leafStart && (l || r)) {
      return false;
    }
    l && queue.push(l);
    r && queue.push(r);
    if (!r) {
      leafStart = true;
    }
  }
  return true;
}
