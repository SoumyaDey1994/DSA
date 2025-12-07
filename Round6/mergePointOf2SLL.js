/**
 * Date: 7th Dec, 2025
 * Problem Statement: Find Merge-point of 2 SLL
 *
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
  /**
   * Get data values of SLL
   * @returns
   */
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
   * Get length of SLL
   * @param {*} head
   * @returns
   */
  getLength(head) {
    let temp = head;
    let length = 0;
    while (temp !== null) {
      length++;
      temp = temp.next;
    }

    return length;
  }
  /**
   * Find Merge-point of 2 SLL
   * @param {*} h1
   * @param {*} h2
   * @returns
   */
  findMergePoint(h1, h2) {
    if (!h1 || !h2) return;

    let h1Length = this.getLength(h1);
    let h2Length = this.getLength(h2);

    // console.log(h1Length, h2Length);

    let bigger = null,
      smaller = null,
      diff = 0;
    if (h1Length > h2Length) {
      bigger = h1;
      smaller = h2;
      diff = h1Length - h2Length;
    } else {
      bigger = h2;
      smaller = h1;
      diff = h2Length - h1Length;
    }

    let temp = bigger;
    while (diff > 0) {
      temp = temp.next;
      diff--;
    }

    let temp2 = smaller;
    while (temp !== null && temp2 !== null) {
      if (temp === temp2) {
        return temp;
      }

      temp = temp.next;
      temp2 = temp2.next;
    }

    return null;
  }
}

const list = new SinglyLinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

list.addNode(node1).addNode(node2).addNode(node3).addNode(node4).addNode(node5);

console.log(`Initial List: ${list.getList()}`);

const node11 = new Node(11);
const node12 = new Node(12);
const node13 = new Node(13);
list.addNode(node11).addNode(node12).addNode(node13);
console.log(`List Post Adding 3 new nodes: ${list.getList()}`);

const newList = new SinglyLinkedList();
newList
  .addNode(new Node(100))
  .addNode(new Node(110))
  .addNode(new Node(120))
  .addNode(new Node(130))
  .addNode(node11);

console.log(`New List is: ${newList.getList()}`);

const mergePointNode = list.findMergePoint(list.head, newList.head);
console.log(`Merge-point Node: ${mergePointNode?.data}`);
