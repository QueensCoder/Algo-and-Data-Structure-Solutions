
# FILO
# stack is similar to stack of books the first book placed on the stack
# will be the last book removed


class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)
        return self

    def pop(self):
        if not len(self.items):
            return
        return self.items.pop()


stack = Stack()
stack.push(1).push(2).push(3).push(4)

# print(stack.pop()) # 4
# print(stack.pop()) # 3
# print(stack.pop()) # 2
# print(stack.pop()) # 1


class Stack_Pro:
    def __init__(self):
        self.items = {}
        self.count = 0

    def add(self, item):
        self.items[self.count] = item
        self.count += 1
        return self

    def remove(self):
        if not self.count:
            return
        self.count -= 1
        remove = self.items[self.count]
        del self.items[self.count]
        return remove


stack_pro = Stack_Pro()

stack_pro.add(1).add(2).add(3)
# return self after adding item to stack to method chain


print(stack_pro.remove())  # 3
print(stack_pro.remove())  # 2
print(stack_pro.remove())  # 1
print(stack_pro.remove())  # None
print(stack_pro.remove())  # None
print(stack_pro.remove())  # None
