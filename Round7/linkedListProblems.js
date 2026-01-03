/**
 * Date: 1st Jan, 2026
 *    Problem: Reverse Singly Linked List
 * Date: 3rd Jan, 2026
 *    Problem: Detect Cycle in a Singly Linked List
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return this;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = node;
    return this;
  }

  getList() {
    if (!this.head) return null;

    let temp = this.head;
    const output = [];
    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    return output.join("-->");
  }
  /**
   * Reverse LinkedList using Iteration
   * @returns
   */
  reverseListIterative() {
    if (!this.head) return null;

    let prev = null,
      curr = this.head;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this;
  }
  /**
   * Reverse Singly Linked List using Recursion
   * @param {*} prev
   * @param {*} curr
   * @returns
   */
  reverseListRecursive(prev = null, curr = this.head) {
    if (!curr) {
      this.head = prev;
      return this;
    }

    const next = curr.next;
    curr.next = prev;
    this.reverseListRecursive(curr, next);
  }

  detectCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    slow = slow.next;
    fast = fast.next?.next;

    while (slow && fast) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast.next?.next;
    }

    return false;
  }
}

const list = new SinglyLinkedList();
list.insert(10).insert(20).insert(25).insert(30);
console.log(`List: ${list.getList()}`);
list.reverseListIterative();
console.log(`List Post Reverse(Iterative): ${list.getList()}`);

list.insert(8).insert(6).insert(4).insert(3).insert(1);
console.log(`List Post Adding new elements: ${list.getList()}`);
list.reverseListRecursive();
console.log(`List Post Reverse (Recursive): ${list.getList()}`);

console.log(`List has cycle: ${list.detectCycle()}`);
