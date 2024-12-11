// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  // use stack approach to implement DFS
  // O(v + e) time | O(v) space
  // v is the number of vertices and e is the number of edges
  // take each node and add it to the stack, then pop it off and add its children to the stack
  // FILO, so we add the children in reverse order
  depthFirstSearch(array: string[]) {
    const stack: Node[] = [this];
    while (stack.length) {
      let currentNode = stack.shift();

      if (currentNode) array.push(currentNode?.name);
      if (currentNode?.children) {
        stack.unshift(...currentNode.children);
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
root.depthFirstSearch(result);
console.log(result); // Should print the DFS order of the nodes
