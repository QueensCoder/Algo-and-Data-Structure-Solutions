class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        depth_first_helper(self, array)
        return array


def depth_first_helper(node, arr):
    name = node.name
    children = node.children
    arr.append(name)
    if(len(children)):
        for i in children:
            depth_first_helper(i, arr)
