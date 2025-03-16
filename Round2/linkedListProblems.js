/**
 * Date: 8th March, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 * Date: 16th march, 2025
 * Problem Statement:
 *    3. Swap adjacent nodes of a Singly Linked List
 *      Example: 
 *          Input: 1->2->3->4->5
 *          Output: 2->1->4->3->5
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(head, node) {
    if (!head) {
      this.head = node;
      return node;
    }

    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = node;
    return head;
  }

  print(head) {
    if (!head) return;
    let temp = head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
    return head;
  }
  /**
   * Reverse a Linked List – Reverse a singly linked list.
   * Example:
   *      list = 10 -> 7 -> 5 -> 2
   *      output = 2 -> 5 -> 7 -> 10
   * @param {*} head
   * @returns
   */
  reverse(head) {
    if (!head) return;

    let prev = null,
      curr = head;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev; // assign curr next to prev node
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return prev;
  }
  /**
   * Reverse recursively
   * @param {*} curr
   * @param {*} prev
   * @returns
   */
  reverseRecursive(curr = null, prev = null) {
    if (!curr) return prev;
    const next = curr.next;
    curr.next = prev;
    // set prev as head, curr as prev & next as curr
    const newHead = this.reverseRecursive(next, curr);
    return newHead;
  }
  /**
   * Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
   * Example:
   *      list1 = 4 -> 7 -> 9 -> 10
   *      list2 = 5 -> 6 -> 8
   *      output = 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
   * @param {*} head1
   * @param {*} head2
   * @returns
   */
  merge(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    const mergedList = new LinkedList();
    let mergedHead = mergedList.head;
    let temp1 = head1,
      temp2 = head2;

    while (temp1 !== null && temp2 !== null) {
      if (temp1.data < temp2.data) {
        mergedHead = mergedList.insert(mergedHead, new Node(temp1.data));
        temp1 = temp1.next;
      } else {
        mergedHead = mergedList.insert(mergedHead, new Node(temp2.data));
        temp2 = temp2.next;
      }
    }
    // Handle remaining node of each list
    if (temp1 !== null) {
      mergedHead = mergedList.insert(mergedHead, temp1);
    }

    if (temp2 !== null) {
      mergedHead = mergedList.insert(mergedHead, temp2);
    }

    return mergedHead;
  }
  /**
   * Merge recursively
   * @param {*} head1
   * @param {*} head2
   * @returns
   */
  mergeRecursive(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    if (head1.data < head2.data) {
      head1.next = this.mergeRecursive(head1.next, head2);
      return head1;
    } else {
      head2.next = this.mergeRecursive(head1, head2.next);
      return head2;
    }
  }
  /**
   *
   * @returns this
   * a->b->c->d->e
   * b->a->d->c->e
   */
  swapAdjacentNodes() {
    if (!this.head) return;

    let prev = null,
      curr = this.head;

    while (curr !== null && curr.next !== null) {
      const adj = curr.next;
      const nextTarget = adj?.next;
      /**
       * Initial case, when prev is null
       * assign first adj node as head
       * other time, assign adj to prev.next
       */
      if (prev === null) {
        this.head = adj;
      } else {
        prev.next = adj;
      }
      /**
       * assign curr to adj.next
       * assign nextTarget to curr.next
       * assign prev to curr & move curr to nextTarget
       */
      adj.next = curr;
      curr.next = nextTarget;
      prev = curr;
      curr = nextTarget;
    }
    return this;
  }
}

let list1 = new LinkedList();
let list2 = new LinkedList();

const node1 = new Node(10);
const node2 = new Node(8);
const node3 = new Node(5);
const node4 = new Node(4);

let head1 = list1.insert(list1.head, node1);
head1 = list1.insert(list1.head, node2);
head1 = list1.insert(list1.head, node3);
head1 = list1.insert(list1.head, node4);

console.log("List1 elements: ");
list1.print(head1);

const node5 = new Node(6);
const node6 = new Node(9);
const node7 = new Node(15);

let head2 = list2.insert(list2.head, node5);
head2 = list2.insert(list2.head, node6);
head2 = list2.insert(list2.head, node7);

console.log("List2 elements: ");
list2.print(head2);

head1 = list1.reverse(list1.head);
console.log("List1 elements post reverse: ");
list1.print(head1);

// let mergedListHead = list1.merge(head1, head2);
// console.log("Merged List: ");
let mergedListHead = list1.mergeRecursive(head1, head2);
console.log("Merged List (Recursive): ");
list1.print(mergedListHead);

mergedListHead = list1.reverseRecursive(mergedListHead);
console.log("Merged List post reverse (Recursive): ");
list1.print(mergedListHead);

const node8 = new Node(18);
const node9 = new Node(19);
const node10 = new Node(20);
const node11 = new Node(21);
const node12 = new Node(22);
const list3 = new LinkedList();

list3.insert(list3.head, node8);
list3.insert(list3.head, node9);
list3.insert(list3.head, node10);
list3.insert(list3.head, node11);
list3.insert(list3.head, node12);

console.log("List2 before swapping adjacents: ");
list3.print(list3.head);
list3.swapAdjacentNodes();
console.log("List post swapping adjacents: ");
list3.print(list3.head);
