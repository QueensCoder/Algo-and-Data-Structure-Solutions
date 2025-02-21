class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, array):
        que = [self]
        while len(que):
            curr = que.pop(0)
            array.append(curr.name)
            que.extend(curr.children)
        return array
