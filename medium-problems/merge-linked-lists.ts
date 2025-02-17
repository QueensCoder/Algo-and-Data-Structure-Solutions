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

// O(n + m) time , O(n) space
export function mergingLinkedListsSubOptimal(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  const listOneValues = new Set();

  let currNode: CurrentNode = linkedListOne;

  while (currNode) {
    listOneValues.add(currNode.value);
    currNode = currNode.next;
  }

  let currNodeFromListTwo: CurrentNode = linkedListTwo;

  while (currNodeFromListTwo) {
    if (listOneValues.has(currNodeFromListTwo.value)) {
      return currNodeFromListTwo;
    }
    currNodeFromListTwo = currNodeFromListTwo.next;
  }

  return null;
}

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

    while (currListOne && currListTwo) {
      if (currListOne === currListTwo) {
        return currListOne;
      }
      currListOne = currListOne.next;
      currListTwo = currListTwo.next;
    }
  } else {
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
