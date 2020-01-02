class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

	depthFirstHelper({name, children}, arr){
		arr.push(name)
		if(children.length) {
			children.forEach(child => {
				this.depthFirstHelper(child, arr)
			})
		}
	}
  
	//when function hits node add node name to result array
	//then see if a node has children if so call depthFirst on each child
  //apply helper to each node while passing the result array into each function call
  //array is finally return after all recursive calls are made
  
  depthFirstSearch(array) {
		this.depthFirstHelper(this, array)
		return array
  }
}
