/**
 * Date: 10th May, 2025
 * Problem Statement: Implement Stack using Two Queues
 * You need to implement a Stack (Last In First Out – LIFO) using only two queues (First In First Out – FIFO).
 */

class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  /**
   * Enter new elements to stack
   * @param {*} data
   */
  push(data) {
    this.queue1.push(data);
    while (this.queue1.length > 0) {
      this.queue2.unshift(this.queue1.pop());
    }
  }
  /**
   * Remove elements from stack
   * @returns
   */
  pop() {
    return this.queue2.shift();
  }
  /**
   * Return top element from stack
   * @returns
   */
  top() {
    return this.queue2[0];
  }
  /**
   * Check if stack is empty or not
   * @returns
   */
  empty() {
    return this.queue2.length === 0;
  }
  /**
   * Print elements of stack
   * @returns
   */
  print() {
    let result = this.queue2[0];
    for (let i = 1; i < this.queue2.length; i++) {
      result = result + "-->" + this.queue2[i];
    }
    return result;
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Elements: ", stack.print());

let poppedElement = stack.pop();
console.log(`Latest Popped element: ${poppedElement}`);

stack.push(5);
stack.push(6);
console.log("\nElements post push: ", stack.print());

stack.pop();
console.log(`Latest Popped element: ${stack.pop()}`);
console.log("Elements: ", stack.print());

console.log(`Top of Stack: ${stack.top()}`);
console.log(`Is Stack Empty: ${stack.empty()}`);

stack.pop();
stack.pop();
console.log(`\nLatest Popped element: ${stack.pop()}`);
console.log(`Top of Stack: ${stack.top()}`);
console.log(`Is Stack Empty: ${stack.empty()}`);
