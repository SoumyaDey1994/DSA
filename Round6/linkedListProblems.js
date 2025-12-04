/**
 * Date: 4th Dec, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 * Date: 5th Dec, 2025
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
 *    6. Find Merge-point of 2 SLL
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
