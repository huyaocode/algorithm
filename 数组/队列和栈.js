/**
 * 数组实现固定大小的栈
 * 记录一给索引值，执行栈顶。进栈时索引加一，出栈时索引减一。
 */
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  pop() {
    if(this.index > 0) {
      return this.arr[--this.index];
    } else {
      throw Error('stack null')
    }
  }
  push(item) {
    this.arr[this.index++] = item;
  }
}
let stack = new Stack();
stack.push(1);
console.log(stack.pop())
stack.push(2);
stack.push(3);
console.log(stack.pop())
console.log(stack.pop())
/**
 * 队列实现栈
 * 两个队列，每次都把前len - 1个数出队到另一个队列中，然后把最后一个数返回给用户。再把两个队列的引用交换位置
 */



/**
 * 栈实现队列
 * 两个栈，一个push栈，一个pop 栈，push时只往push栈里面推，pop时只往pop栈里面拿。
 * 当pop栈为空时，要把Push栈里面所有的元素全部移动到pop栈里面
 */