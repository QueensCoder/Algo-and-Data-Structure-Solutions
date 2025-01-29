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

  setHead(node: Node) {}

  setTail(node: Node) {}

  insertBefore(node: Node, nodeToInsert: Node) {}

  insertAfter(node: Node, nodeToInsert: Node) {}

  insertAtPosition(position: number, nodeToInsert: Node) {}

  removeNodesWithValue(value: number) {}

  remove(node: Node) {}

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

console.log(doublyLinkedList.containsNodeWithValue(5));
console.log(doublyLinkedList.containsNodeWithValue(1));
console.log(doublyLinkedList.containsNodeWithValue(22));
// doublyLinkedList.setHead(node1);
// doublyLinkedList.setTail(node3);
