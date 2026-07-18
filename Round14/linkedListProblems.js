/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (18th July, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (18th July, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (18th July, 2026)
 * Problem 4: Find Nth Node from End (SLL) (18th July, 2026)
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
    if (!this.head) return;

    const output = [];
    let temp = this.head;
    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    return output.join("-->");
  }

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

  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;

    while (curr !== null && curr.next !== null) {
      const adjacent = curr.next;
      const nextTarget = adjacent.next;

      if (prev === null) {
        this.head = adjacent;
      } else {
        prev.next = adjacent;
      }

      adjacent.next = curr;
      curr.next = nextTarget;
      prev = curr;
      curr = nextTarget;
    }

    return this;
  }

  detectCycle() {
    if (!this.head) return;

    let slow = this.head,
      fast = this.head;
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
    if (isNaN(n) || n <= 0) return;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return null;

    let curr = this.head;
    while (temp !== null && curr !== null) {
      temp = temp.next;
      curr = curr.next;
    }

    return curr.data;
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

  merge2SortedList(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    const mergedList = new SinglyLinkedList();

    let temp1 = head1,
      temp2 = head2;
    let nextPoint = null;

    while (temp1 !== null && temp2 !== null) {
      if (temp1.data < temp2.data) {
        mergedList.addNode(temp1);
        nextPoint = temp1.next;
        temp1.next = null;
        temp1 = nextPoint;
      } else {
        mergedList.addNode(temp2);
        nextPoint = temp2.next;
        temp2.next = null;
        temp2 = nextPoint;
      }
    }

    return mergedList;
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

console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);

console.log(`.......Merge of 2 Sorted Singly Linked List.......`);

const node19 = new Node(19);
const sortedList1 = new SinglyLinkedList();
sortedList1
  .addNode(new Node(node1.data))
  .addNode(new Node(node3.data))
  .addNode(new Node(node5.data))
  .addNode(new Node(node10.data))
  .addNode(new Node(node19.data))
  .addNode(new Node(node100.data));

console.log(`Sorted List 1: ${sortedList1.getList()}`);
console.log(`Mid-point of Sorted List 1: ${sortedList1.findMidPoint()}`);

const sortedList2 = new SinglyLinkedList();
sortedList2
  .addNode(new Node(node2.data))
  .addNode(new Node(node4.data))
  .addNode(new Node(node12.data))
  .addNode(new Node(node15.data))
  .addNode(new Node(node115.data));

console.log(`Sorted List 2: ${sortedList2.getList()}`);
console.log(`Mid-point of Sorted List 2: ${sortedList2.findMidPoint()}`);

const mergedList = sll.merge2SortedList(sortedList1.head, sortedList2.head);
console.log(`Merged List: ${mergedList.getList()}`);
