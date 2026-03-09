/**
 * Date: 9th March, 2026
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

  insert(node) {
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

    const result = [];
    let temp = this.head;
    while (temp !== null) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result.join("-->");
  }

  findMergePoint(list1Head, list2Head) {
    if (!list1Head || !list2Head) return null;

    let temp1 = list1Head,
      temp2 = list2Head;
    let length1 = 0,
      length2 = 0;
    // compute length of list1
    while (temp1 !== null) {
      length1++;
      temp1 = temp1.next;
    }
    // compute length of list2
    while (temp2 !== null) {
      length2++;
      temp2 = temp2.next;
    }

    let delta = 0,
      headOfGreaterList = null,
      headOfSmallererList = null;
    if (length1 > length2) {
      delta = length1 - length2;
      headOfGreaterList = list1Head;
      headOfSmallererList = list2Head;
    } else {
      delta = length2 - length1;
      headOfGreaterList = list2Head;
      headOfSmallererList = list1Head;
    }
    // shift pointer of greater list to delta nodes
    while (delta > 0) {
      headOfGreaterList = headOfGreaterList.next;
      delta--;
    }

    while (headOfGreaterList !== null && headOfSmallererList !== null) {
      if (headOfGreaterList === headOfSmallererList) {
        return headOfGreaterList;
      }

      headOfGreaterList = headOfGreaterList.next;
      headOfSmallererList = headOfSmallererList.next;
    }

    return null;
  }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node60 = new Node(60);
const commonNode = new Node(50);

list1.insert(node1).insert(node2).insert(commonNode);

list2
  .insert(node3)
  .insert(node4)
  .insert(node5)
  .insert(node6)
  .insert(commonNode)
  .insert(node60);

console.log(`List 1: ${list1.getList()}`);
console.log(`List 2: ${list2.getList()}`);

const mergePoint = list1.findMergePoint(list1.head, list2.head);
console.log(`Merge-point of 2 list is: ${mergePoint.data}`);
