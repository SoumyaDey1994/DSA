/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (20th September, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (20th September, 2026)
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
    if(this.head === null) return;

    let curr = this.head;
    let prev = null;

    while(curr !== null && curr.next !== null) {
        const adjacentNode = curr.next;
        const nextTarget = adjacentNode.next;
        if(prev === null) {
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
