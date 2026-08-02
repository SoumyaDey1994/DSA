/**
 * Problems:
 *    Binary Tree - Level-order Traversal (2nd Aug, 2026)
 *    Invert Binary Tree (2nd Aug, 2026)
 *    Find Max Depth of the Binary Tree (2nd Aug, 2026)
 *    Find Diameter of the Binary Tree (2nd Aug, 2026)
 *    Check if a Binary Tree is BST or not (2nd Aug, 2026)
 *    Find LCA of 2 give nodes (2nd Aug, 2026)
 *    Find kth smallest element in Binary Tree ()
 *    Right-side element view of Binary Tree ()
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
    } else if (root.left !== null && node.data < root.data) {
      this.#addNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.#addNode(root.right, node);
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

    const executionQueue = [root];
    while (executionQueue.length > 0) {
      const currNode = executionQueue.shift();
      console.log(currNode.data);

      if (currNode.left !== null) executionQueue.push(currNode.left);
      if (currNode.right !== null) executionQueue.push(currNode.right);
    }
  }

  invertTree(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    if (root.left !== null) this.invertTree(root.left);
    if (root.right !== null) this.invertTree(root.right);
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
    function findHeight(node) {
      if (!node) return 0;

      const leftDepth = findHeight(node.left);
      const rightDepth = findHeight(node.right);

      diameter = Math.max(diameter, leftDepth + rightDepth);

      return 1 + Math.max(leftDepth, rightDepth);
    }

    findHeight(root);
    return diameter;
  }

  isBST(root) {
    if (!root) return false;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    return this.isBST(root.left) && this.isBST(root.right);
  }

  finLcaNode(root, small, large) {
    if (!root) return null;

    if (root.left === small || root.right === large) return root;

    const leftLca = this.finLcaNode(root.left, small, large);
    const rightLca = this.finLcaNode(root.right, small, large);

    if (!leftLca && !rightLca) return null;
    if (leftLca && rightLca) return root;

    return leftLca || rightLca;
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
console.log(`--- Is Binary Tree a BST: ${binaryTree.isBST(binaryTree.root)}`);

const node1 = new Node(1);
const node20 = new Node(20);
const node4 = new Node(4);

binaryTree.insert(node1).insert(node4).insert(node20);
console.log(`....Tree In-order Traveral......`);
binaryTree.printInOrder(binaryTree.root);
console.log(
  `--- Is Binary Tree a BST now: ${binaryTree.isBST(binaryTree.root)}`,
);

console.log(`.......LCA Node.........`);
let lcaNode = binaryTree.finLcaNode(binaryTree.root, node12, node20);
console.log(`--- LCA of Node 12 & 20 is: ${lcaNode?.data}`);

lcaNode = binaryTree.finLcaNode(binaryTree.root, node4, node7);
console.log(`--- LCA of Node 4 & 7 is: ${lcaNode?.data}`);

lcaNode = binaryTree.finLcaNode(binaryTree.root, node5, node12);
console.log(`--- LCA of Node 5 & 12 is: ${lcaNode?.data}`);

lcaNode = binaryTree.finLcaNode(binaryTree.root, node3, node7);
console.log(`--- LCA of Node 3 & 7 is: ${lcaNode?.data}`);
