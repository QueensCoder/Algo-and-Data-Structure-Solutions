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
    return false;
  }
}

const doublyLinkedList = new DoublyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);

// doublyLinkedList.setHead(node1);
// doublyLinkedList.setTail(node3);
