/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (15th April, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (15th April, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (15th April, 2026)
 * Problem 4: Find Nth Node from End (SLL) (15th April, 2026)
 * Problem 5: Merge 2 Sorted SLL (17th April, 2026)
 * Problem 6: Find mid-point of a SLL (16th April, 2026)
 * Problem 7: Find intersection-point of a SLL (17th April, 2026)
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
  /**
   * Check wether a Linked List has cycle or not
   * @returns
   */
  detectCycle() {
    if (!this.head) return false;

    let slow = this.head,
      fast = this.head;

    ((slow = slow.next), (fast = fast.next?.next));

    while (slow && fast) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast.next?.next;
    }

    return false;
  }

  /**
   * Find nth node from end of Singly Linked List
   * @param {*} n
   * @returns
   */
  findNthNodeFromEnd(n) {
    if (!this.head) return null;
    if (!n || n === 0) return null;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return null;

    let temp2 = this.head;

    while (temp !== null && temp2 !== null) {
      temp2 = temp2.next;
      temp = temp.next;
    }

    return temp2.data;
  }

  /**
   * Find midpoint of a Singly Linked List
   * @returns
   */
  findMidPoint() {
    if (this.head === null) return null;

    let slow = this.head,
      fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }

  /**
   * Merge 2 Sorted Singly Linked List
   * @param {*} list1
   * @param {*} list2
   * @returns
   */
  merge2SortedList(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    const mergedList = new SinglyLinkedList();
    let temp1 = list1.head,
      temp2 = list2.head;
    while (temp1 && temp2) {
      if (temp1.data < temp2.data) {
        mergedList.addNode(new Node(temp1.data));
        temp1 = temp1.next;
      } else {
        mergedList.addNode(new Node(temp2.data));
        temp2 = temp2.next;
      }
    }

    while (temp1 !== null) {
      mergedList.addNode(new Node(temp1.data));
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      mergedList.addNode(new Node(temp2.data));
      temp2 = temp2.next;
    }

    return mergedList;
  }

  findIntersectionPoint(list1, list2) {
    if (!list1 || !list2) return null;

    let list1Length = 0,
      list2Length = 0;
    let temp1 = list1.head,
      temp2 = list2.head;

    while (temp1 !== null) {
      list1Length++;
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      list2Length++;
      temp2 = temp2.next;
    }

    const greaterList = list1Length > list2Length ? list1 : list2;
    const smallerList = list1Length < list2Length ? list1 : list2;
    let delta = Math.abs(list1Length - list2Length);

    ((temp1 = greaterList.head), (temp2 = smallerList.head));
    while (delta > 0 && temp1 !== null) {
      temp1 = temp1.next;
      delta--;
    }

    while (temp1 !== null && temp2 !== null) {
      if (temp1 === temp2) {
        return temp1;
      }

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

const sortedList1 = new SinglyLinkedList();
sortedList1
  .addNode(new Node(node1.data))
  .addNode(new Node(node3.data))
  .addNode(new Node(node5.data))
  .addNode(new Node(node10.data))
  .addNode(new Node(node100.data));

console.log(`List 1: ${sll.getList()}`);
console.log(`Sorted List 1: ${sortedList1.getList()}`);

console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);
console.log(`Mid-point of Sorted List 1: ${sortedList1.findMidPoint()}`);

const sortedList2 = new SinglyLinkedList();
sortedList2
  .addNode(new Node(node2.data))
  .addNode(new Node(node4.data))
  .addNode(new Node(node12.data))
  .addNode(new Node(node15.data))
  .addNode(new Node(node115.data));

const mergedList = sll.merge2SortedList(sortedList1, sortedList2);
console.log(`Merged List: ${mergedList.getList()}`);

console.log(`-------Testing Merge-point of 2 SLL----------`);

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

const mergePoint = list1.findIntersectionPoint(list1, list2);
console.log(`Merge-point of 2 list is: ${mergePoint.data}`);
