/**
 * Date: 14th June, 2025
 * Problem Statement:
 *      1. Binary Tree Level Order Traversal
 *      2. Lowest Common Ancestor (LCA) of a Binary Tree
 *      3. Depth of binary tree
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

  #insertNode(root, node) {
    if (!root) return;

    const data = node.data;
    if (root.left === null && data < root.data) {
      root.left = node;
    } else if (root.left !== null && data < root.data) {
      this.#insertNode(root.left, node);
    } else if (root.right === null && data > root.data) {
      root.right = node;
    } else {
      this.#insertNode(root.right, node);
    }

    return root;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
      return this;
    }

    this.#insertNode(this.root, node);
    return this;
  }

  printInorder(root) {
    if (!root) return;

    this.printInorder(root.left);
    console.log(root.data);
    this.printInorder(root.right);
  }
  /**
   * Level order traversal using BFS
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return;

    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current !== null) {
        console.log(current.data);
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }
  /**
   * Find Lowest Common Ancestor
   * @param {*} root
   * @param {*} fNode
   * @param {*} sNode
   * @returns
   */
  findLCANode(root, fNode, sNode) {
    if (!root) return;

    if (root.left === fNode || root.right === sNode) return root;

    const leftLCA = this.findLCANode(root.left, fNode, sNode);
    const rightLCA = this.findLCANode(root.right, fNode, sNode);

    if (!leftLCA && !rightLCA) return null;
    if (leftLCA && rightLCA) return root;

    return leftLCA ? leftLCA : rightLCA;
  }
  /**
   * Find depth of binary tree using DFS
   * @param {*} root
   * @returns
   */
  findDepth(root) {
    if (!root) return 0;

    const leftDepth = 1 + this.findDepth(root.left);
    const rightDepth = 1 + this.findDepth(root.right);

    return Math.max(leftDepth, rightDepth);
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

console.log(`Tree inorder traversal after initial insert: `);
binaryTree.printInorder(binaryTree.root);

console.log(`Tree level order traversal after initial insert: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

const node11 = new Node(11);
const node50 = new Node(50);
const node1 = new Node(1);
const node4 = new Node(4);
const node13 = new Node(13);

binaryTree
  .insert(node11)
  .insert(node1)
  .insert(node13)
  .insert(node4)
  .insert(node50);

console.log(`Tree inorder traversal after new inserts: `);
binaryTree.printInorder(binaryTree.root);

console.log(`Tree level order traversal after new inserts: `);
binaryTree.printLevelOrder(binaryTree.root);

let lcaNode = binaryTree.findLCANode(binaryTree.root, node5, node12);
console.log(`LCA of node ${node5.data} & ${node12.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node4, node13);
console.log(`LCA of node ${node4.data} & ${node13.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node11, node13);
console.log(`LCA of node ${node11.data} & ${node13.data} is: ${lcaNode?.data}`);

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

const node3 = new Node(3);
binaryTree.insert(node3);
console.log(
  `Depth of Binary Tree post inserting node3: ${binaryTree.findDepth(
    binaryTree.root
  )}`
);
