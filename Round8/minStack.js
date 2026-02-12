/**
 * Date: 12th Feb, 2026
 * Implement a Stack
 * with O(1) time complexity
 */
class Stack {
  constructor() {
    this.list = [];
  }

  push(data) {
    this.list.push(data);
    return this;
  }

  pop() {
    const item = this.list.pop();
    return item;
  }

  peak() {
    return this.list[this.list.length - 1];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  size() {
    return this.list.length;
  }

  getList() {
    const output = [];
    const size = this.size();
    for (let i = size-1; i >= 0; i--) {
      output.push(this.list[i]);
    }

    return output.join("-->");
  }
}

const stack = new Stack();
console.log(`Is stack empty: ${stack.isEmpty()}`);

stack.push(2).push(3).push(5);

console.log("..........Stack Items.........");
console.log(`List: \n${stack.getList()}`);

const poppedElement = stack.pop();
console.log(`Element removed: ${poppedElement}`);
console.log(`Current size of stack: ${stack.size()}`);

stack.push(6).push(7).push(9).push(10);

console.log(`Is stack empty: ${stack.isEmpty()}`);
console.log("..........Stack Items.........");
console.log(`List: \n${stack.getList()}`);

console.log(`Top of Stack: ${stack.peak()}`);
console.log(`Current size of stack: ${stack.size()}`);
