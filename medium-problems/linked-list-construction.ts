export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    // if no head, there is no tail set head and tail to same node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      oldHead.prev = node;
      this.head = node;
      node.next = oldHead;
    }
  }

  setTail(node: Node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      node.prev = oldTail;
      this.tail = node;
    }
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (this.head === node) {
      this.setHead(nodeToInsert);
      return;
    }

    let currNode = this.head?.next;
    while (currNode) {
      if (currNode === node) {
        const prev = currNode.prev;

        if (prev) {
          prev.next = nodeToInsert;
          nodeToInsert.prev = prev;
        }

        nodeToInsert.next = currNode;
        currNode.prev = nodeToInsert;
        return;
      }
      currNode = currNode.next;
    }
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (this.tail === node) {
      this.setTail(nodeToInsert);
      return;
    }

    let currNode = this.tail?.prev;
    while (currNode) {
      if (currNode === node) {
        const next = currNode.next;

        if (next) {
          next.next = nodeToInsert;
          nodeToInsert.next = next;
        }

        nodeToInsert.prev = currNode;
        currNode.next = nodeToInsert;
        return;
      }
      currNode = currNode.prev;
    }
  }

  insertAtPosition(position: number, nodeToInsert: Node) {}

  removeNodesWithValue(value: number) {}

  remove(node: Node) {
    // if only 1 node in LL, set head and tail to null
    if (this.head === this.tail && this.head === node) {
      this.head = null;
      this.tail = null;
    }
    // if head removed, set new head and new head has no previous
    else if (this.head === node) {
      const oldHead = this.head;
      this.head = oldHead.next;
      if (oldHead.next) {
        oldHead.next.prev = null;
      }
      //   if tail is removed set new tail and new tail has no next
    } else if (this.tail === node) {
      const oldTail = this.tail;
      this.tail = oldTail.prev;
      if (oldTail.prev) {
        oldTail.prev.next = null;
      }
    } else {
      // node is not head or tail and somewhere inside of the LL
      let currNode = this.head?.next; //start after head since we already evaluated the head

      while (currNode) {
        if (currNode === node) {
          const prev = currNode.prev;
          const next = currNode.next;

          if (prev) prev.next = next;
          if (next) next.prev = prev;

          return;
        }
        currNode = currNode.next;
      }
    }
  }

  containsNodeWithValue(value: number) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) return true;
      currNode = currNode.next;
    }
    return false;
  }
}

// nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);

// doubly linked list configured manually
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.head = node1;
doublyLinkedList.tail = node5;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

// console.log(doublyLinkedList.containsNodeWithValue(5));
// console.log(doublyLinkedList.containsNodeWithValue(1));
// console.log(doublyLinkedList.containsNodeWithValue(22));

// console.log(doublyLinkedList.head.value, 1);
// console.log(doublyLinkedList.tail.value, 5);
// doublyLinkedList.setHead(node6);
// doublyLinkedList.setTail(node8);

// console.log(doublyLinkedList.head.value, 6);
// console.log(doublyLinkedList.tail.value, 8);

// remove head, expect new head to be set
// doublyLinkedList.remove(node1);
// console.log(
//   doublyLinkedList.head.value,
//   doublyLinkedList.head.prev,
//   doublyLinkedList.head.next?.value,
//   doublyLinkedList.head.next?.prev?.value,
// );

// // remove tail, expect new tail to be set
// console.log(doublyLinkedList.remove(node5));
// console.log(
//   doublyLinkedList.tail.value,
//   doublyLinkedList.tail.next,
//   doublyLinkedList.tail.prev?.value,
//   doublyLinkedList.tail.prev?.next?.value,
// );

// remove middle node, 3
// console.log(doublyLinkedList.remove(node3));
// console.log(
//   doublyLinkedList.containsNodeWithValue(3),
//   node2.next.value,
//   node4.prev.value,
// );

// insert before head
// doublyLinkedList.insertBefore(node1, node8);
// console.log(
//   doublyLinkedList.head.value,
//   doublyLinkedList.head.next?.value,
//   doublyLinkedList.head.next?.prev?.value,
// );

// insert before in the middle
// doublyLinkedList.insertBefore(node5, node8);
// console.log(
//   doublyLinkedList.containsNodeWithValue(8),
//   node8.prev?.value,
//   node8.next?.value,
//   node5.prev?.value,
// );

// insert after tail
// doublyLinkedList.insertAfter(node5, node8);
// console.log(
//   doublyLinkedList.tail.value,
//   doublyLinkedList.tail.next?.value,
//   doublyLinkedList.tail.prev?.next?.value,
//   doublyLinkedList.tail.prev?.value,
// );

// // insert after in the middle
// doublyLinkedList.insertAfter(node4, node6);
// console.log(
//   doublyLinkedList.containsNodeWithValue(8),
//   node8.prev?.value,
//   node8.next?.value,
//   node5.prev?.value,
// );
// console.log(doublyLinkedList.head.value, 6);
