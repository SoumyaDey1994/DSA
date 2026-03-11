/**
 * Date: 11th March, 2026
 * Implement a Stack
 * with O(1) time complexity
 */
class MyStack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
    return this;
  }

  pop() {
    const item = this.stack.pop();
    return item;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peak() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  getList() {
    const result = [];
    for (let i = this.stack.length - 1; i >= 0; i--) {
      result.push(this.stack[i]);
    }

    return result.join("-->");
  }
}

const stack = new MyStack();
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
