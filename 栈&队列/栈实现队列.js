/**
 * 栈实现队列
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。
 *
 * 两个栈，一个push栈，一个pop 栈，push时只往push栈里面推，pop时只往pop栈里面拿。
 * 当pop栈为空时，要把Push栈里面所有的元素全部移动到pop栈里面
 */

class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  pop() {
    if (this.length > 0) {
      return this.arr[--this.length];
    } else {
      return null;
    }
  }
  push(item) {
    this.arr[this.length++] = item;
  }
}

const pushStack = new Stack();
const popStack = new Stack();

function push(node) {
  // write code here
  pushStack.push(node);
}
function pop() {
  // write code here
  if (popStack.length > 0) {
    return popStack.pop();
  } else {
    while(pushStack.length > 0) {
      popStack.push(pushStack.pop())
    }
    return popStack.pop();
  }
}
