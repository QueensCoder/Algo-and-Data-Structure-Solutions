export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
type NodeType = LinkedList | null;
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currNode: NodeType = linkedList;
  const linkedListHash: { [key: string]: number } = {};
  while (currNode) {
    let value = currNode.value;

    if (linkedListHash[value]) {
      linkedListHash[value]++;
    } else {
      linkedListHash[value] = 1;
    }
    currNode = currNode.next;
  }

  let nodeToProcess: NodeType = linkedList;
  let lastNode: NodeType = null;

  while (nodeToProcess) {
    let value = nodeToProcess.value;

    if (lastNode && linkedListHash[value] > 1) {
      lastNode.next = nodeToProcess.next;
      nodeToProcess = nodeToProcess.next?.next || null;
      linkedListHash[value]--;
    } else {
      lastNode = nodeToProcess;
      nodeToProcess = nodeToProcess.next;
    }
  }
  return linkedList;
}

const linkedList = new LinkedList(1);
linkedList.next = new LinkedList(1);
linkedList.next.next = new LinkedList(3);
linkedList.next.next.next = new LinkedList(4);
linkedList.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next.next = new LinkedList(5);
linkedList.next.next.next.next.next.next.next = new LinkedList(6);
linkedList.next.next.next.next.next.next.next.next = new LinkedList(6);

console.log(removeDuplicatesFromLinkedList(linkedList));

const linkedList2 = new LinkedList(1);
linkedList2.next = new LinkedList(1);
linkedList2.next.next = new LinkedList(1);
linkedList2.next.next.next = new LinkedList(1);
linkedList2.next.next.next.next = new LinkedList(1);
// console.log(removeDuplicatesFromLinkedList(linkedList2));

const inspectLL = (linkedList: LinkedList) => {
  let currNode: NodeType = linkedList;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
};

console.log(inspectLL(linkedList));
// console.log(inspectLL(linkedList2));
