/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List ()
 * Problem 2: Swap adjacent nodes of a Singly Linked List ()
 * Problem 3: Detect Cycle in a Singly Linked List ()
 * Problem 4: Find Nth Node from End (SLL) ()
 * Problem 5: Find mid-point of a SLL (30th March, 2026)
 * Problem 6: Merge 2 Sorted SLL (30th March, 2026)
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
    if (this.head === null) return;

    let temp = this.head;
    const result = [];
    while (temp !== null) {
      result.push(temp.data);
      temp = temp.next;
    }

    return result.join("-->");
  }

  reverseList() {
    if (this.head === null) return;

    let prev = null,
      curr = this.head;
    while (curr !== null) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    this.head = prev;
    return this;
  }

  swapAdjacentNodes() {
    if (this.head === null) return;

    let curr = this.head;
    let prev = null;
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

  detectCycle() {
    if (this.head === null) return;

    let slow = this.head,
      fast = this.head;

    slow = slow.next;
    fast = fast?.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast?.next?.next;
    }

    return false;
  }

  findNthNodeFromEnd(n) {
    if (this.head === null) return;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      n--;
      temp = temp.next;
    }

    if (temp === null) return null;

    let aux = this.head;
    while (aux !== null && temp !== null) {
      aux = aux.next;
      temp = temp.next;
    }

    return aux.data;
  }

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

const cyclicList = new SinglyLinkedList();
const node200 = new Node(200);
const node205 = new Node(205);
const node210 = new Node(210);
const node215 = new Node(215);
cyclicList
  .addNode(node200)
  .addNode(node205)
  .addNode(node210)
  .addNode(node215)
  .addNode(node205);

console.log(`Is List 1 cyclic: ${sll.detectCycle()}`);
console.log(`Is List 2 cyclic: ${cyclicList.detectCycle()}`);

console.log(`1st node from end: ${sll.findNthNodeFromEnd(1)}`);
console.log(`3rd node from end: ${sll.findNthNodeFromEnd(3)}`);
console.log(`4th node from end: ${sll.findNthNodeFromEnd(4)}`);
console.log(`7th node from end: ${sll.findNthNodeFromEnd(7)}`);
console.log(`10th node from end: ${sll.findNthNodeFromEnd(10)}`);

console.log(`\nCurrent State of List 1: ${sll.getList()}`);
console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);
