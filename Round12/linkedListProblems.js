/**
 * Singly Linked List Problems
 * Problem 1: Reverse a Singly Linked List (1st May, 2026)
 * Problem 2: Swap adjacent nodes of a Singly Linked List (1st May, 2026)
 * Problem 3: Detect Cycle in a Singly Linked List (1st May, 2026)
 * Problem 4: Remove Cycle from Cyclic Linked List (1st May, 2026)
 * Problem 5: Find mid-point of a SLL (2nd May, 2026)
 * Problem 6: Find Nth Node from End (SLL) (2nd May, 2026)
 * Problem 7: Merge 2 Sorted SLL (2nd May, 2026)
 * Problem 8: Find intersection-point of a SLL (3rd May, 2026)
 * Problem 9: Merged K Sorted Singly Linked List (3rd May, 2026)
 * Problem 10: Reverse Linked List II - Reverse within given pointers ()
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
    if (this.head === null) {
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

    function reverse(prev, curr) {
      if (curr === null) {
        return prev;
      }
      const next = curr.next;
      curr.next = prev;
      return reverse(curr, next);
    }

    this.head = reverse(null, this.head);
    return this;
  }

  /**
   * Swap adjacent nodes of a linked list
   * @returns
   */
  swapAdjacentNodes() {
    if (!this.head) return;
    // 1-->2-->3-->4 ====> 2-->1-->3-->4 ===> 2-->1-->4-->3
    let curr = this.head,
      adj = curr.next,
      prev = null;
    while (curr !== null && adj !== null) {
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
      adj = curr.next;
    }
  }

  /**
   * Detect Cycle in a Linked List
   * @returns
   */
  detectCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    slow = slow.next;
    fast = fast.next?.next;

    while (slow !== null && fast !== null) {
      if (slow === fast) return slow;
      slow = slow.next;
      fast = fast?.next?.next;
    }

    return false;
  }

  /**
   * Remove cycle from a Linked List
   * @returns
   */
  removeCycle() {
    if (!this.head) return null;

    const intersectionNode = this.detectCycle();
    if (!intersectionNode) return null;

    let nextStart = intersectionNode;
    let prev = null,
      currHead = this.head;

    while (currHead !== nextStart) {
      prev = nextStart;
      nextStart = nextStart.next;
      currHead = currHead.next;
    }

    prev.next = null;
    return this;
  }

  /**
   * Find mid-point of Singly Linked List
   * @returns
   */
  findMidPoint() {
    if (!this.head) return;

    let slow = this.head,
      fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next?.next;
    }

    return slow.data;
  }

  /**
   * Find Nth node from end of a Singly Linked List
   * @param {*} n
   * @returns
   */
  findNthNodeFromEnd(n) {
    if (!this.head) return null;
    if (n === 0) return null;

    let temp = this.head;
    while (n > 0 && temp !== null) {
      temp = temp.next;
      n--;
    }

    if (temp === null) return null;

    let temp2 = this.head;
    while (temp !== null) {
      temp = temp.next;
      temp2 = temp2.next;
    }

    return temp2.data;
  }

  /**
   * Merge 2 Sorted Singly Linked List
   * @param {*} list1Head
   * @param {*} list2Head
   * @returns
   */
  merge2SortedList(list1Head, list2Head) {
    if (!list1Head && !list2Head) return;

    const mergedList = new SinglyLinkedList();
    let temp1 = list1Head,
      temp2 = list2Head;

    while (temp1 !== null && temp2 !== null) {
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
  /**
   * Find Intersection point of 2 SLL
   * @param {*} list1Head
   * @param {*} list2Head
   * @returns
   */
  findIntersectionPoint(list1Head, list2Head) {
    if (!list1Head || !list2Head) return null;

    let temp1 = list1Head,
      temp2 = list2Head;
    let list1Length = 0,
      list2Length = 0,
      delta = 0;

    while (temp1 !== null) {
      list1Length++;
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      list2Length++;
      temp2 = temp2.next;
    }

    ((temp1 = list1Head), (temp2 = list2Head));
    if (list1Length > list2Length) {
      delta = list1Length - list2Length;
      while (delta > 0) {
        temp1 = temp1.next;
        delta--;
      }
    } else {
      delta = list2Length - list1Length;
      while (delta > 0) {
        temp2 = temp2.next;
        delta--;
      }
    }

    while (temp1 !== null && temp2 !== null) {
      if (temp1 === temp2) return temp1;

      temp1 = temp1.next;
      temp2 = temp2.next;
    }

    return null;
  }
  /**
   * Merge K Sorted Singly Linked List
   * TC: O(k^2 * n)
   * @param {*} listHeads
   * @returns
   */
  mergeKSortedLists(...listHeads) {
    if (!listHeads || listHeads.length === 0) return;

    const mergedList = new SinglyLinkedList();
    const indexMap = new Map();
    // setting index: node mapping
    for (let i = 0; i < listHeads.length; i++) {
      indexMap.set(i, listHeads[i]);
    }

    function merge(indexMap) {
      if (indexMap.size === 0) return;

      let minVal = Infinity,
        minValNode = null,
        minValNodeIndex = -1;
      // find min value & its corresponding node index
      for (let [index, node] of indexMap) {
        // O(n)
        if (node.data < minVal) {
          minVal = node.data;
          minValNode = node;
          minValNodeIndex = index;
        }
      }

      // console.log(`Min Node: ${minValNode}`)
      mergedList.addNode(new Node(minVal));
      if (minValNode.next === null) {
        indexMap.delete(minValNodeIndex);
      } else {
        indexMap.set(minValNodeIndex, minValNode.next);
      }

      merge(indexMap); // Recursive call - O(K)
    }

    merge(indexMap); // O(k)
    return mergedList;
  }

  /**
   * Given a singly linked list and two integers 'left' and 'right',
   * reverse the nodes of the list from position 'left' to position 'right' (1-indexed),
   * and return the reversed list.
   * @param {*} head
   * @param {*} left
   * @param {*} right
   * @returns
   */
  reverseBetween(list, left, right) {
    // Edge case: if left == right, no reversal needed
    if (left === right) return list;

    // Create a dummy node to handle cases where left = 1
    const dummy = new Node(0);
    dummy.next = list.head;

    // Step 1: Find the node just before 'left' position
    let beforeLeft = dummy;
    for (let i = 0; i < left - 1; i++) {
      beforeLeft = beforeLeft.next;
    }

    // Step 2: Start reversing - use "move node forward" approach
    // prev stays at beforeLeft
    // current is the first node in the reversal region
    let prev = beforeLeft;
    let current = beforeLeft.next;

    // Reverse the sublist from left to right
    // By moving nodes forward (right - left) times
    for (let i = 0; i < right - left; i++) {
      // 1. Save the next node to be moved
      const nextTarget = current.next;

      // 2. Remove next from current position: current.next = next.next
      current.next = nextTarget.next;

      // 3. Insert next between prev and prev.next
      nextTarget.next = prev.next;
      prev.next = nextTarget;

      // Note: prev stays the same, current moves forward naturally
    }

    list.head = dummy.next;
    return list;
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
const node19 = new Node(19);
sll.addNode(node10).addNode(node12);
console.log(`List post new set of inserts: ${sll.getList()}`);

sll.swapAdjacentNodes();
console.log(`List post swapping adjacents: ${sll.getList()}`);

const cyclicList = new SinglyLinkedList();
const node100 = new Node(100);
const node105 = new Node(105);
const node110 = new Node(110);
const node115 = new Node(115);
const node120 = new Node(120);
cyclicList
  .addNode(node100)
  .addNode(node105)
  .addNode(node110)
  .addNode(node115)
  .addNode(node120)
  .addNode(node105);

console.log(`Is List 1 cyclic: ${sll.detectCycle() && true}`);
console.log(`Is List 2 cyclic: ${cyclicList.detectCycle() && true}`);

cyclicList.removeCycle();
console.log(`CyclicList post removing cycle: ${cyclicList.getList()}`);

console.log(`Mid-point of List 1: ${sll.findMidPoint()}`);
console.log(`Mid-point of Old Cyclic List: ${cyclicList.findMidPoint()}`);

console.log(`1st node from end: ${sll.findNthNodeFromEnd(1)}`);
console.log(`3rd node from end: ${sll.findNthNodeFromEnd(3)}`);
console.log(`4th node from end: ${sll.findNthNodeFromEnd(4)}`);
console.log(`7th node from end: ${sll.findNthNodeFromEnd(6)}`);
console.log(`10th node from end: ${sll.findNthNodeFromEnd(10)}`);

console.log(`.......Merge of 2 Sorted Singly Linked List.......`);
const sortedList1 = new SinglyLinkedList();
sortedList1
  .addNode(new Node(node1.data))
  .addNode(new Node(node3.data))
  .addNode(new Node(node5.data))
  .addNode(new Node(node10.data))
  .addNode(new Node(node19.data))
  .addNode(new Node(node100.data));

console.log(`Sorted List 1: ${sortedList1.getList()}`);
console.log(`Mid-point of Sorted List 1: ${sortedList1.findMidPoint()}`);

const sortedList2 = new SinglyLinkedList();
sortedList2
  .addNode(new Node(node2.data))
  .addNode(new Node(node4.data))
  .addNode(new Node(node12.data))
  .addNode(new Node(node15.data))
  .addNode(new Node(node115.data));

console.log(`Sorted List 2: ${sortedList2.getList()}`);
console.log(`Mid-point of Sorted List 2: ${sortedList2.findMidPoint()}`);

const mergedList = sll.merge2SortedList(sortedList1.head, sortedList2.head);
console.log(`Merged List: ${mergedList.getList()}`);

console.log(`-------Testing Merge K Sorted Linked List----------`);
const sortedList3 = new SinglyLinkedList();
sortedList3
  .addNode(new Node(node1.data))
  .addNode(new Node(node3.data))
  .addNode(new Node(node10.data))
  .addNode(new Node(node12.data))
  .addNode(new Node(node100.data));

const mergedKList = sll.mergeKSortedLists(
  sortedList1.head,
  sortedList2.head,
  sortedList3.head,
);
console.log(`Sorted Merged K List: ${mergedKList.getList()}`);

console.log(`-------Testing Reverse Nodes b/w 2 Points ----------`);
mergedKList.reverseBetween(mergedKList, 2, 5);
console.log(`Merged K List post reverse b/w 2 & 5: ${mergedKList.getList()}`);

sll.reverseBetween(sll, 1, 6);
console.log(`SLL post reverse b/w 3 & 6: ${sll.getList()}`);

cyclicList.reverseBetween(cyclicList, 1, 4);
console.log(`Cyclic List post reverse b/w 1 & 4: ${cyclicList.getList()}`);

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

const mergePoint = list1.findIntersectionPoint(list1.head, list2.head);
console.log(`Merge-point of 2 list is: ${mergePoint.data}`);
