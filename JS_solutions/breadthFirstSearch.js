class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const que = [this];
    while (que.length) {
      let { name, children } = que.shift();
      array.push(name);
      if (children.length) que.push(...children);
    }
    return array;
  }
}
