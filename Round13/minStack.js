/**
 * Date: 25th May, 2026
 * Implement a Stack
 * with O(1) time complexity
 * Operation:
 *      push(item), pop(), peak(),
 *      isEmpty(), size(), getList()
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
    const item = this.container.pop();
    return item;
  }

  peak() {
    const topItem = this.container[this.container.length - 1];
    return topItem;
  }

  isEmpty() {
    return this.container.length === 0;
  }

  size() {
    return this.container.length;
  }

  getList() {
    let result = "";
    for (let i = this.container.length - 1; i >= 0; i--) {
      result = result + "-->" + this.container[i];
    }

    return result;
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
