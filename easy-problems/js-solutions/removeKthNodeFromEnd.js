// remove kth node from end of singly linked list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let currNode = head;
  let start = 0;
  let end = 0; //total number of nodes in list
  while (currNode) {
    end++;
    currNode = currNode.next;
  }

  //   if node to remove is the first node make the head.next the new head
  if (k === end) {
    let newHead = head.next;
    head.value = newHead.value;
    head.next = newHead.next;
    return;
  }

  let node = head;
  let next = head.next;
  while (end - k > start + 1) {
    start++;
    node = next;
    next = next.next;
  }

  node.next = next.next;
}
