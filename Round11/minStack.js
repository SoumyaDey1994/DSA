/**
 * Date: 13th April, 2026
 * Implement a Stack
 * with O(1) time complexity
 */
class MyStack {
  constructor() {
    this.list = [];
  }

  push(element) {
    this.list.push(element);
    return this;
  }

  pop() {
    const item = this.list.pop();
    return item;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  peak() {
    return this.list[this.list.length - 1];
  }

  size() {
    return this.list.length;
  }

  getList() {
    const result = [];
    const length = this.list.length;
    for (let i = length - 1; i >= 0; i--) {
      result.push(this.list[i]);
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
