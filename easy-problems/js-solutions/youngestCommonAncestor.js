class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// keep iterating until an ancestor has no parent while incrementing depth
const findDepth = (node, top) => {
  let depth = 0;
  while (node.name !== top.name) {
    node = node.ancestor;
    depth++;
  }
  return depth;
};

const nodesToSameDepth = (younger, diff) => {
  let currNode = younger;
  while (diff) {
    currNode = currNode.ancestor;
    diff--;
  }
  return currNode;
};

// first get to depth of eachh descendant thah way we can
// find out the difference of their depth and make it so that
// we can get both to the same level to determine the youngest ancenstor
// for each descendant follow the ancenstor property , its like a one direction graph
// see how many iterations it takes to get to the top aka no ancestor
// get nodes to same level, see if they are equal to each other, if not
// continue to go up the ancestor ladder if not
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = findDepth(descendantOne, topAncestor);
  const depthTwo = findDepth(descendantTwo, topAncestor); //top ancestor is import because A is may not be top ancestor in other test cases
  const difference = Math.abs(depthOne - depthTwo);

  let oneLine;
  let twoLine;

  if (depthTwo > depthOne) {
    oneLine = descendantOne;
    twoLine = nodesToSameDepth(descendantTwo, difference);
  } else if (depthTwo < depthOne) {
    oneLine = nodesToSameDepth(descendantOne, difference);
    twoLine = descendantTwo;
  } else {
    oneLine = descendantOne;
    twoLine = descendantTwo;
  }

  while (oneLine.name !== twoLine.name) {
    oneLine = oneLine.ancestor;
    twoLine = twoLine.ancestor;
  }
  return oneLine;
}

// Do not edit the line below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
