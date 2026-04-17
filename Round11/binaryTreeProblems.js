/**
 * Date: 15th April, 2026
 * Problem Statement: Binary Tree - Level-order Traversal
 * Date: 15th April, 2026
 * Problem Statement: Invert Binary Tree
 * Date: 16th April, 2026
 * Problem Statement: Find LCA of 2 give nodes
 * Date: 16th April, 2026
 * Problem Statement: Find Diameter of the Binary Tree
 * Date: 16th April, 2026
 * Problem Statement: Find Max Depth of the Binary Tree
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

  addNode(node) {
    if (this.root === null) {
      this.root = node;
      return this;
    }

    this.#insert(this.root, node);
    return this;
  }

  #insert(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (root.left !== null && node.data < root.data) {
      this.#insert(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.#insert(root.right, node);
    }
  }

  printInOrder(root) {
    if (!root) return null;

    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }

  /**
   * Level order traversal of Binary Tree Nodes
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return null;

    const executionQueue = [root];

    const result = [];
    while (executionQueue.length > 0) {
      const curr = executionQueue.shift();
      result.push(curr.data);

      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }

    return result.join("-->");
  }

  /**
   * Invert the Binary Tree
   * @param {*} root
   * @returns
   */
  invertTree(root) {
    if (!root) return null;
    // swap left & right node
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    // repeat the above process for left & right subTree
    this.invertTree(root.left);
    this.invertTree(root.right);
  }
  /**
   * Find Max depth of the binary tree
   * @param {*} root
   * @returns
   */
  findMaxDepth(root) {
    if (!root) return 0;

    const leftDepth = this.findMaxDepth(root.left);
    const rightDepth = this.findMaxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  /**
   * Find diameter of binary tree
   * @param {*} root
   * @returns
   */
  findDiameter(root) {
    if (!root) return 0;

    let diameter = 0;
    function getHeight(node) {
      if (!node) return 0;

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      diameter = Math.max(diameter, leftHeight + rightHeight);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    getHeight(root);
    return diameter;
  }

  /**
   * Find LCA of given 2 nodes of binary tree
   * @param {*} root
   * @param {*} firstNode
   * @param {*} secondNode
   * @returns
   */
  findLcaNode(root, firstNode, secondNode) {
    if (!root) return null;

    if (root.left === firstNode || root.right === secondNode) return root;

    const leftLca = this.findLcaNode(root.left, firstNode, secondNode);
    const rightLca = this.findLcaNode(root.right, firstNode, secondNode);

    if (!leftLca && !rightLca) return null;

    if (leftLca && rightLca) return root;

    return leftLca ? leftLca : rightLca;
  }

  /**
   * Check if given binary tree is BST or not
   * @param {*} root
   * @returns
   */
  checkIsBst(root) {
    if (!root) return false;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    const isLeftSubtreeBst = this.checkIsBst(root.left);
    const isRightSubtreeBst = this.checkIsBst(root.right);

    return isLeftSubtreeBst && isRightSubtreeBst;
  }

  /**
   * Find kth smallest element of a Binary Tree
   * @param {*} root
   * @param {*} k
   * @returns
   */
  findKthSmallestElement(root, k) {
    if (!root) return null;

    const stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      k--;
      if (k === 0) {
        return curr.data;
      }

      curr = curr.right;
    }

    return null;
  }

  getRightSideView(root) {
    if (!root) return null;

    const executionQueue = [root];
    const result = [];
    while (executionQueue.length > 0) {
      let curr = null;
      let rightVal = null;

      while (executionQueue.length > 0) {
        curr = executionQueue.shift();
        rightVal = curr.data;
      }

      result.push(rightVal);
      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }

    return result.join("-->");
  }
}

let tree = new BinaryTree();
let node1 = new Node(5);
let node2 = new Node(7);
let node3 = new Node(2);
let node4 = new Node(4);
let node5 = new Node(10);
let node6 = new Node(8);
let node7 = new Node(1);

tree
  .addNode(node1)
  .addNode(node2)
  .addNode(node3)
  .addNode(node4)
  .addNode(node5)
  .addNode(node6)
  .addNode(node7);

console.log("Inorder Travarsal: ");
tree.printInOrder(tree.root);

console.log(`.....Binary Tree Level-order Traversal.....`);
console.log(tree.printLevelOrder(tree.root));

tree.invertTree(tree.root);
console.log("Post Invert: Inorder Travarsal: ");
tree.printInOrder(tree.root);

tree.invertTree(tree.root);

console.log(`------Depth of binary Tree:  ${tree.findMaxDepth(tree.root)}`);
console.log(`------Diameter of binary Tree:  ${tree.findDiameter(tree.root)}`);

let lcaNode = tree.findLcaNode(tree.root, node1, node2);
console.log(`LCA of node ${node1.data} & ${node2.data} is: ${lcaNode?.data}`);

lcaNode = tree.findLcaNode(tree.root, node6, node7);
console.log(`LCA of node ${node6.data} & ${node7.data} is: ${lcaNode?.data}`);

lcaNode = tree.findLcaNode(tree.root, node5, node6);
console.log(`LCA of node ${node5.data} & ${node6.data} is: ${lcaNode?.data}`);

console.log(`Is Tree is a BST: ${tree.checkIsBst(tree.root)}`);
tree.addNode(new Node(12)).addNode(new Node(6));
console.log(`Tree post adding 2 new nodes:`);
tree.printInOrder(tree.root);
console.log(`Is Tree is a BST: ${tree.checkIsBst(tree.root)}`);

let k = 3;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${tree.findKthSmallestElement(tree.root, k)}`,
);

k = 2;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${tree.findKthSmallestElement(tree.root, k)}`,
);

k = 6;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${tree.findKthSmallestElement(tree.root, k)}`,
);

console.log(
  `--- Right-side view of binary tree is: [${tree.getRightSideView(tree.root)}]`,
);
