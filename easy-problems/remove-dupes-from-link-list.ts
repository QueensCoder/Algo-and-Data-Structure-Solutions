export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

type NodeType = LinkedList | null;
export function removeDuplicatesFromLinkedListBruteForce(
  linkedList: LinkedList,
) {
  // O(n) time | O(n) space
  const nodeHash: { [key: number]: number } = {};
  let currNodeForHash: NodeType = linkedList;
  while (currNodeForHash) {
    nodeHash[currNodeForHash.value] = nodeHash[currNodeForHash.value] + 1 || 1;
    currNodeForHash = currNodeForHash.next;
  }

  let prevNode: NodeType = null;
  let currNode: NodeType = linkedList;

  while (currNode) {
    let value = currNode.value;

    if (prevNode && nodeHash[value] > 1) {
      nodeHash[value]--;
      prevNode.next = currNode.next;
    } else {
      prevNode = currNode;
    }
    currNode = currNode.next;
  }
  return linkedList;
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  // O(n) time | O(1) space
  let currNode: NodeType = linkedList;
  while (currNode) {
    let nextNode: NodeType = currNode.next;
    if (nextNode && currNode.value === nextNode.value) {
      currNode.next = nextNode.next;
    }
    currNode = currNode.next;
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

// console.log(removeDuplicatesFromLinkedListBruteForce(linkedList));
// console.log(removeDuplicatesFromLinkedList(linkedList));

const linkedList2 = new LinkedList(1);
linkedList2.next = new LinkedList(1);
linkedList2.next.next = new LinkedList(1);
linkedList2.next.next.next = new LinkedList(1);
linkedList2.next.next.next.next = new LinkedList(1);
// console.log(removeDuplicatesFromLinkedListBruteForce(linkedList2));
console.log(removeDuplicatesFromLinkedList(linkedList2));

const inspectLL = (linkedList: LinkedList) => {
  let currNode: NodeType = linkedList;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
};

// console.log(inspectLL(linkedList));
console.log(inspectLL(linkedList2));
