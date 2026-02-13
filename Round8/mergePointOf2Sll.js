/**
 * Date: 13th Feb, 2026
 * Problem Statement: Find Merge-point of 2 SLL
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

    const output = [];
    let temp = this.head;
    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    return output.join("-->");
  }

  findMergePoint(list1Head, list2Head) {
    if (!list1Head || !list2Head) return null;

    let list1Length = 0,
      list2Length = 0;
    let temp1 = list1Head,
      temp2 = list2Head;

    while (temp1 !== null) {
      list1Length++;
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      list2Length++;
      temp2 = temp2.next;
    }

    let startNodeOfList1 = list1Head,
      startNodeOfList2 = list2Head;
    if (list1Length > list2Length) {
      let delta = list1Length - list2Length;
      while (delta > 0) {
        delta--;
        startNodeOfList1 = startNodeOfList1.next;
      }
    } else {
      let delta = list2Length - list1Length;
      while (delta > 0) {
        delta--;
        startNodeOfList2 = startNodeOfList2.next;
      }
    }

    while (startNodeOfList1 !== null && startNodeOfList2 !== null) {
      if (startNodeOfList1 === startNodeOfList2) {
        return startNodeOfList1;
      }

      startNodeOfList1 = startNodeOfList1.next;
      startNodeOfList2 = startNodeOfList2.next;
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
