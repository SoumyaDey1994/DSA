class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.root = null;
  }

  addNodeToEnd(data) {
    const temp = new Node(data);
    if (this.root === null) {
      this.root = temp;
      return this;
    }

    let aux = this.root;
    while (aux.next !== null) {
      aux = aux.next;
    }
    aux.next = temp;
    return this;
  }

  addCycle(targetNodeVal) {
    if (this.root === null) return null;

    let targetNode = null;
    let aux = this.root;
    while (aux !== null) {
      if (aux.data === targetNodeVal) break;

      aux = aux.next;
    }
    if (aux === null) return;
    targetNode = aux;

    let temp = this.root;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = targetNode;
  }

  getList() {
    if (this.root === null) return null;

    let aux = this.root;
    const visited = new Map();
    let result = "";
    while (aux !== null) {
      if (visited.has(aux)) {
        result += aux?.data;
        break;
      }

      result += aux?.data + "-->";
      visited.set(aux, true);
      aux = aux.next;
    }
    return result;
  }

  hasCycle() {
    if (this.root === null) return false;

    let slow = this.root,
      fast = this.root;
    slow = slow.next;
    fast = fast.next?.next;
    while (fast !== null && fast.next !== null) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }

  reverseList() {
    if (this.root === null) return;

    let prev = null;
    let curr = this.root;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.root = prev;
  }

  reverseListRecursive(curr = this.root, prev = null) {
    if (curr === null) {
      this.root = prev;
      return;
    }

    const next = curr.next;
    curr.next = prev;
    prev = curr;
    this.reverseListRecursive(next, prev);
  }

  reverseListRecursiveSol2(curr = this.root) {
    if (curr === null || curr.next === null) {
      return curr;
    }
    const revHead = this.reverseListRecursiveSol2(curr.next);

    curr.next.next = curr;
    curr.next = null;

    this.root = revHead;
    return revHead;
  }
  /**
   * List: 1->2->3->4->5->x
   * @returns
   */
  swapAdjacentNodes() {
    // this.swapAdjacentNodesByData();
    if (this.root === null) return;

    let prev = null;
    let curr = this.root;

    while (curr !== null && curr.next !== null) {
      const nextNode = curr.next;
      const nextCurr = nextNode?.next;

      // console.log("prev = ", prev?.data);
      // console.log("curr = ", curr?.data);
      // console.log("next = ", curr.next?.data);

      if (prev === null) {
        this.root = nextNode;
      } else {
        prev.next = nextNode;
      }

      nextNode.next = curr;
      curr.next = nextCurr;
      prev = curr;
      curr = nextCurr;
    }

    return this;
  }

  swapAdjacentNodesByData() {
    if (this.root === null) return;
    let curr = this.root;
    while (curr !== null && curr.next !== null) {
      const temp = curr.data;
      curr.data = curr.next.data;
      curr.next.data = temp;

      curr = curr.next.next;
    }
    return this;
  }
}

const list = new List();
list.addNodeToEnd(2).addNodeToEnd(3).addNodeToEnd(5).addNodeToEnd(7);
// list.addNodeToEnd(2).addNodeToEnd(3);
console.log("Original List: ", list.getList());

// list.addCycle(5);
// console.log(list.getList());

console.log(`List has cycle: ${list.hasCycle()}`);
list.reverseList();
console.log(`List Post reverse: ${list.getList()}`);

list.addNodeToEnd(10).addNodeToEnd(11).addNodeToEnd(15).addNodeToEnd(18);
console.log(`List Post New additions: ${list.getList()}`);

list.reverseListRecursive();
console.log(`List Post reverse Recursive: ${list.getList()}`);

list.reverseListRecursiveSol2();
console.log(`List Post 2nd reverse Recursive: ${list.getList()}`);

list.swapAdjacentNodes();
console.log(`List After swapping adjacent nodes: ${list.getList()}`);

list.addNodeToEnd(20);
list.addNodeToEnd(22);
list.addNodeToEnd(25);
list.swapAdjacentNodes();
console.log(`List After swapping adjacent nodes: ${list.getList()}`);
