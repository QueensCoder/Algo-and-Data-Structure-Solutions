// all methods have an O(1) time and space

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minValues = [];
    this.maxValues = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minValues.pop();
    this.maxValues.pop();
    return this.stack.pop();
  }

  push(number) {
    this.stack.push(number);
    // 		if there are no min and max values
    if (!this.minValues.length && !this.maxValues.length) {
      this.minValues.push(number);
      this.maxValues.push(number);

      // if there is a current min and max value, get those values
    } else {
      let minVal = this.minValues[this.maxValues.length - 1];
      let maxVal = this.maxValues[this.maxValues.length - 1];

      // for every number that is pushed on, compare it to the old min and max
      //  and push that new min and max onto both arrays
      // this ensure the length of the stack and the min-max arrays are the same
      // 	so for every push there will be a corresponding number of pops
      this.minValues.push(Math.min(minVal, number));
      this.maxValues.push(Math.max(maxVal, number));
    }
  }

  getMin() {
    return this.minValues[this.minValues.length - 1];
  }

  getMax() {
    return this.maxValues[this.maxValues.length - 1];
  }
}
