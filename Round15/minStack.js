/**
 * Date: 28th August, 2026
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
    const targetItem = this.container.pop();
    return targetItem;
  }

  peak() {
    const topIndex = this.container.length - 1;
    return this.container[topIndex];
  }

  isEmpty() {
    return this.container.length === 0;
  }

  size() {
    return this.container.length;
  }

  traverse() {
    const result = [];
    for (let i = this.container.length - 1; i >= 0; i--) {
      result.push(this.container[i]);
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
