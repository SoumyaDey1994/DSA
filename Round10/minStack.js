/**
 * Date: 26th March, 2026
 * Implement a Stack
 * with O(1) time complexity
 */
class MyStack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
    return this;
  }

  pop() {
    const item = this.list.pop();
    return item;
  }

  size() {
    return this.list.length;
  }

  peak() {
    return this.list[this.list.length - 1];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  traverse() {
    const result = [];
    for (let i = this.list.length - 1; i >= 0; i--) {
      result.push(this.list[i]);
    }

    return result.join("-->");
  }
}

const stack = new MyStack();
console.log(`Is stack empty: ${stack.isEmpty()}`);

stack.push(2).push(3).push(5);

console.log("..........Stack Items.........");
console.log(`List: \n${stack.traverse()}`);

const poppedElement = stack.pop();
console.log(`Element removed: ${poppedElement}`);
console.log(`Current size of stack: ${stack.size()}`);

stack.push(6).push(7).push(9).push(10);

console.log(`Is stack empty: ${stack.isEmpty()}`);
console.log("..........Stack Items.........");
console.log(`List: \n${stack.traverse()}`);

console.log(`Top of Stack: ${stack.peak()}`);
console.log(`Current size of stack: ${stack.size()}`);
