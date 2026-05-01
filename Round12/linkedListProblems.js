/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (1st May, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (1st May, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (1st May, 2026)
 * Problem 4: Remove Cycle from Cyclic Linked List (1st May, 2026)
 * Problem 5: Find Nth Node from End (SLL) ()
 * Problem 6: Merge 2 Sorted SLL ()
 * Problem 7: Find mid-point of a SLL ()
 * Problem 8: Find intersection-point of a SLL ()
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

    function reverse(prev, curr) {
      if (curr === null) {
        return prev;
      }
      const next = curr.next;
      curr.next = prev;
      return reverse(curr, next);
    }

    this.head = reverse(null, this.head);
    return this;
  }

  /**
   * Swap adjacent nodes of a linked list
   * @returns
   */
  swapAdjacentNodes() {
    if (!this.head) return;
    // 1-->2-->3-->4 ====> 2-->1-->3-->4 ===> 2-->1-->4-->3
    let curr = this.head,
      adj = curr.next,
      prev = null;
    while (curr !== null && adj !== null) {
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
      adj = curr.next;
    }
  }

  /**
   * Detect Cycle in a Linked List
   * @returns 
   */
  detectCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    slow = slow.next;
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) return slow;
      slow = slow.next;
      fast = fast?.next?.next;
    }

    return false;
  }

  /**
   * Remove cycle from a Linked List
   * @returns 
   */
  removeCycle() {
    if (!this.head) return null;

    const intersectionNode = this.detectCycle();
    if (!intersectionNode) return null;

    let nextStart = intersectionNode;
    let prev = null,
      currHead = this.head;

    while (currHead !== nextStart) {
      prev = nextStart;
      nextStart = nextStart.next;
      currHead = currHead.next;
    }

    prev.next = null;
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

const cyclicList = new SinglyLinkedList();
const node100 = new Node(100);
const node105 = new Node(105);
const node110 = new Node(110);
const node115 = new Node(115);
const node120 = new Node(120);
cyclicList
  .addNode(node100)
  .addNode(node105)
  .addNode(node110)
  .addNode(node115)
  .addNode(node120)
  .addNode(node105);

console.log(`Is List 1 cyclic: ${sll.detectCycle() && true}`);
console.log(`Is List 2 cyclic: ${cyclicList.detectCycle() && true}`);

cyclicList.removeCycle();
console.log(`CyclicList post removing cycle: ${cyclicList.getList()}`);
