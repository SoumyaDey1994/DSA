/**
 * Date: 8th March, 2025
 * Problem Statement:
 *      1. Lowest Common Ancestor (LCA) of a Binary Tree
 *      2. Binary Tree Level Order Traversal
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
    this.root = this.#insertNode(this.root, node);
    return this;
  }

  #insertNode(root, node) {
    if (!root) return;
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else if (root.left !== null && node.data < root.data) {
      this.#insertNode(root.left, node);
    } else {
      this.#insertNode(root.right, node);
    }
    return root;
  }

  printInorder(root) {
    if (!root) return;
    this.printInorder(root.left);
    console.log(root.data);
    this.printInorder(root.right);
  }
  /**
   * Problem Statement: Binary Tree Level Order Traversal
   * print binary tree nodes level by level
   * @param {*} root
   * @returns
   */
  traverseLevelOrder(root) {
    if (!root) return;

    const queue = [root];
    while (queue.length > 0) {
      // BFS approach
      const node = queue.shift();
      console.log(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  /**
   * Problem Statement: Lowest Common Ancestor (LCA) in a Binary Tree
   * Given 2 nodes p and q in a Binary Tree,
   * find the lowest (or deepest) node that has
   * both p and q as descendants (where a node can be a descendant of itself).
   * @param {*} root
   * @param {*} fNode
   * @param {*} sNode
   * @returns
   */
  getLCANode(root, fNode, sNode) {
    if (!root) return null;

    if (root.data === fNode.data || root.data === sNode.data) return root;

    const leftCA = this.getLCANode(root.left, fNode, sNode);
    const rightCA = this.getLCANode(root.right, fNode, sNode);

    if (leftCA === null && rightCA === null) return null;

    if (leftCA && rightCA) return root;

    return leftCA ? leftCA : rightCA;
  }
}

let tree = new BinaryTree();
let node1 = new Node(5);
let node2 = new Node(7);
let node3 = new Node(2);
let node4 = new Node(4);

tree.insert(node1).insert(node2).insert(node3).insert(node4);
console.log("Inorder Travarsal: ");
tree.printInorder(tree.root);

console.log("Level Order Travarsal: ");
tree.traverseLevelOrder(tree.root);

let lcaNode = tree.getLCANode(tree.root, node2, node3);
console.log(`LCA of node ${node2.data} & ${node3.data} is: ${lcaNode.data}`);

lcaNode = tree.getLCANode(tree.root, node4, node3);
console.log(`LCA of node ${node4.data} & ${node3.data} is: ${lcaNode.data}`);

lcaNode = tree.getLCANode(tree.root, node2, node4);
console.log(`LCA of node ${node2.data} & ${node4.data} is: ${lcaNode.data}`);

let node5 = new Node(10);
let node6 = new Node(8);
let node7 = new Node(1);

tree.insert(node5).insert(node6).insert(node7);

console.log("Inorder Travarsal: ");
tree.printInorder(tree.root);

console.log("Level Order Travarsal: ");
tree.traverseLevelOrder(tree.root);

lcaNode = tree.getLCANode(tree.root, node5, node4);
console.log(`LCA of node ${node5.data} & ${node4.data} is: ${lcaNode.data}`);
