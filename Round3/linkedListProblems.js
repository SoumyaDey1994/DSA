/**
 * Date: 18th April, 2025
 * Problem Statement:
 *      1. Reverse a Singly Linked List
 *      2. Merge 2 Sorted SLL
 *      3. Swap adjacent nodes of a SLL
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(headData) {
    this.head = null;
    if (headData) {
      this.head = new Node(headData);
    }
  }

  addNode(data) {
    const newNode = new Node(data);
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
}

class SinglyLinkedListUtils {
  constructor() {}

  getList(head) {
    if (!head) return;

    let output = "";
    let temp = head;
    while (temp.next !== null) {
      output = output + temp.data + "-->";
      temp = temp.next;
    }
    output = output + temp.data;
    return output;
  }
  /**
   * Reverse a SLL using Iterative approach
   * Return new head node post reverse
   * @param {*} head
   * @param {*} prev
   * @returns
   */
  reverseList(head, prev = null) {
    if (!head) return prev;

    let curr = head;
    while (curr != null) {
      const nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    return prev;
  }
  /**
   * Reverse a SLL using Recursive approach
   * Return new head node post reverse
   * @param {*} head
   * @param {*} prev
   * @returns
   */
  reverseListRecursive(head, prev = null) {
    if (!head) return prev;

    const curr = head;
    const nxt = curr.next;
    curr.next = prev;
    prev = curr;
    return this.reverseListRecursive(nxt, prev);
  }

  mergeList(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    let temp1 = head1,
      temp2 = head2;

    let mergedList = new SinglyLinkedList();

    while (temp1 !== null && temp2 !== null) {
      if (temp1.data <= temp2.data) {
        mergedList = mergedList.addNode(temp1.data);
        temp1 = temp1.next;
      } else {
        mergedList = mergedList.addNode(temp2.data);
        temp2 = temp2.next;
      }
    }

    while (temp1 != null) {
      mergedList.addNode(temp1.data);
      temp1 = temp1.next;
    }

    while (temp2 != null) {
      mergedList.addNode(temp2.data);
      temp2 = temp2.next;
    }

    return mergedList.head;
  }
  /**
   * Swap nodes of SLL in pair
   * @param {*} head
   * @returns
   */
  swapAdjacentNodes(head) {
    if (!head) return;

    let prev = null,
      curr = head;
    let newHead = null;
    while (curr.next !== null) {
      let nextNode = curr.next;
      let nextTarget = nextNode.next;

      if (prev === null) {
        newHead = nextNode;
      } else {
        prev.next = nextNode;
      }
      nextNode.next = curr;
      curr.next = nextTarget;
      prev = curr;
      curr = nextTarget;
    }

    return newHead;
  }
}

const sll = new SinglyLinkedList(10);
const sllUtils = new SinglyLinkedListUtils();

sll.addNode(20).addNode(30).addNode(40).addNode(50);
console.log("List: ", sllUtils.getList(sll.head));

const sllHeadPostReverse = sllUtils.reverseList(sll.head);
console.log("List post reverse: ", sllUtils.getList(sllHeadPostReverse));

const sllHeadPostReverseRecursive =
  sllUtils.reverseListRecursive(sllHeadPostReverse);
console.log(
  "List post reverse (recursive): ",
  sllUtils.getList(sllHeadPostReverseRecursive)
);

const sll2 = new SinglyLinkedList(15);
sll2.addNode(22).addNode(28).addNode(35).addNode(38).addNode(45);

const mergedListHead = sllUtils.mergeList(sll.head, sll2.head);
console.log("Merged Result of 2 SLL: ", sllUtils.getList(mergedListHead));

const headAfterSwappingAdj = sllUtils.swapAdjacentNodes(mergedListHead);
console.log(
  "SLL post swapping adjacent nodes: ",
  sllUtils.getList(headAfterSwappingAdj)
);
