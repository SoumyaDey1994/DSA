/**
 * Problems:
 *    Binary Tree - Level-order Traversal (9th June, 2026)
 *    Invert Binary Tree (9th June, 2026)
 *    Find Max Depth of the Binary Tree (9th June, 2026)
 *    Find Diameter of the Binary Tree (9th June, 2026)
 *    Find LCA of 2 give nodes (9th June, 2026)
 *    Check if a Binary Tree is BST or not (9th June, 2026)
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

  inOrderTraversal(root) {
    if (!root) return;

    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
  }

  /**
   * Print Tree nodes level-by-level
   * @param {*} root
   * @returns
   */
  levelOrderTraversal(root) {
    if (!root) return;

    const executionQueue = [root];
    while (executionQueue.length > 0) {
      const currNode = executionQueue.shift();
      if (currNode !== null) {
        console.log(currNode.data);
        executionQueue.push(currNode.left);
        executionQueue.push(currNode.right);
      }
    }
  }

  /**
   * Invert the binary tree
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
   * Find Depth of Binary Tree
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
   * Find Diameter (Max distance b/w 2 nodes) of binary tree
   * @param {*} root
   * @returns
   */
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

  /**
   * Check if Binary Tree is BST or not
   * @param {*} root
   * @returns
   */
  isBst(root) {
    if (!root) return;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    return this.isBst(root.left) && this.isBst(root.right);
  }

  /**
   * Find LCA of given 2 nodes
   * @param {*} root
   * @param {*} smallerNode
   * @param {*} greaterNode
   * @returns
   */
  findLcaNode(root, smallerNode, greaterNode) {
    if (!root) return;

    if (root.left === smallerNode || root.right === greaterNode) return root;

    const leftLCA = this.findLcaNode(root.left, smallerNode, greaterNode);
    const rightLCA = this.findLcaNode(root.right, smallerNode, greaterNode);

    if (leftLCA && rightLCA) return root;
    if (!leftLCA && !rightLCA) return null;

    return leftLCA || rightLCA;
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
