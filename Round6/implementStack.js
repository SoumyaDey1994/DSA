/**
 * Implement a Stack
 * with O(1) time complexity
 */
class Stack {
  constructor() {
    this.container = [];
  }

  push(data) {
    this.container.push(data);
    return this;
  }

  pop() {
    const element = this.container.pop();
    return element;
  }

  size() {
    return this.container.length;
  }

  top() {
    return this.container[this.container.length - 1];
  }

  isEmpty() {
    return this.container.length === 0;
  }

  getList() {
    let result = [];
    for (let i = this.container.length - 1; i >= 0; i--) {
      result.push(this.container[i]);
    }
    return result.join("\n");
  }
}

const stack = new Stack();
console.log(`Is stack empty: ${stack.isEmpty()}`);

stack.push(2).push(3).push(5);

console.log(`List: \n${stack.getList()}`);

const poppedElement = stack.pop();
console.log(`Element removed: ${poppedElement}`);
console.log(`Current size of stack: ${stack.size()}`);

stack.push(6).push(7).push(9).push(10);

console.log(`Is stack empty: ${stack.isEmpty()}`);
console.log(`List: \n${stack.getList()}`);
console.log(`Top of Stack: ${stack.top()}`);
console.log(`Current size of stack: ${stack.size()}`);
