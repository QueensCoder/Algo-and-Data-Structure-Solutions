const findClosestValueInBst = (currNode = tree, target, closest = Infinity) => {
  while (currNode) {
    // 		if the diff between the closest and the target is > than target - tree val
    // 		the new closests is the tree value
    const { value, left, right } = currNode;
    // 		see if the closests has the least difference
    if (Math.abs(closest - target) > Math.abs(target - value)) closest = value;

    // 		go left or right depending on the value of node
    if (target < value) currNode = left;
    else if (target > value) currNode = right;
    // 		if exact match stop iterating
    else return value;
  }
  return closest;
};
