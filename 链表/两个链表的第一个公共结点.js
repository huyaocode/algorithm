/**
 * 输入两个链表，找出它们的第一个公共结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) {
    return null;
  }
  let len1 = getLinkLen(pHead1);
  let len2 = getLinkLen(pHead2);
  let diff = len1 - len2;
  if(diff > 0) {
    while(diff --) {
      pHead1 = pHead1.next;
    }
  } else {
    while(diff --) {
      pHead2 = pHead2.next;
    }
  }
  if(pHead1 === pHead2) {
    return pHead1;
  }
  while(pHead1 && pHead2 && pHead1.val !== pHead2.val) {
    pHead1 = pHead1.next;
    pHead2 = pHead2.next;
    if(pHead1 === pHead2) {
      return pHead1;
    }
  }
  return null;
}

function getLinkLen(pHead) {
  let len = 0;
  while (pHead) {
    pHead = pHead.next;
    len++;
  }
  return len;
}
