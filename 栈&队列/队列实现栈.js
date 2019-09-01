/**
 * 队列实现栈
 * 两个队列，每次都把前len - 1个数出队到另一个队列中，然后把最后一个数返回给用户。再把两个队列的引用交换位置
 */

class Queue {
  constructor() {
    this.arr = [];
    this.length = this.arr.length;
  }
  pop() {
    return this.arr.shift();
  }
  push(item) {
    this.arr.push(item);
  }
}