// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this];
    while (queue.length) {
      let currentNode = queue.shift();

      if (currentNode) array.push(currentNode?.name);
      if (currentNode?.children) {
        queue.unshift(...currentNode.children);
      }
    }
    return array;
  }
}

// Example usage:
const root = new Node('A');
root.addChild('B').addChild('C').addChild('D');
root.children[0].addChild('E').addChild('F');
root.children[2].addChild('G').addChild('H');
root.children[0].children[1].addChild('I').addChild('J');
root.children[2].children[0].addChild('K');

const result: string[] = [];
root.breadthFirstSearch(result);
console.log(result); // Should print the DFS order of the nodes
