/**
 * Problems:
 *    Binary Tree - Level-order Traversal (1st May, 2026)
 *    Invert Binary Tree (1st May, 2026)
 *    Find Max Depth of the Binary Tree (1st May, 2026)
 *    Find Diameter of the Binary Tree (1st May, 2026)
 *    Find LCA of 2 give nodes ()
 *    Check if a Binary Tree is BST or not ()
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
