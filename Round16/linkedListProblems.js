/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (20th September, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (20th September, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (27th September, 2026)
 * Problem 4: Find Nth Node from End (SLL) (27th September, 2026)
 * Problem 5: Merge 2 Sorted SLL (27th September, 2026)
 * Problem 6: Find mid-point of a SLL (27th September, 2026)
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

    let output = [];
    let temp = this.head;
    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    return output.join("-->");
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
      const adjacentNode = curr.next;
      const nextTarget = adjacentNode.next;
      if (prev === null) {
        this.head = adjacentNode;
      } else {
        prev.next = adjacentNode;
      }

      curr.next = nextTarget;
      adjacentNode.next = curr;
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
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast.next?.next;
    }

    return false;
  }

  findNthNodeFromEnd(n) {
    if (this.head === null) return;
    if (!n || n <= 0) return;

    let temp = this.head;
    let temp2 = this.head;

    while (temp !== null && n > 0) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return;

    while (temp !== null && temp2 !== null) {
      temp2 = temp2.next;
      temp = temp.next;
    }

    return temp2.data;
  }

  findMidPoint() {
    if (this.head === null) return;

    let slow = this.head,
      fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next?.next;
    }

    return slow.data;
  }

  findIntersection(head1, head2) {
    if (!head1 || !head2) return;

    let temp1 = head1,
      temp2 = head2;
    let length1 = 0,
      length2 = 0;
    while (temp1 !== null) {
      length1++;
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      length2++;
      temp2 = temp2.next;
    }

    let delta = Math.abs(length1 - length2);
    temp1 = head1;
    temp2 = head2;

    while (delta > 0) {
      if (length1 > length2) {
        temp1 = temp1.next;
      } else {
        temp2 = temp2.next;
      }
      delta--;
    }

    while (temp1 !== null && temp2 !== null) {
      if (temp1 === temp2) return temp1;

      temp1 = temp1.next;
      temp2 = temp2.next;
    }

    return null;
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

const node100 = new Node(100);
const node120 = new Node(120);
const node150 = new Node(150);
sll.addNode(node100).addNode(node120).addNode(node150);
console.log(`List post new set of inserts: ${sll.getList()}`);

sll.swapAdjacentNodes();
console.log(`List post swapping adjacents (2nd Time): ${sll.getList()}`);

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

console.log(`\n\nCurrent State of List 1: ${sll.getList()}`);
console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);

console.log(`-------Testing Intersection-point of 2 SLL----------`);

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(3);
const nodeD = new Node(4);
const nodeE = new Node(5);
const nodeF = new Node(6);
const nodeG = new Node(60);
const commonNode = new Node(50);

list1.addNode(nodeA).addNode(nodeB).addNode(commonNode);

list2
  .addNode(nodeC)
  .addNode(nodeD)
  .addNode(nodeE)
  .addNode(nodeF)
  .addNode(commonNode)
  .addNode(nodeG);

console.log(`List 1: ${list1.getList()}`);
console.log(`List 2: ${list2.getList()}`);

const mergePoint = list1.findIntersection(list1.head, list2.head);
console.log(`Merge-point of 2 list is: ${mergePoint.data}`);
