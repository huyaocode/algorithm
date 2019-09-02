/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function FindKthToTail(head, k) {
  let i = 0, kNode = head;
  while (head) {
    if (i++ >= k) {
      kNode = kNode.next;
    }
    head = head.next;
  }
  return i < k ? null : kNode;
}
