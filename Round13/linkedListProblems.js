/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List ()
 * Problem 2: Swap adjacent nodes of a Singly Linked List ()
 * Problem 3: Detect Cycle in a Singly Linked List ()
 * Problem 4: Remove Cycle from Cyclic Linked List ()
 * Problem 5: Find mid-point of a SLL (2nd May, 2026)
 * Problem 6: Find Nth Node from End (SLL) (2nd May, 2026)
 * Problem 7: Merge 2 Sorted SLL (2nd May, 2026)
 * Problem 8: Find intersection-point of a SLL (3rd May, 2026)
 * Problem 9: Merged K Sorted Singly Linked List (3rd May, 2026)
 * Problem 10: Reverse Linked List II - Reverse within given pointers ()
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

    let result = "";
    let temp = this.head;
    while (temp.next !== null) {
      result = result + temp.data + "-->";
      temp = temp.next;
    }

    return result + temp.data;
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
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this;
  }

  /**
   * Swap adjacent nodes of a linked list
   * @returns
   */
  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null;
    let curr = this.head;

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

    return this;
  }

  /**
   * Find mid-point of Singly Linked List
   * @returns
   */
  findMidPoint() {
    if (!this.head) return;

    let slow = this.head,
      fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next?.next;
    }

    return slow.data;
  }

  /**
   * Find Nth node from end of a Singly Linked List
   * @param {*} n
   * @returns
   */
  findNthNodeFromEnd(n) {
    if (!this.head) return null;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return null;

    let aux = this.head;
    while (temp !== null && aux !== null) {
      temp = temp.next;
      aux = aux.next;
    }

    return aux.data;
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
const node19 = new Node(19);

sll.addNode(node10).addNode(node12);
console.log(`List post new set of inserts: ${sll.getList()}`);

sll.swapAdjacentNodes();
console.log(`List post swapping adjacents: ${sll.getList()}`);

console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);

console.log(`1st node from end: ${sll.findNthNodeFromEnd(1)}`);
console.log(`3rd node from end: ${sll.findNthNodeFromEnd(3)}`);
console.log(`4th node from end: ${sll.findNthNodeFromEnd(4)}`);
console.log(`7th node from end: ${sll.findNthNodeFromEnd(6)}`);
console.log(`10th node from end: ${sll.findNthNodeFromEnd(10)}`);
