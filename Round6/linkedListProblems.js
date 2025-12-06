/**
 * Date: 4th Dec, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 * Date: 6th Dec, 2025
 * Problem Statement:
 *    3. Swap adjacent nodes of a Singly Linked List
 *    4. Find Nth Element of a SLL from End
 *          Input: 1->2->3->4->5....., N = 2
 *          Output: 4
 *    5. Detect Cycle is a Single Linked List
 *        Example 1:
 *          Input: 1->2->3->4->2.....
 *          Output: true
 *        Example 2:
 *          Input: 12->15->17->20
 *          Output: false
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

  insertNode(data) {
    const node = new Node(data);
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
   * Reverse Single Linked list using iteration
   * @returns
   */
  reverseListIterative() {
    if (!this.head) return;

    let curr = this.head,
      prev = null;

    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
  /**
   * Reverse Single Linked list using recursion
   * @returns
   */
  reverseListRecursive(curr = this.head, prev = null) {
    if (!curr) {
      this.head = prev;
      return this;
    }

    const next = curr.next;
    curr.next = prev;
    return this.reverseListRecursive(next, curr);
  }
  /**
   * Merge 2 sorted singly linked list
   * @returns
   */
  mergeLists(list1, list2) {
    let temp1 = list1.head;
    let temp2 = list2.head;

    const mergedList = new SinglyLinkedList();
    while (temp1 !== null && temp2 !== null) {
      if (temp1.data < temp2.data) {
        mergedList.insertNode(temp1.data);
        temp1 = temp1.next;
      } else {
        mergedList.insertNode(temp2.data);
        temp2 = temp2.next;
      }
    }

    while (temp1 !== null) {
      mergedList.insertNode(temp1.data);
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      mergedList.insertNode(temp2.data);
      temp2 = temp2.next;
    }

    return mergedList;
  }
  /**
   * Swap adjacent nodes of a Singly Linked List
   * @returns
   */
  swapAdjNodes() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;
    while (curr !== null && curr.next !== null) {
      const adj = curr.next;
      const next = adj.next;
      if (prev === null) {
        this.head = adj;
      } else {
        prev.next = adj;
      }
      prev = curr;
      adj.next = curr;
      curr.next = next;
      curr = next;
    }

    return this;
  }
  /**
   * Find Nth element from end of SLL
   * @param {*} n
   * @returns
   */
  findNthElementFromEnd(n) {
    if (!this.head) return;

    let temp = this.head;
    let temp2 = this.head;

    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    while (temp !== null) {
      temp = temp.next;
      temp2 = temp2.next;
    }

    return temp2.data;
  }

  addCycle(data) {
    if (!data || !this.head) return;

    let temp = this.head;
    let prev = null;
    let target = null;
    while (temp !== null) {
      if (temp.data === data) {
        target = temp;
      }
      prev = temp;
      temp = temp.next;
    }

    if (target !== null) {
      prev.next = target;
      console.log(`Prev: ${prev.data}`);
    }

    return this;
  }
  /**
   * Detect cycle in a SLL
   * @returns boolean & target node
   */
  detectCyle() {
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;
    let hasCycle = false;
    let cyclicNode = null;

    slow = slow.next;
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) {
        hasCycle = true;
        break;
      }
      slow = slow?.next;
      fast = fast?.next?.next;
    }

    if (hasCycle) {
      let temp = this.head;
      while (temp !== null) {
        if (temp === slow) {
          cyclicNode = temp;
          break;
        }
        temp = temp?.next;
        slow = slow?.next;
      }
    }

    return [hasCycle, cyclicNode];
  }
}

const list = new SinglyLinkedList();
list.insertNode(10).insertNode(20).insertNode(25).insertNode(30);
console.log(`List: ${list.getList()}`);
list.reverseListIterative();
console.log(`List Post Reverse(Iterative): ${list.getList()}`);

list.insertNode(8).insertNode(5).insertNode(3);
console.log(`List Post Adding new elements: ${list.getList()}`);
list.reverseListRecursive();
console.log(`List Post Reverse (Recursive): ${list.getList()}`);

const list2 = new SinglyLinkedList();
list2.insertNode(7).insertNode(15).insertNode(18).insertNode(23).insertNode(35);
console.log(`List2: ${list2.getList()}`);

const sortedList = list.mergeLists(list, list2);
console.log(`Sorted List Post Merge List & List2: ${sortedList.getList()}`);

sortedList.insertNode(40).insertNode(45).insertNode(50);
console.log(`Sorted List Post Adding new elements: ${sortedList.getList()}`);

sortedList.swapAdjNodes();
console.log(`Sorted List Post Swapping adjacents: ${sortedList.getList()}`);

console.log("\n");
let elementOfListFromEnd = list.findNthElementFromEnd(2);
let elementOfList2FromEnd = list2.findNthElementFromEnd(1);
let elementOfSortedListFromEnd = sortedList.findNthElementFromEnd(5);

console.log(
  `Elements from End: List(-2):${elementOfListFromEnd}, List(-1):${elementOfList2FromEnd}, SortedList(-5):${elementOfSortedListFromEnd}`
);
elementOfSortedListFromEnd = sortedList.findNthElementFromEnd(15);
console.log(`Elements from End: SortedList(-15):${elementOfSortedListFromEnd}`);

list.addCycle(8);
let [isExists, node] = list.detectCyle();
console.log(`Cycle node exists in List ? ${isExists}, Node: ${node?.data}`);
[isExists, node] = list2.detectCyle();
console.log(`Cycle node exists in List2 ? ${isExists}, Node: ${node?.data}`);
