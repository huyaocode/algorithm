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