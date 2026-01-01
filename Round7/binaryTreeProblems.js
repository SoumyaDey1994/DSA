/**
 * Date: 1st Jan, 2025
 * Problem: Binary Tree - Level Order Traversal
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
      return this;
    }

    this.#addNode(this.root, node);
    return this;
  }

  #addNode(root, node) {
    // console.log(root);
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (node.data < root.data) {
      this.#addNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.#addNode(root.right, node);
    }
  }
  /**
   * Print Binary Tree Nodes level-by-level
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return null;

    const queue = [root];
    let output = [];
    while (queue.length > 0) {
      const curr = queue.shift();
      output.push(curr.data);
      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }

    console.log(output.join("-->"));
  }
}

const node10 = new Node(10);
const node5 = new Node(5);
const node12 = new Node(12);
const node7 = new Node(7);
const node15 = new Node(15);

const binaryTree = new BinaryTree();
binaryTree
  .insert(node10)
  .insert(node5)
  .insert(node12)
  .insert(node7)
  .insert(node15);

console.log(`Tree level-order traversal after initial insert: `);
binaryTree.printLevelOrder(binaryTree.root);

const node11 = new Node(11);
const node50 = new Node(50);
const node1 = new Node(1);
const node3 = new Node(3);
const node13 = new Node(13);

binaryTree
  .insert(node11)
  .insert(node1)
  .insert(node13)
  .insert(node3)
  .insert(node50);

console.log(`Tree level-order traversal after new inserts: `);
binaryTree.printLevelOrder(binaryTree.root);
