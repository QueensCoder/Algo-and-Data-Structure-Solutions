import { expect, test } from 'vitest';
import { MinHeap } from '../medium-problems/min-heap-construction';

const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

const isMinHeapPropertySatisfied = (array: number[]) => {
  for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
    const parentIdx = Math.floor((currentIdx - 1) / 2);
    if (array[parentIdx] > array[currentIdx]) return false;
  }
  return true;
};

const minHeap = new MinHeap(array);
const expectedHeap = [-5, 2, 6, 7, 8, 8, 24, 24, 24, 56, 12, 48, 41, 391];

// node at i has children at 2i + 1 and 2i + 2, -5 has children at 2(0) + 1 and 2(0) + 2

test('buildHeap should initialize the heap correctly', () => {
  expect(minHeap.heap).toEqual(expectedHeap);
});

// test('peek should return the smallest element', () => {
//   const minHeap = new MinHeap(array);
//   expect(minHeap.peek()).toBe(-1);
// });

// test('remove should return the smallest element', () => {
//   const minHeap = new MinHeap(array);
//   expect(minHeap.remove()).toBe(-1);
// });

// test('insert should add an element to the heap', () => {
//   const minHeap = new MinHeap(array);
//   minHeap.insert(5);
//   expect(minHeap.heap).toContain(5);
// });
