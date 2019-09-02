/**
 *  输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 递归版本
function Merge(pHead1, pHead2) {

  if (pHead1 == null) {
    return pHead2;
  }
  if (pHead2 === null) {
    return pHead1;
  }

  if (pHead1.val <= pHead1.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead1, pHead2.next);
    return pHead2;
  }
}

// 非递归版
function MergeFlat(pHead1, pHead2) {
  if (pHead1 == null) {
    return pHead2;
  }
  if (pHead2 === null) {
    return pHead1;
  }
  let mergeHead, cur;
  while(pHead1 != null && pHead2 != null) {
    if(pHead1.val <= pHead2.val){
      if(mergeHead == null) {
        mergeHead = cur = pHead1;
      } else {
        cur.next = pHead1;
        cur = cur.next;
      }
      pHead1 = pHead1.next;
    } else {
      if(mergeHead == null) {
        mergeHead = cur = pHead2;
      } else {
        cur.next = pHead2;
        cur = cur.next;
      }
      pHead2 = pHead2.next;
    }
  }
  
  if(pHead1 == null) {
    cur.next = pHead2;
  } else {
    cur.next = pHead1;
  }
  
  return mergeHead;
}