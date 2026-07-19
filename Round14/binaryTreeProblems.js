/**
 * Problems:
 *    Binary Tree - Level-order Traversal (18th July, 2026)
 *    Invert Binary Tree (18th July, 2026)
 *    Find Max Depth of the Binary Tree (18th July, 2026)
 *    Find Diameter of the Binary Tree (18th July, 2026)
 *    Check if a Binary Tree is BST or not (18th July, 2026)
 *    Find LCA of 2 give nodes (19th July, 2026)
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

    let temp = root.left;
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

  isBST(root) {
    if (!root) return;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    return this.isBST(root.left) && this.isBST(root.right);
  }

  findLcaNode(root, fNode, sNode) {
    if (!root) return null;

    if (root.left === fNode || root.right === sNode) return root;

    const leftLca = this.findLcaNode(root.left, fNode, sNode);
    const rightLca = this.findLcaNode(root.right, fNode, sNode);

    if (leftLca && rightLca) return root;
    if (!leftLca && !rightLca) return null;

    return leftLca ? leftLca : rightLca;
  }

  findKthSmallestElement(root, k) {
    if (!root) return;

    const stack = [];
    let curr = root;

    while (stack.length > 0 || curr !== null) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      k = k - 1;
      if (k === 0) return curr.data;

      curr = curr?.right;
    }
  }

  getRightSideView(root) {
    if (!root) return;

    const executionQueue = [root];
    const result = [];

    while (executionQueue.length > 0) {
      let curr = null,
        rightNodeVal = null;

      while (executionQueue.length > 0) {
        curr = executionQueue.shift();
        rightNodeVal = curr.data;
      }

      result.push(rightNodeVal);
      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }

    return result.join("-->");
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
let lcaNode = binaryTree.findLcaNode(binaryTree.root, node12, node20);
console.log(`--- LCA of Node 12 & 20 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node4, node7);
console.log(`--- LCA of Node 4 & 7 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node5, node12);
console.log(`--- LCA of Node 5 & 12 is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLcaNode(binaryTree.root, node3, node7);
console.log(`--- LCA of Node 3 & 7 is: ${lcaNode?.data}`);

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
