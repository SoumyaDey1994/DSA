/**
 * Problems:
 *    Binary Tree - Level-order Traversal (1st May, 2026)
 *    Invert Binary Tree (1st May, 2026)
 *    Find Max Depth of the Binary Tree (1st May, 2026)
 *    Find Diameter of the Binary Tree (1st May, 2026)
 *    Find LCA of 2 give nodes (2nd May, 2026)
 *    Check if a Binary Tree is BST or not (2nd May, 2026)
 *    Find kth smallest element in Binary Tree (2nd May, 2026)
 *    Right-side element view of Binary Tree (3rd May, 2026)
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

  /**
   * In-order Traversal of Binary Tree
   * @param {*} root
   * @returns
   */
  inOrderTraversal(root) {
    if (!root) return null;

    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
  }

  /**
   * Level-order traversal of Binary Tree
   * @param {*} root
   * @returns
   */
  levelOrderTraversal(root) {
    if (!root) return null;

    const executionQueue = [root];
    while (executionQueue.length > 0) {
      const curr = executionQueue.shift();
      console.log(curr.data);
      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }
  }

  invertTree(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
  }
  /**
   * Find Max depth of a given binary tree
   * @param {*} root
   * @returns
   */
  findMaxDepth(root) {
    if (!root) return 0;

    function findHeight(startNode) {
      if (!startNode) return 0;

      const leftHeight = findHeight(startNode.left);
      const rightHeight = findHeight(startNode.left);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    return findHeight(root);
  }

  /**
   * Find diameter of a binary tree
   * @param {*} root
   * @returns
   */
  findDiameter(root) {
    if (!root) return 0;
    let diameter = 0;

    function findHeight(startNode) {
      if (!startNode) return 0;

      const leftHeight = findHeight(startNode.left);
      const rightHeight = findHeight(startNode.left);

      diameter = Math.max(diameter, leftHeight + rightHeight);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    findHeight(root);
    return diameter;
  }

  /**
   * Find LCA node of 2 given nodes
   * firstNode: smaller value, secondNode: larger value
   * @param {*} root
   * @param {*} firstNode
   * @param {*} secondNode
   * @returns
   */
  findLcaNode(root, firstNode, secondNode) {
    if (!root) return;

    if (root.left === firstNode || root.right === secondNode) return root;

    const leftLCA = this.findLcaNode(root.left, firstNode, secondNode);
    const rightLCA = this.findLcaNode(root.right, firstNode, secondNode);

    if (!leftLCA && !rightLCA) return null;

    if (leftLCA && rightLCA) return root;

    return leftLCA || rightLCA;
  }
  /**
   * Check if a Binary Tree is BST or not
   * @param {*} root
   * @returns
   */
  isBst(root) {
    if (!root) return false;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    const leftBst = this.isBst(root.left);
    const rightBst = this.isBst(root.right);

    return leftBst && rightBst;
  }

  /**
   * Find Kth Smallest Element of Binary Tree
   * @param {*} root
   * @param {*} k
   * @returns
   */
  findKthSmallestElement(root, k) {
    if (!root) return null;

    let currNode = root;
    const stack = [];

    while (stack.length > 0 || currNode !== null) {
      while (currNode !== null) {
        stack.push(currNode);
        currNode = currNode.left;
      }

      currNode = stack.pop();
      k = k - 1;
      if (k === 0) return currNode.data;

      currNode = currNode?.right;
    }

    return null;
  }

  /**
   * Get Right-side node view of Binary Tre
   * @param {*} root 
   * @returns 
   */
  getRightSideView(root) {
    if (!root) return null;

    const executionQueue = [root];
    const output = [];
    while (executionQueue.length > 0) {
      let curr = null,
        rightNodeVal = null;
      
      while (executionQueue.length > 0) {
        curr = executionQueue.pop();
        rightNodeVal = curr.data;
      }

      output.push(rightNodeVal);
      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }

    return output.join("-->");
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
binaryTree.inOrderTraversal(binaryTree.root);

console.log(`....Tree Level-order Traveral......`);
binaryTree.levelOrderTraversal(binaryTree.root);

console.log(`....Inverted Binary Tree Pre-order......`);
binaryTree.invertTree(binaryTree.root);
binaryTree.inOrderTraversal(binaryTree.root);

binaryTree.invertTree(binaryTree.root);

console.log(
  `------Depth of binary Tree:  ${binaryTree.findMaxDepth(binaryTree.root)}`,
);

console.log(
  `------Diameter of binary Tree:  ${binaryTree.findDiameter(binaryTree.root)}`,
);

console.log(`--- Is Binary Tree a BST: ${binaryTree.isBst(binaryTree.root)}`);

const node1 = new Node(1);
const node20 = new Node(20);
const node4 = new Node(4);

binaryTree.insert(node1).insert(node4).insert(node20);
console.log(`....Tree In-order Traveral......`);
binaryTree.inOrderTraversal(binaryTree.root);

let lcaNode = binaryTree.findLcaNode(binaryTree.root, node12, node20);
console.log(`--- LCA of Node 12 & 20 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node4, node7);
console.log(`--- LCA of Node 4 & 7 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node5, node12);
console.log(`--- LCA of Node 5 & 12 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node3, node7);
console.log(`--- LCA of Node 3 & 7 is: ${lcaNode?.data}`);

console.log(
  `--- Is Binary Tree a BST now: ${binaryTree.isBst(binaryTree.root)}`,
);

let k = 3;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestElement(binaryTree.root, k)}`,
);

k = 2;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestElement(binaryTree.root, k)}`,
);

k = 6;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestElement(binaryTree.root, k)}`,
);

console.log(
  `--- Right-side view of binary tree is: [${binaryTree.getRightSideView(binaryTree.root)}]`,
);
