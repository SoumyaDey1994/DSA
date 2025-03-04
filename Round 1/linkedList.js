/**
 * Date: 12th Jan, 2025
 * Create a Singly linked list with method addNode to insert data at end
 * Create 3 utility methods;
 *      1. Find merge-point of 2 list
 *      2. Add cycle to a list
 *      3. Detect cycles in a list
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

  addNode(newNode) {
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    return this;
  }

  getList() {
    if (!this.head) return;

    let result = "";
    let temp = this.head;
    let visited = new Map();
    while (!visited.has(temp) && temp.next !== null) {
      result = result + temp.data + "-->";
      visited.set(temp, true);
      temp = temp.next;
    }
    result = result + temp.data;
    return result;
  }

  reverseList() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }
}

class LinkedListUtils {
  /**
   * Get length of a linked list
   * @param {*} list
   * @returns
   */
  static getListLength(list) {
    let length = 0;
    let temp = list.head;
    while (temp !== null) {
      length++;
      temp = temp.next;
    }
    return length;
  }
  /**
   * Find intersection point of 2 given linked list
   * @param {*} list1
   * @param {*} list2
   * @returns
   */
  static findMergePoint(list1, list2) {
    if (!list1.head || !list2.head) return;

    const list1Length = this.getListLength(list1); // TC - O(N)
    const list2Length = this.getListLength(list2); // TC - O(N)

    let list1Start = list1.head,
      list2Start = list2.head;
    // get diff & move forward the start pointer of larger list to diff nodes
    if (list1Length > list2Length) {
      const diff = list1Length - list2Length;
      while (diff > 0) {
        // TC - O(N)
        list1Start = list1Start.next;
      }
    } else {
      const diff = list2Length - list1Length;
      while (diff > 0) {
        // TC - O(N)
        list2Start = list2Start.next;
      }
    }
    // Proceed with both list1 & list2, when 2 pointer meets, that's the merge point
    while (list1Start !== null && list2Start !== null) {
      // TC - O(N)
      if (list1Start === list2Start) {
        return list1Start;
      }
      list1Start = list1Start.next;
      list2Start = list2Start.next;
    }
    // If no intersection point, that means 2 lists are disctinct
    return null;
  }

  static addLoop(list, loopNode) {
    if (!list.head) return;

    let temp = list.head;
    let isLoopNodePresent = false;
    while (temp.next !== null) {
      if (temp === loopNode) {
        isLoopNodePresent = true;
      }
      temp = temp.next;
    }
    // check for last node === loopnode
    if (isLoopNodePresent || temp === loopNode) {
      temp.next = loopNode;
    }
  }

  static hasCycle(list) {
    if (!list.head) return;

    let temp = list.head;
    let fast = temp,
      slow = temp;
    while (fast !== null && fast?.next !== null) {
      // slow -> proceed 1 step, fast -> proceed 2 steps at a time
      slow = slow?.next;
      fast = fast.next?.next;
      if (slow === fast) return true;
    }
    return false;
  }
}

const node10 = new Node(10);
const node20 = new Node(20);
const node30 = new Node(30);
const node40 = new Node(40);
const node50 = new Node(50);

const list1 = new SinglyLinkedList();
list1
  .addNode(node10)
  .addNode(node20)
  .addNode(node30)
  .addNode(node40)
  .addNode(node50);
console.log("List1 Representation: ", list1.getList());

const node15 = new Node(15);
const node25 = new Node(25);
const node35 = new Node(35);
const node45 = new Node(45);

const list2 = new SinglyLinkedList();
list2.addNode(node15).addNode(node25).addNode(node35).addNode(node40);
console.log("List2 Representation: ", list2.getList());

const mergePoint = LinkedListUtils.findMergePoint(list1, list2);
console.log(`Merge Point of 2 lists is: `, mergePoint);

LinkedListUtils.addLoop(list1, node20);
console.log(`List 1 Representation for adding cycle: `, list1.getList());
console.log(`List 2 Representation without adding cycle: `, list2.getList());

console.log(`List1 has cycle: ${LinkedListUtils.hasCycle(list1)}`);

const node100 = new Node(100);
const node150 = new Node(150);
const node200 = new Node(200);
const node250 = new Node(250);

const list3 = new SinglyLinkedList()
  .addNode(node100)
  .addNode(node150)
  .addNode(node200)
  .addNode(node250);
console.log("List3 Representation: ", list3.getList());
console.log(`List3 has cycle: ${LinkedListUtils.hasCycle(list3)}`);

list3.reverseList();
console.log("List3 after reverse: ", list3.getList());
