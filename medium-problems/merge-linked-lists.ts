// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  // Write your code here.
  return null;
}

const linkedListOne = new LinkedList(2);
linkedListOne.next = new LinkedList(3);
linkedListOne.next.next = new LinkedList(1);
linkedListOne.next.next.next = new LinkedList(4);

const linkedListTwo = new LinkedList(8);
linkedListTwo.next = new LinkedList(7);
linkedListTwo.next.next = new LinkedList(1);
linkedListTwo.next.next.next = new LinkedList(4);
