/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (15th April, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (15th April, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List ()
 * Problem 4: Find Nth Node from End (SLL) ()
 * Problem 5: Merge 2 Sorted SLL ()
 * Problem 6: Find mid-point of a SLL ()
 * Problem 7: Find intersection-point of a SLL ()
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

  addNode(node) {
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

    let temp = this.head;
    const result = [];
    while (temp !== null) {
      result.push(temp.data);
      temp = temp.next;
    }

    return result.join("-->");
  }

  /**
   * Reverse the Singly Linked List
   * @returns
   */
  reverseList() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;
    while (curr !== null) {
      const nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }

    this.head = prev;
    return this;
  }

  /**
   * Swap adjacent nodes of Singly Linked List
   * @returns 
   */
  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;

    while (curr !== null && curr.next !== null) {
      const adj = curr.next;
      const nextTarget = adj.next;

      if (prev === null) {
        this.head = adj;
      } else {
        prev.next = adj;
      }

      adj.next = curr;
      curr.next = nextTarget;
      prev = curr;
      curr = nextTarget;
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const sll = new SinglyLinkedList();
sll.addNode(node1).addNode(node2).addNode(node3).addNode(node4).addNode(node5);
console.log(`List post initial inserts: ${sll.getList()}`);

sll.reverseList();
console.log(`List post reverse: ${sll.getList()}`);

const node10 = new Node(10);
const node12 = new Node(12);
const node15 = new Node(15);
sll.addNode(node10).addNode(node12);
console.log(`List post new set of inserts: ${sll.getList()}`);

sll.swapAdjacentNodes();
console.log(`List post swapping adjacents: ${sll.getList()}`);
