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
