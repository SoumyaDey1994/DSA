/**
 * Date: 8th Jan, 2026
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
    let temp = this.head;
    let output = [];
    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    return output.join("-->");
  }

  getLength(head) {
    if (!head) return 0;

    let length = 1;
    let temp = head;
    while (temp !== null) {
      temp = temp.next;
      length++;
    }

    return length;
  }

  findMergePoint(list1Head, list2Head) {
    if (!list1Head || !list2Head) return null;

    let list1Length = this.getLength(list1Head);
    let list2Length = this.getLength(list2Head);

    let greaterListStart = null;
    let smallerListStart = null;
    if (list1Length > list2Length) {
      greaterListStart = list1Head;
      smallerListStart = list2Head;
      while (list1Length > list2Length) {
        greaterListStart = greaterListStart.next;
        list1Length--;
      }
    } else {
      greaterListStart = list2Head;
      smallerListStart = list1Head;
      while (list2Length > list1Length) {
        greaterListStart = greaterListStart.next;
        list2Length--;
      }
    }

    while (greaterListStart !== null && smallerListStart !== null) {

      if (greaterListStart === smallerListStart) {
        return greaterListStart;
      }
      greaterListStart = greaterListStart.next;
      smallerListStart = smallerListStart.next;
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
