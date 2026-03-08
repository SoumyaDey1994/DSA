/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (8th March, 2026)
 * Problem 1: Swap adjacent nodes of a Singly Linked List (8th March, 2026)
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

  insert(node) {
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
   * Reverse The Singly Linked List
   * @returns
   */
  reverseList() {
    if (!this.head) return;

    function reverse(prev, curr) {
      while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      this.head = prev;
    }

    reverse.call(this, null, this.head);
    return this;
  }

  /**
   * Swap adjacent nodes of SLL
   * @returns
   */
  swapAdjacents() {
    if (!this.head) return;

    let curr = this.head,
      prev = null;

    while (curr !== null && curr.next !== null) {
      const adj = curr.next,
        nextCurr = adj.next;
      if (prev === null) {
        this.head = adj;
      } else {
        prev.next = adj;
      }

      adj.next = curr;
      curr.next = nextCurr;
      prev = curr;
      curr = nextCurr;
    }

    return this;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const sll = new SinglyLinkedList();
sll.insert(node1).insert(node2).insert(node3).insert(node4).insert(node5);
console.log(`List post initial inserts: ${sll.getList()}`);

sll.reverseList();
console.log(`List post reverse: ${sll.getList()}`);

const node10 = new Node(10);
const node12 = new Node(12);
const node15 = new Node(15);
sll.insert(node10).insert(node12);
console.log(`List post new set of inserts: ${sll.getList()}`);

sll.swapAdjacents();
console.log(`List post swapping adjacents: ${sll.getList()}`);
