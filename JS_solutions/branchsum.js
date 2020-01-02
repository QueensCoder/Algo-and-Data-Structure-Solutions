class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, res = []) {
	const {left, right, value } = root

	sum += value
	//store the sum at this function call
	
	
	if(!left && !right){
		res.push(sum)
	}
	
	if(left){
		branchSums(left,sum, res)
	}
	
	if(right){
		branchSums(right, sum, res)
	}
	
	return res
}
