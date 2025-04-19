/**
 * Date: 18th April, 2025
 * Problem Statement:
 *      1. Reverse a Singly Linked List
 *      2. Merge 2 Sorted SLL
 *      3. Swap adjacent nodes of a SLL
 */

/**
 * Date: 19th April, 2025
 * Problem Statement:
 *    1. Print a SLL in Reverse Order
 *    2. Find Nth Element of a SLL from End
 *    3. Detect Cycle in SLL
 *    4. Find Merge-point of 2 SLL
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

  appendNode(node) {
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
   * Print SLL in reverse order
   * @param {*} head
   * @param {*} result
   * @returns
   */
  getListInReverseOrder(head, result = "") {
    if (!head) return result;

    let temp = head;
    result = temp.data + `${result === "" ? result : `<--${result}`}`;
    return this.getListInReverseOrder(temp.next, result);
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
  /**
   * Find Nth element from end of SLL
   * @param {*} head
   * @param {*} n
   * @returns
   */
  findNthElementFromEnd(head, n) {
    if (!head) return null;

    let temp = head,
      aux = head;
    while (n > 0 && aux !== null) {
      aux = aux.next;
      n--;
    }
    // If n > SLL length, then return null as element not present
    if (n > 0) return null;

    while (aux !== null) {
      temp = temp.next;
      aux = aux.next;
    }

    return temp.data;
  }

  getNode(head, data) {
    if (!head) return;
    let temp = head;

    while (temp !== null) {
      if (temp.data === data) return temp;

      temp = temp.next;
    }

    return null;
  }

  addCycle(head, targetNode) {
    if (!head) return;
    if (!targetNode) return;

    let temp = head;
    let isTargetExists = false;
    while (temp.next !== null) {
      if (temp.data === targetNode.data) {
        isTargetExists = true;
      }
      temp = temp.next;
    }

    if (isTargetExists) {
      temp.next = targetNode;
    }

    return head;
  }
  /**
   * Detect cycle in SLL using visited map
   * TC: O(n); n = no of nodes
   * @param {*} head
   * @returns
   */
  hasCycle(head) {
    if (!head) return;

    let temp = head;
    let visited = new Map();

    while (temp !== null) {
      if (visited.has(temp)) {
        return true;
      }
      visited.set(temp, true);
      temp = temp.next;
    }

    return false;
  }
  /**
   * Detect cycle in SLL using fast & slow pointer approach
   * TC: O(n/2); n=No of nodes
   * @param {*} head
   * @returns
   */
  hasCycle2Pointer(head) {
    //
    if (!head) return;

    let temp = head;
    let fast = temp,
      slow = temp;

    slow = temp.next;
    fast = temp.next ? temp.next.next : null;

    while (slow && fast) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next?.next;
    }

    return false;
  }

  findMergePoint(head1, head2) {
    if (!head1 || !head2) return null;

    let temp1 = head1,
      temp2 = head2;
    let length1 = 0,
      length2 = 0;

    while (temp1 || temp2) {
      if (temp1) {
        length1++;
        temp1 = temp1.next;
      }

      if (temp2) {
        length2++;
        temp2 = temp2.next;
      }
    }

    (temp1 = head1), (temp2 = head2);
    if (length1 > length2) {
      let delta = length1 - length2;
      while (delta > 0) {
        temp1 = temp1.next;
        delta--;
      }
    } else {
      let delta = length2 - length1;
      while (delta > 0) {
        temp2 = temp2.next;
        delta--;
      }
    }

    while (temp1 && temp2) {
      if (temp1 === temp2) return temp1.data;

      temp1 = temp1.next;
      temp2 = temp2.next;
    }

    return -1;
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

const headPostSwapBackAdj = sllUtils.swapAdjacentNodes(headAfterSwappingAdj);
console.log(
  "SLL post reverting swapping adjacent nodes: ",
  sllUtils.getList(headPostSwapBackAdj)
);

const listInReverseOrder = sllUtils.getListInReverseOrder(headPostSwapBackAdj);
console.log("List in Reverse Order: ", listInReverseOrder);

const secondElementFromEnd = sllUtils.findNthElementFromEnd(
  headPostSwapBackAdj,
  2
);
const fifthElementFromEnd = sllUtils.findNthElementFromEnd(
  headPostSwapBackAdj,
  5
);
const seventhElementFromEnd = sllUtils.findNthElementFromEnd(
  headPostSwapBackAdj,
  7
);
const tenthElementFromEnd = sllUtils.findNthElementFromEnd(
  headPostSwapBackAdj,
  10
);

console.log(`\n2nd Element from last: ${secondElementFromEnd}`);
console.log(`5th Element from last: ${fifthElementFromEnd}`);
console.log(`7th Element from last: ${seventhElementFromEnd}`);
console.log(`10th Element from last: ${tenthElementFromEnd}`);
console.log(
  `15th Element from last: ${sllUtils.findNthElementFromEnd(
    headPostSwapBackAdj,
    15
  )}`
);

const sll3 = new SinglyLinkedList(1);
sll3.addNode(3).addNode(6).addNode(9);

let targetNodeToAddCycle = sllUtils.getNode(sll3.head, 3);
console.log(`\nSll3 has cycle ? ${sllUtils.hasCycle(sll3.head)}`);
sllUtils.addCycle(sll3.head, targetNodeToAddCycle);
console.log(`Now Sll3 has cycle: O(N) ? ${sllUtils.hasCycle(sll3.head)}`);
console.log(
  `Now Sll3 has cycle: O(N/2) ? ${sllUtils.hasCycle2Pointer(sll3.head)}`
);

const mergeNodeData = sllUtils.findMergePoint(sll.head, sll2.head);
console.log(`\nMerge-point of SLL1 & SLL3 is: ${mergeNodeData}`);

const sll4 = new SinglyLinkedList(5);
sll4.addNode(10).addNode(15).addNode(20);
const node15 = sllUtils.getNode(sll4.head, 15);

const sll5 = new SinglyLinkedList(3);
sll5.addNode(6).addNode(9).addNode(12).appendNode(node15);
console.log(
  `\nMerge-point of SLL4 & SLL4 is: ${sllUtils.findMergePoint(
    sll4.head,
    sll5.head
  )}`
);
