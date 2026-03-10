/**
 * Date: 10th March, 2026
 * Problems:
 *    Binary Tree - Level-order Traversal
 *    Invert Binary Tree
 *    Find Max Depth of the Binary Tree
 *    Find Diameter of the Binary Tree
 *    Remove Duplicates from Sorted Array
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

    this.#insertNode(this.root, node);
    return this;
  }

  #insertNode(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (root.left !== null && node.data < root.data) {
      this.#insertNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.#insertNode(root.right, node);
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

    const queue = [root];
    while (queue.length > 0) {
      const currNode = queue.shift();
      if (currNode !== null) {
        console.log(currNode.data);
        queue.push(currNode.left);
        queue.push(currNode.right);
      }
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

  findMaxDepth(root) {
    if (!root) return 0;

    const leftDepth = this.findMaxDepth(root.left);
    const rightDepth = this.findMaxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  findDiameter(root) {
    if (!root) return 0;

    let diameter = 0;
    function getHeight(node) {
      if (!node) return 0;

      const leftDepth = getHeight(node.left);
      const rightDepth = getHeight(node.right);

      diameter = Math.max(diameter, leftDepth + rightDepth);

      return 1 + Math.max(leftDepth, rightDepth);
    }

    getHeight(root);
    return diameter;
  }

  findLCA(root, firstNode, secondNode) {
    if (!root) return null;

    if (root.left === firstNode || root.right === secondNode) return root;

    const leftLca = this.findLCA(root.left, firstNode, secondNode);
    const rightLca = this.findLCA(root.right, firstNode, secondNode);

    if (leftLca && rightLca) return root;

    if (!leftLca && !rightLca) return null;

    return leftLca ? leftLca : rightLca;
  }

  checkIsBst(root) {
    if (!root) return false;

    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;
    if (root.left === null && root.right === null) return true;

    return this.checkIsBst(root.left) && this.checkIsBst(root.right);
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

console.log(
  `--- Is Binary Tree a BST: ${binaryTree.checkIsBst(binaryTree.root)}`,
);

const node1 = new Node(1);
const node20 = new Node(20);
const node4 = new Node(4);

binaryTree.insert(node1).insert(node4).insert(node20);
console.log(`....Tree In-order Traveral......`);
binaryTree.printInOrder(binaryTree.root);

let lcaNode = binaryTree.findLCA(binaryTree.root, node12, node20);
console.log(`--- LCA of Node 12 & 20 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCA(binaryTree.root, node4, node7);
console.log(`--- LCA of Node 4 & 7 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCA(binaryTree.root, node5, node12);
console.log(`--- LCA of Node 5 & 12 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCA(binaryTree.root, node3, node7);
console.log(`--- LCA of Node 3 & 7 is: ${lcaNode?.data}`);

console.log(
  `--- Is Binary Tree a BST: ${binaryTree.checkIsBst(binaryTree.root)}`,
);
