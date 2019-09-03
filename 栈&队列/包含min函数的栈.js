/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */

let stack = [];
let minStack = [];

function push(node) {
  stack.push(node);
  let minNode= minStack[minStack.length - 1]
  if (minStack.length === 0 || node < minNode) {
    minStack.push(node);
  } else {
    minStack.push(minNode)
  }
}
function pop() {
  let node = stack.pop();
  minStack.pop();
  return stack.pop();
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minStack[minStack.length - 1];
}
push(3)
push(4)
push(2)
push(1)
console.log(minStack, stack)