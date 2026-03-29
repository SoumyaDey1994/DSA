/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (29th March, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (29th March, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (29th March, 2026)
 * Problem 4: Find Nth Node from End (SLL) (29th March, 2026)
 * Problem 5: Merge 2 Sorted SLL ()
 * Problem 6: Find mid-point of a SLL ()
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

    const result = [];
    let temp = this.head;
    while (temp !== null) {
      result.push(temp.data);
      temp = temp.next;
    }

    return result.join("-->");
  }

  reverseList() {
    if (!this.head) return;

    let temp = null;
    function reverse(prev, curr) {
      if (!curr) {
        temp = prev;
        return;
      }

      const next = curr.next;
      curr.next = prev;
      reverse(curr, next);
    }

    reverse(null, this.head);
    this.head = temp;
  }

  swapAdjacents() {
    if (!this.head) return;

    let prev = null,
      curr = this.head,
      adjacent = curr.next;

    while (curr !== null && adjacent !== null) {
      if (prev === null) {
        this.head = adjacent;
      } else {
        prev.next = adjacent;
      }

      const nextTarget = adjacent.next;
      adjacent.next = curr;
      curr.next = nextTarget;
      prev = curr;
      curr = nextTarget;
      adjacent = curr.next;
    }
  }

  detectCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    slow = slow.next;
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast?.next?.next;
    }

    return false;
  }

  findNthNodeFromEnd(n) {
    if (!n || n === 0) return null;
    if (!this.head) return null;

    let temp = this.head;
    while ((n > 0) & (temp !== null)) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return -1;

    let temp2 = temp;
    temp = this.head;

    while (temp !== null && temp2 !== null) {
      temp = temp.next;
      temp2 = temp2.next;
    }

    return temp.data;
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

sll.swapAdjacents();
console.log(`List post swapping adjacents: ${sll.getList()}`);

const cyclicList = new SinglyLinkedList();
const node100 = new Node(100);
const node105 = new Node(105);
const node110 = new Node(110);
const node115 = new Node(115);
cyclicList
  .addNode(node100)
  .addNode(node105)
  .addNode(node110)
  .addNode(node115)
  .addNode(node105);

console.log(`Is List 1 cyclic: ${sll.detectCycle()}`);
console.log(`Is List 2 cyclic: ${cyclicList.detectCycle()}`);

console.log(`1st node from end: ${sll.findNthNodeFromEnd(1)}`);
console.log(`3rd node from end: ${sll.findNthNodeFromEnd(3)}`);
console.log(`4th node from end: ${sll.findNthNodeFromEnd(4)}`);
console.log(`7th node from end: ${sll.findNthNodeFromEnd(6)}`);
console.log(`10th node from end: ${sll.findNthNodeFromEnd(10)}`);
