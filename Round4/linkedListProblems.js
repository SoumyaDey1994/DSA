/**
 * Date: 2nd June, 2025
 * Problem Statements:
 *    1. Reverse a Linked List – Reverse a singly linked list. (Iterative & Recursive)
 *    2. Merge Two Sorted Lists – Merge two sorted linked lists into one sorted list.
 *    3. Swap adjacent nodes of a Singly Linked List
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

  insertCompleteNode(node) {
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

  /**
   * 4. Find Nth Element from end in SLL
   * @param {*} n
   * @returns
   */
  findNthElementFromEnd(n) {
    if (!this.head || n <= 0) return;

    let aux = this.head,
      temp = this.head;
    // increment aux n position
    while (aux !== null && n > 0) {
      aux = aux.next;
      n--;
    }

    if (aux === null) return null;

    while (aux !== null) {
      aux = aux.next;
      temp = temp.next;
    }

    return temp.data;
  }
  /**
   * Add cycle to SLL
   * @param {*} data
   * @returns
   */
  addCycle(data) {
    if (!this.head) return;

    let temp = this.head;
    // find the node with target data
    while (temp !== null) {
      if (temp.data === data) {
        break;
      }
      temp = temp.next;
    }

    if (temp === null) return;

    let aux = this.head;
    // traverse to last node
    while (aux.next !== null) {
      aux = aux.next;
    }

    aux.next = temp;
    console.log(`Cycle added to list`);
  }
  /**
   * 5. Detect cycle & find cyclic node (if exists) in SLL
   * @returns
   */
  detectCyle() {
    if (!this.head) return;

    let slow = this.head,
      fast = this.head;

    slow = slow?.next;
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      // console.log(slow.data, fast.data);
      if (slow === fast) break;

      slow = slow?.next;
      fast = fast?.next?.next;
    }
    // if slow is null, means no cycle
    if (slow === null) return [false, null];
    // Identify the cyclic node
    let aux = this.head;
    while (aux !== slow) {
      aux = aux.next;
      slow = slow.next;
    }

    return [true, aux];
  }
}
/**
 * 6. Find Merging node of 2 diff SLL
 * @param {*} listA
 * @param {*} listB
 * @returns
 */
function findMergePoint(listA, listB) {
  if (!listA.head || !listB.head) return;

  let temp = listA.head;
  let lengthA = 0,
    lengthB = 0;
  while (temp !== null) {
    lengthA++;
    temp = temp.next;
  }

  temp = listB.head;

  while (temp !== null) {
    lengthB++;
    temp = temp.next;
  }

  let auxA = listA.head,
    auxB = listB.head;
  //increment starting point of larger list by delta(lengthA, lengthB)
  if (lengthA > lengthB) {
    let diff = lengthA - lengthB;
    while (diff > 0) {
      auxA = auxA.next;
      diff--;
    }
  } else {
    let diff = lengthB - lengthA;
    while (diff > 0) {
      auxB = auxB.next;
      diff--;
    }
  }

  // check when both auxA & auxB points to same node
  // thats the merge point
  while (auxA !== null && auxB !== null) {
    if (auxA === auxB) return auxA;

    auxA = auxA.next;
    auxB = auxB.next;
  }

  return null;
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
// add cycle, last node points to node having data 8
list.addCycle(8);

let [isExists, node] = list.detectCyle();
console.log(`Cycle node exists in List ? ${isExists}, Node: ${node?.data}`);
[isExists, node] = list2.detectCyle();
console.log(`Cycle node exists in List2 ? ${isExists}, Node: ${node?.data}`);

const list3 = new SinglyLinkedList();
const list4 = new SinglyLinkedList();

const node50 = new Node(50);
const node53 = new Node(53);
const node56 = new Node(56);
const node58 = new Node(58);
const node60 = new Node(60);
const node63 = new Node(63);
const node65 = new Node(66);

list3
  .insertCompleteNode(node50)
  .insertCompleteNode(node60)
  .insertCompleteNode(node63)
  .insertCompleteNode(node65);
list4
  .insertCompleteNode(node53)
  .insertCompleteNode(node56)
  .insertCompleteNode(node58)
  .insertCompleteNode(node60);

console.log("\n");
console.log(`List3: ${list3.getList()}`);
console.log(`List4: ${list4.getList()}`);

const mergePoint = findMergePoint(list3, list4);
console.log(`Merge Point of List3 & List4 is: ${mergePoint?.data}`);
