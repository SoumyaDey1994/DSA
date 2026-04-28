/**
 * Date: 28th April, 2026
 * Implement a Stack
 * with O(1) time complexity
 * Operations:
 *    push(item), pop(), peak(), isEmpty() & traverse()
 */
class MyStack {
  constructor() {
    this.container = [];
  }

  push(item) {
    this.container.push(item);
    return this;
  }

  pop() {
    const target = this.container.pop();
    return target;
  }

  isEmpty() {
    return this.container.length === 0;
  }

  peak() {
    return this.container[this.container.length - 1];
  }

  size() {
    return this.container.length;
  }

  traverse() {
    const output = [];
    for (let i = this.container.length - 1; i >= 0; i--) {
      output.push(this.container[i]);
    }

    return output.join("-->");
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
