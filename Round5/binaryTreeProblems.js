/**
 * Date: 24th August, 2025
 * Problem Statement:
 *      1. Binary Tree Level Order Traversal
 *      2. Lowest Common Ancestor (LCA) of a Binary Tree
 *      3. Depth of binary tree
 *      4. Binary Tree is BST or not
 *      5. Invert a Binary Tree
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
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (node.data < root.data) {
      this.#insertNode(root.left, node);
    } else if (root.right === null && node.data >= root.data) {
      root.right = node;
    } else {
      this.#insertNode(root.right, node);
    }
    return this;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
      return this;
    }

    return this.#insertNode(this.root, node);
  }

  printInOrder(root) {
    if (!root) return "";
    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }

  printPreOrder(root) {
    if (!root) return "";
    console.log(root.data);
    this.printPreOrder(root.left);
    this.printPreOrder(root.right);
  }

  printPostOrder(root) {
    if (!root) return "";
    this.printPostOrder(root.left);
    this.printPostOrder(root.right);
    console.log(root.data);
  }

  /**
   * Print Tree nodes level-by-level
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return "";

    const queue = [root];
    while (queue.length > 0) {
      const currNode = queue.shift();
      console.log(currNode.data);
      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
  }
  /**
   * Find Depth of binary tree using DFS
   * @param {*} root
   * @returns
   */
  findDepth(root) {
    if (!root) return 0;

    const leftDepth = 1 + this.findDepth(root.left);
    const rightDepth = 1 + this.findDepth(root.right);

    return Math.max(leftDepth, rightDepth);
  }
  /**
   * Check if a Binary tree is BST or not
   * @param {*} root
   * @returns
   */
  isBST(root) {
    if (!root) return;

    if (root.left !== null && root.right === null) return false;
    if (root.right !== null && root.left === null) return false;
    if (root.left === null && root.right === null) return true;

    const isLeftBST = this.isBST(root.left);
    const isRightBST = this.isBST(root.right);

    return isLeftBST && isRightBST;
  }
  /**
   * Invert the Binary Tree
   * @param {*} root
   * @returns
   */
  invertTree(root) {
    if (!root) return;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
  }
  /**
   * Find LCA of 2 nodes
   * @param {*} root
   * @param {*} firstNode
   * @param {*} secondNode
   * @returns
   */
  findLCANode(root, firstNode, secondNode) {
    if (!root) return;

    if (root.left === firstNode && root.right === secondNode) return root;

    const leftLCA = this.findLCANode(root.left, firstNode, secondNode);
    const rightLCA = this.findLCANode(root.right, firstNode, secondNode);

    if (leftLCA && rightLCA) return root;
    if (!leftLCA && !rightLCA) return null;

    return leftLCA ? leftLCA : rightLCA;
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

console.log(`Tree In-order traversal after initial insert: `);
binaryTree.printInOrder(binaryTree.root);

console.log(`Tree Pre-order traversal after initial insert: `);
binaryTree.printPreOrder(binaryTree.root);

console.log(`Tree Post-order inorder traversal after initial insert: `);
binaryTree.printPostOrder(binaryTree.root);

console.log(`Tree level order traversal after initial insert: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

console.log(
  `Is Current Binary Tree a BST: ${binaryTree.isBST(binaryTree.root)}`
);

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

console.log(`Tree inorder traversal after new inserts: `);
binaryTree.printInOrder(binaryTree.root);

console.log(`Tree level order traversal after new inserts: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

console.log(
  `Is Current Binary Tree a BST: ${binaryTree.isBST(binaryTree.root)}`
);

let lcaNode = binaryTree.findLCANode(binaryTree.root, node5, node12);
console.log(`LCA of node ${node5.data} & ${node12.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node3, node13);
console.log(`LCA of node ${node3.data} & ${node13.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node11, node13);
console.log(`LCA of node ${node11.data} & ${node13.data} is: ${lcaNode?.data}`);

const node2 = new Node(2);
const node4 = new Node(4);
const node0 = new Node(0);
binaryTree.insert(node2).insert(node0).insert(node4);

console.log(`Tree Inorder Traversal after inserting 2, 4 & 0: `);
binaryTree.printInOrder(binaryTree.root);

console.log(`Tree Level Order Traversal after inserting 0 & 4: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log(
  `After adding 0 & 4, Is Current Binary Tree a BST: ${binaryTree.isBST(
    binaryTree.root
  )}`
);

binaryTree.invertTree(binaryTree.root);
console.log(`Tree inorder traversal after invert: `);
binaryTree.printInOrder(binaryTree.root);
