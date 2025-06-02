/**
 * Date: 2nd June, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 * Date: 16th march, 2025
 * Problem Statement:
 *    3. Swap adjacent nodes of a Singly Linked List
 *        Example:
 *          Input: 1->2->3->4->5
 *          Output: 2->1->4->3->5
 *    4. Detect Cycle is a Single Linked List
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
    const temp = new Node(data);
    if (!this.head) {
      this.head = temp;
      return this;
    }

    let aux = this.head;
    while (aux.next !== null) {
      aux = aux.next;
    }

    aux.next = temp;
    return this;
  }

  getList() {
    if (!this.head) return;

    let aux = this.head;
    let result = "";
    while (aux.next !== null) {
      result = result + "-->" + aux.data;
      aux = aux.next;
    }

    result = result + "-->" + aux.data;
    return result;
  }
  /**
   * 1(a). Reverse SLL using iterative approach
   * @returns list instance
   */
  reverseListIterative() {
    if (!this.head) return;

    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }

  /**
   * 1(b). Reverse SLL using recursive approach
   * @param {*} curr
   * @param {*} prev
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
   * 2. Merge 2 Sorted Singly Linked List
   * @param {*} list1
   * @param {*} list2
   * @returns
   */
  mergeLists(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;

    const sortedList = new SinglyLinkedList();
    let temp1 = list1.head,
      temp2 = list2.head;
    while (temp1 !== null && temp2 !== null) {
      if (temp1.data <= temp2.data) {
        sortedList.insertNode(temp1.data);
        temp1 = temp1.next;
      } else {
        sortedList.insertNode(temp2.data);
        temp2 = temp2.next;
      }
    }

    while (temp1) {
      sortedList.insertNode(temp1.data);
      temp1 = temp1.next;
    }

    while (temp2) {
      sortedList.insertNode(temp2.data);
      temp2 = temp2.next;
    }

    return sortedList;
  }

  /**
   * 3. Swap adjacent nodes of Singly Linked List
   * @returns list instance
   */
  swapAdjNodes() {
    if (!this.head) return;

    let prev = null;
    let curr = this.head;

    while (curr !== null && curr.next !== null) {
      let adj = curr.next;
      let nextTarget = adj.next;
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
    return this;
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
