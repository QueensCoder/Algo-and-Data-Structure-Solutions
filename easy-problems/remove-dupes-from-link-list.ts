export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  let currNode = linkedList;
  const linkedListHash = {
    [currNode.value]: 1,
  };
  while (currNode.next) {
    if (linkedListHash[currNode.next.value]) {
      linkedListHash[currNode.next.value]++;
    } else {
      linkedListHash[currNode.next.value] = 1;
    }
  }
  return linkedList;
}
