// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const traverseLinkedList = (linkedList: LinkedList) => {
  let currNode: LinkedList | null = linkedList;
  let rawSum = '';

  while (currNode) {
    rawSum = currNode.value + rawSum;
    currNode = currNode.next;
  }
  return rawSum;
};

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  let rawSumOne = traverseLinkedList(linkedListOne);
  let rawSumTwo = traverseLinkedList(linkedListTwo);

  const totalSum = parseInt(rawSumOne) + parseInt(rawSumTwo);
  const totalSumReversed = String(totalSum)
    .split('')
    .reverse()
    .map((str) => parseInt(str));

  const newLinkedList = new LinkedList(totalSumReversed[0]);
  let currNode = newLinkedList;
  for (let i = 1; i < totalSumReversed.length; i++) {
    let currNum = totalSumReversed[i];
    let newNode = new LinkedList(currNum);
    currNode.next = newNode;
    currNode = newNode;
  }

  return newLinkedList;
}

const linkedListOne = new LinkedList(2);
linkedListOne.next = new LinkedList(4);
linkedListOne.next.next = new LinkedList(7);
linkedListOne.next.next.next = new LinkedList(1);

const linkedListTwo = new LinkedList(9);
linkedListTwo.next = new LinkedList(4);
linkedListTwo.next.next = new LinkedList(5);

console.log(sumOfLinkedLists(linkedListOne, linkedListTwo));
