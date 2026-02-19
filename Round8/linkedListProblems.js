/**
 * Date: 22nd Jan, 2026
 * Problem Statement: Reverse a Singly Linked List
 * Date: 19th Feb, 2026
 * Problem Statement: Swap adjacent nodes of a Singly Linked List
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
  /**
   * Check if any cycle present in SLL
   * @returns
   */
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

  /**
   * Find Nth node from end
   */
  findNthElementFromEnd(n) {
    if (!this.head) return;

    let temp = this.head;
    while (n > 0) {
      temp = temp.next;
      n--;

      if (temp === null) return null;
    }

    let headStart = this.head;
    while (headStart !== null && temp !== null) {
      temp = temp.next;
      headStart = headStart.next;
    }

    return headStart.data;
  }
  /**
   * Swap adjacent nodes of a SLL
   * @returns 
   */
  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;
    while (curr !== null && curr.next !== null) {
      let adjacent = curr.next;
      let nextCurr = adjacent.next;
      if (prev === null) {
        this.head = adjacent;
      } else {
        prev.next = adjacent;
      }
      adjacent.next = curr;
      curr.next = nextCurr;
      prev = curr;
      curr = nextCurr;
    }
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

console.log(`List has cycle ? ${list.detectCycle()}`);

let elementOfListFromEnd = list.findNthElementFromEnd(2);
let elementOfList2FromEnd = list.findNthElementFromEnd(1);

console.log(
  `Elements from End: List(-2):${elementOfListFromEnd}, List(-1):${elementOfList2FromEnd}`,
);
elementOfListFromEnd = list.findNthElementFromEnd(5);
console.log(`Elements from End: List(-5):${elementOfListFromEnd}`);
elementOfListFromEnd = list.findNthElementFromEnd(10);
console.log(`Elements from End: List(-10):${elementOfListFromEnd}`);

console.log(`List before swapping adjacents: ${list.getList()}`);
list.swapAdjacentNodes();
console.log(`List after swapping adjacents: ${list.getList()}`);
