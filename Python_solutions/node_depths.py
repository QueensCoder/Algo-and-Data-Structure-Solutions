# use depth first search, to determine how far each node is from root
# keep track of each nodes parent in order to determine what the distance is for the
# associated child node


def nodeDepths(root, curr_depth=0):
    total_depth = curr_depth
       if root.left:
            total_depth += nodeDepths(root.left, curr_depth + 1)
        if root.right:
            total_depth += nodeDepths(root.right, curr_depth + 1)
        return total_depth


# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
