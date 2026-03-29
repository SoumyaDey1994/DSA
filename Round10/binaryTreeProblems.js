/**
 * Problems:
 *    Binary Tree - Level-order Traversal (29th March, 2026)
 *    Invert Binary Tree (29th March, 2026)
 *    Find Max Depth of the Binary Tree (29th March, 2026)
 *    Find Diameter of the Binary Tree (29th March, 2026)
 *    Find LCA of 2 give nodes
 *    Check if a Binary Tree is BST or not
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
    if (!this.root) {
      this.root = node;
      return this;
    }

    this.#addNode(this.root, node);
    return this;
  }

  #addNode(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
      return;
    } else if (root.left !== null && node.data < root.data) {
      return this.#addNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
      return;
    } else {
      return this.#addNode(root.right, node);
    }
  }

  printInOrder(root) {
    if (!root) return;

    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }

  printLevelOrder(root) {
    if (!root) return;

    const executionQueue = [this.root];
    while (executionQueue.length > 0) {
      const currNode = executionQueue.shift();
      console.log(currNode.data);

      if (currNode.left !== null) {
        executionQueue.push(currNode.left);
      }

      if (currNode.right !== null) {
        executionQueue.push(currNode.right);
      }
    }
  }

  invertTree(root) {
    if (!root) return;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
  }

  findMaxDepth(root) {
    if (!root) return 0;

    const leftDepth = this.findMaxDepth(root.left);
    const rightDepth = this.findMaxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  findDiameter(root) {
    if (!root) return 0;

    let diameter = 0;

    function findHeight(start) {
      if (!start) return 0;

      const leftDepth = findHeight(start.left);
      const rightDepth = findHeight(start.right);

      diameter = Math.max(diameter, leftDepth + rightDepth);

      return 1 + Math.max(leftDepth, rightDepth);
    }

    findHeight(root);
    return diameter;
  }
}

const node10 = new Node(10);
const node5 = new Node(5);
const node15 = new Node(15);
const node3 = new Node(3);
const node7 = new Node(7);
const node12 = new Node(12);

const binaryTree = new BinaryTree();
binaryTree
  .insert(node10)
  .insert(node5)
  .insert(node15)
  .insert(node3)
  .insert(node7)
  .insert(node12);

console.log(`....Tree In-order Traveral......`);
binaryTree.printInOrder(binaryTree.root);

console.log(`....Tree Level-order Traveral......`);
binaryTree.printLevelOrder(binaryTree.root);
console.log(`....Inverted Binary Tree Pre-order......`);
binaryTree.invertTree(binaryTree.root);
binaryTree.printInOrder(binaryTree.root);

binaryTree.invertTree(binaryTree.root);

console.log(
  `------Depth of binary Tree:  ${binaryTree.findMaxDepth(binaryTree.root)}`,
);

console.log(
  `------Diameter of binary Tree:  ${binaryTree.findDiameter(binaryTree.root)}`,
);
