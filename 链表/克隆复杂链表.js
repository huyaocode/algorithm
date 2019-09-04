/**
 *输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 返回结果为复制后复杂链表的head。
 （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空)
 */

/*
 *解题思路：
 *1、遍历链表，复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
 *2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
 *3、拆分链表，将链表拆分为原链表和复制后的链表
 */

function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}

function Clone(pHead) {
  if (pHead == null) {
    return null;
  }

//1、复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
  let currentNode = pHead;
  while (currentNode != null) {
    let cloneNode = new RandomListNode(currentNode.label);
    let nextNode = currentNode.next;
    currentNode.next = cloneNode;
    cloneNode.next = nextNode;
    currentNode = nextNode;
  }

  //2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
  currentNode = pHead;
  while (currentNode != null) {
    if(currentNode.random != null) {
      currentNode.next.random = currentNode.random.next
    } else {
      currentNode.next.random = null
    }
    currentNode = currentNode.next.next;
  }

  //3、拆分链表，将链表拆分为原链表和复制后的链表
  currentNode = pHead;
  let pCloneHead = pHead.next;
  while (currentNode != null) {
    let cloneNode = currentNode.next;
    currentNode.next = cloneNode.next;
    cloneNode.next = cloneNode.next == null ? null : cloneNode.next.next;
    currentNode = currentNode.next;
  }

  return pCloneHead;
}
