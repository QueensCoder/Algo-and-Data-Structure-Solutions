export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

type CurrentNode = LinkedList | null;

export const getLengthOfLL = (linkedList: LinkedList) => {
  let length = 0;
  let currNode: CurrentNode = linkedList;
  while (currNode) {
    length++;
    currNode = currNode.next;
  }
  return length;
};

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  let listOneLen = getLengthOfLL(linkedListOne);
  let listTwoLen = getLengthOfLL(linkedListTwo);

  // two case
  // same length case, easy to solve, use two pointers move them together
  // different length case, use two pointers,

  //   case 1
  if (listOneLen === listTwoLen) {
    let currListOne: CurrentNode = linkedListOne;
    let currListTwo: CurrentNode = linkedListTwo;
    console.log('got here');
    while (currListOne && currListTwo) {
      if (currListOne === currListTwo) {
        return currListOne;
      }
      currListOne = currListOne.next;
      currListTwo = currListTwo.next;
    }
  }

  return null;
}

const nodeOne = new LinkedList(1);
const nodeFour = new LinkedList(4);
nodeOne.next = nodeFour;

const linkedListOne = new LinkedList(2);
linkedListOne.next = new LinkedList(3);
linkedListOne.next.next = nodeOne;

const linkedListTwo = new LinkedList(8);
linkedListTwo.next = new LinkedList(7);
linkedListTwo.next.next = nodeOne;

console.log(mergingLinkedLists(linkedListOne, linkedListTwo));
