/**
 * Date: 27th July, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Swap adjacent nodes of a Singly Linked List
 *    3. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 * Date: 3rd June, 2025
 * Problem Statement:
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

    let result = this.head.data;
    let temp = this.head.next;
    while (temp !== null) {
      result = result + "--->" + temp.data;
      temp = temp.next;
    }

    return result;
  }
  /**
   * Reverse Single Linked List
   */
  reverseList() {
    if (!this.head) return;

    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    this.head = prev;
    return this;
  }

  /**
   * Reverse a Singly Linked List using Recursion
   * @param {*} curr
   * @param {*} prev
   */
  reverseListRecursive(curr = this.head, prev = null) {
    if (!curr) {
      this.head = prev;
      return this;
    }

    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    return this.reverseListRecursive(curr, prev);
  }
  /**
   * Swap Adjacent nodes of a Single Linked List
   * @returns
   */
  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null;
    let curr = this.head;

    while (curr !== null && curr.next !== null) {
      let adj = curr.next;
      const nextTarget = adj.next;
      if (prev === null) {
        this.head = adj;
      } else {
        prev.next = adj;
      }

      curr.next = nextTarget;
      adj.next = curr;
      prev = curr;
      curr = nextTarget;
    }

    return this;
  }

  mergeTwoSortedList(head1, head2) {
    if (!head1 || !head2) return;

    let temp1 = head1,
      temp2 = head2;
    const mergedList = new SinglyLinkedList();
    while (temp1 !== null && temp2 !== null) {
      let node = null;
      if (temp1.data < temp2.data) {
        node = new Node(temp1.data);
        mergedList.addNode(node);
        temp1 = temp1.next;
      } else {
        node = new Node(temp2.data);
        mergedList.addNode(node);
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
}

let list = new SinglyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

list.addNode(node1).addNode(node2).addNode(node3).addNode(node4).addNode(node5);
console.log(`Initial List: ${list.getList()}`);
list = list.reverseList();
console.log(`List Post Reverse (Iterative): ${list.getList()}`);

const node11 = new Node(11);
const node12 = new Node(12);
const node13 = new Node(13);
list.addNode(node11).addNode(node12).addNode(node13);
console.log(`List Post Adding 3 new nodes: ${list.getList()}`);

list = list.reverseListRecursive();
console.log(`List Post Reverse (Recursive): ${list.getList()}`);

list = list.swapAdjacentNodes();
console.log(`List Post Swapping Adjacents: ${list.getList()}`);

let list2 = new SinglyLinkedList();
list2.addNode(new Node(10)).addNode(new Node(15)).addNode(new Node(20));
let list3 = new SinglyLinkedList();
list3.addNode(new Node(12)).addNode(new Node(14)).addNode(new Node(22));

const mergedList = list.mergeTwoSortedList(list2.head, list3.head);
console.log(`Merged List Becomes: ${mergedList.getList()}`);
