/*
用链表存储封装一个队列类。
包含：
push 方法
shift 方法
*/
// PUSH SHIFT
// o -> o -> 0

class LinkListQueue {
  constorctor() {
      this.head = null
      this.last = null;
  }
  push(val) {
      let node = {
          value: val,
          next: null
      }    
      if(!this.head) {
          this.head = node;
          this.last = node;
      } else {
          this.last.next = node;
          this.last = node;
      }
  }
  shift() {
      let val = null;
      if(this.head) {
          val = this.head.value;
          let next = this.head.next
          this.head.next = null;
          this.head = next;
          if(!this.head) {
              this.last = null;
          }
      }
      return val;
  }
}