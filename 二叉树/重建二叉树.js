/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

let pre = [1, 2, 4, 7, 3, 5, 6, 8],
  vin = [4, 7, 2, 1, 5, 3, 8, 6];

let res = reConstructBinaryTree([1, 2, 3, 4], [1, 2, 3, 4]);
console.log(res);

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  let root = pre[0];
  let node = new TreeNode(root);

  if (pre.length === vin.length && pre.length === 1) {
    return node;
  }

  let [vinLeft, vinRight] = sliceVin(root, vin);

  let preLeft = pre.slice(1, vinLeft.length + 1);
  let preRight = pre.slice(vinLeft.length + 1);

  node.left = preLeft.length ? reConstructBinaryTree(preLeft, vinLeft) : null;

  node.right = preRight.length
    ? reConstructBinaryTree(preRight, vinRight)
    : null;
  return node;
}

function sliceVin(root, vin) {
  let left, right;
  for (let i = 0; i < vin.length; i++) {
    if (vin[i] === root) {
      left = vin.slice(0, i);
      right = vin.slice(i + 1);
    }
  }
  return [left, right];
}
