export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    return array;
  }

  siftDown() {}

  siftUp() {}

  peek() {
    return -1;
  }

  remove() {
    return -1;
  }

  insert(value: number) {}
}
