/**
 * Date: 22nd Jan, 2026
 * Problem Statement: Reverse a Singly Linked List
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

  insertNode(node) {
    if (!this.head) {
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
    if (!this.head) return;

    const result = [];
    let temp = this.head;
    while (temp !== null) {
      result.push(temp.data);
      temp = temp.next;
    }

    return result.join("-->");
  }

  /**
   * Reverse Sigly Linked List Iteratively
   * @returns
   */
  reverseListIterative() {
    if (!this.head) return;

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
   * Reverse Sigly Linked List Recursively
   * @returns
   */

  reverseListRecursive(curr = this.head, prev = null) {
    if (!curr) {
      this.head = prev;
      return prev;
    }

    const next = curr.next;
    curr.next = prev;
    this.reverseListRecursive(next, curr);
    return this;
  }
}

const list = new SinglyLinkedList();
const node10 = new Node(10);
const node20 = new Node(20);
const node25 = new Node(25);
const node30 = new Node(30);

list
  .insertNode(node10)
  .insertNode(node20)
  .insertNode(node25)
  .insertNode(node30);
console.log(`List: ${list.getList()}`);

list.reverseListIterative();
console.log(`List Post Reverse(Iterative): ${list.getList()}`);

const node8 = new Node(8);
const node5 = new Node(5);
const node3 = new Node(3);

list.insertNode(node8).insertNode(node5).insertNode(node3);
console.log(`List Post Adding new elements: ${list.getList()}`);
list.reverseListRecursive();
console.log(`List Post Reverse (Recursive): ${list.getList()}`);
