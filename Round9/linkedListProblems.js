/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (8th March, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (8th March, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (9th March, 2026)
 * Problem 4: Find Nth Node from End (SLL) (9th March, 2026)
 * Problem 5: Merge 2 Sorted SLL (9th March, 2026)
 * Problem 6: Find mid-point of a SLL (9th March, 2026)
 * 
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

  detectCycle() {
    if (!this.head) return;

    let slow = this.head,
      fast = this.head;
    ((slow = slow.next), (fast = fast.next?.next));

    while (slow !== null && fast !== null) {
      if (slow === fast) return true;

      slow = slow.next;
      fast = fast?.next?.next;
    }

    return false;
  }

  findNthNodeFromEnd(n) {
    if (!this.head) return;
    if (n <= 0) return null;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    if (n > 0) return null;

    let auxHead = this.head;
    while (temp !== null) {
      auxHead = auxHead.next;
      temp = temp.next;
    }

    return auxHead.data;
  }

  merge2SortedList(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    const mergedList = new SinglyLinkedList();
    let temp1 = list1.head,
      temp2 = list2.head;

    while (temp1 !== null && temp2 !== null) {
      if (temp1.data < temp2.data) {
        mergedList.insert(new Node(temp1.data));
        // mergedList.insert(temp1);
        temp1 = temp1.next;
      } else {
        mergedList.insert(new Node(temp2.data));
        // mergedList.insert(temp2);
        temp2 = temp2.next;
      }
    }

    while (temp1 !== null) {
      mergedList.insert(new Node(temp1.data));
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      mergedList.insert(new Node(temp2.data));
      temp2 = temp2.next;
    }

    return mergedList;
  }

  merge2SortedListRecursive(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.data <= list2.data) {
      list1.next = this.merge2SortedListRecursive(list1.next, list2);
      return list1;
    } else {
      list2.next = this.merge2SortedListRecursive(list1, list2.next);
      return list2;
    }
  }

  findMidPoint() {
    if (!this.head) return null;

    let slow = this.head,
      fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
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

const cyclicList = new SinglyLinkedList();

const node100 = new Node(100);
const node105 = new Node(105);
const node110 = new Node(110);
const node115 = new Node(115);
cyclicList
  .insert(node100)
  .insert(node105)
  .insert(node110)
  .insert(node115)
  .insert(node105);

console.log(`Is List 1 cyclic: ${sll.detectCycle()}`);
console.log(`Is List 2 cyclic: ${cyclicList.detectCycle()}`);

console.log(`1st node from end: ${sll.findNthNodeFromEnd(1)}`);
console.log(`3rd node from end: ${sll.findNthNodeFromEnd(3)}`);
console.log(`4th node from end: ${sll.findNthNodeFromEnd(4)}`);
console.log(`7th node from end: ${sll.findNthNodeFromEnd(7)}`);
console.log(`10th node from end: ${sll.findNthNodeFromEnd(10)}`);

const sortedList1 = new SinglyLinkedList();
const sortedList2 = new SinglyLinkedList();

sortedList1
  .insert(new Node(node1.data))
  .insert(new Node(node3.data))
  .insert(new Node(node5.data))
  .insert(new Node(node10.data))
  .insert(new Node(node100.data));

sortedList2
  .insert(new Node(node2.data))
  .insert(new Node(node4.data))
  .insert(new Node(node12.data))
  .insert(new Node(node15.data))
  .insert(new Node(node115.data));

// console.log("Hello")
console.log(`Sorted List 1: ${sortedList1.getList()}`);
console.log(`Sorted List 2: ${sortedList2.getList()}`);

const mergedList = sll.merge2SortedList(sortedList1, sortedList2);
console.log(`Merged List: ${mergedList.getList()}`);

// const mergedList2 = sll.merge2SortedListRecursive(sortedList1, sortedList2);
// console.log(`Merged List: ${mergedList2.getList()}`);

console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);
console.log(`Mid-point of Sorted List 1: ${sortedList1.findMidPoint()}`);
console.log(`Mid-point of Merged List: ${mergedList.findMidPoint()}`);
