/**
 * Date: 19th July, 2026
 * Problem Statement: Intersection b/w 2 Singly Linked List
 * Given 2 SLL, S1 & S2, find the node, which is common in both list
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

    let result = "";
    let temp = this.head;
    while (temp.next !== null) {
      result = result + temp.data + "-->";
      temp = temp.next;
    }

    return result + temp.data;
  }

  findIntersectionNode(head1, head2) {
    if (!head1 || !head2) return null;

    let length1 = 0,
      length2 = 0;
    let temp1 = head1,
      temp2 = head2;

    while (temp1 !== null) {
      temp1 = temp1.next;
      length1++;
    }

    while (temp2 !== null) {
      temp2 = temp2.next;
      length2++;
    }

    let delta = 0;
    let start1 = head1,
      start2 = head2;

    if (length1 > length2) {
      delta = length1 - length2;
      while (delta > 0) {
        start1 = start1.next;
        delta--;
      }
    } else {
      delta = length2 - length1;
      while (delta > 0) {
        start2 = start2.next;
        delta--;
      }
    }

    if (start1 === null || start2 === null) return null;

    while (start1 !== null && start2 !== null) {
      if (start1 === start2) return start1;

      start1 = start1.next;
      start2 = start2.next;
    }

    return null;
  }
}

console.log(`-------Testing Intersection-point of 2 SLL----------`);
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

const intersectionNode = list1.findIntersectionNode(list1.head, list2.head);
console.log(`Intersection-point of 2 list is: ${intersectionNode.data}`);
