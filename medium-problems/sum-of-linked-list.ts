// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList,
) {
  // Write your code here.
  return linkedListOne;
}

const linkedListOne = new LinkedList(2);
linkedListOne.next = new LinkedList(4);
linkedListOne.next.next = new LinkedList(7);
linkedListOne.next.next.next = new LinkedList(1);

const linkedListTwo = new LinkedList(9);
linkedListTwo.next = new LinkedList(4);
linkedListTwo.next.next = new LinkedList(5);

console.log(sumOfLinkedLists(linkedListOne, linkedListTwo));
