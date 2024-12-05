export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList(1);
linkedList.next = new LinkedList(2);
linkedList.next.next = new LinkedList(3);
linkedList.next.next.next = new LinkedList(4);

export function middleNode(linkedList: LinkedList) {
  let totalLength = 1;
  let currNode = linkedList;
  //   O(n)
  while (currNode.next) {
    totalLength++;
    currNode = currNode.next;
  }

  //   find middle with specific logic of if even get second middle
  let middle;
  if (totalLength % 2 === 0) {
    middle = totalLength / 2 + 1;
  } else {
    middle = Math.ceil(totalLength / 2);
  }

  //  O(n)
  let foundNode: LinkedList | null | undefined = linkedList;
  for (let i = 1; i < middle; i++) {
    foundNode = foundNode?.next;
  }

  return foundNode;
}

console.log(middleNode(linkedList));
