/**
 * Date: 22nd Jan, 2026
 * Problem Statement: Binary Tree - Level-order Traversal
 * Date: 15th Feb, 2026
 * Problem Statement: Invert Binary Tree
 * Date: 16th Feb, 2026
 * Problem Statement: Find LCA of 2 give nodes
 * Date: 21st Feb, 2026
 * Problem Statement: Find Diameter of the Binary Tree
 * Date: 22nd Feb, 2026
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

  insert(node) {
    if (!this.root) {
      this.root = node;
      return this;
    }

    this.root = this.insertNode(this.root, node);
    return this;
  }

  insertNode(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (node.data < root.data) {
      this.insertNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.insertNode(root.right, node);
    }

    return root;
  }

  printInOrderTraversal(root) {
    if (!root) return;

    this.printInOrderTraversal(root.left);
    console.log(root.data);
    this.printInOrderTraversal(root.right);
  }
  /**
   * Levele-order traversal of binary tree
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return;

    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  /**
   * Kth Smallest element in BST
   *
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
        return curr;
      }

      curr = curr.right;
    }

    return null;
  }

  /**
   * Get right-side element view of Binary Tree
   * @param {*} root
   * @returns
   */
  getRightSideView(root) {
    if (!root) return;

    const queue = [root],
      result = [];
    while (queue.length > 0) {
      let rightMostVal = null;
      let curr = null;

      while (queue.length > 0) {
        curr = queue.shift();
        rightMostVal = curr.data;
      }
      result.push(rightMostVal);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return result;
  }

  /**
   * Invert the Binary Tree
   */
  invertTree(root) {
    if (!root) return null;

    const curr = root;
    // swap left & right of current
    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;
    // repeat the same process for left & right subtree
    this.invertTree(curr.left);
    this.invertTree(curr.right);

    return this;
  }

  /**
   * Find LCA of given 2 nodes
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

  checkIsBst(root) {
    if (!root) return false;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.data < root.left.data) return false;
    if (root.right !== null && root.data > root.right.data) return false;

    const isLeftSubtreeBst = this.checkIsBst(root.left);
    const isRightSubtreeBst = this.checkIsBst(root.right);

    return isLeftSubtreeBst && isRightSubtreeBst;
  }
  /**
   * Find diameter of a Binary Tree
   * Diameter = longest distance b/w any 2 nodes of the binary tree
   */
  findDiameter(root) {
    if(!root) return;

    let diameter = 0;
    function getHeight(node) {
      if(!node) return 0;

      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);

      diameter = Math.max(diameter, leftHeight + rightHeight);

      return 1 + Math.max(leftHeight, rightHeight);
    }

    getHeight(root);
    return diameter;
  }
  /**
   * Find Max depth of binary Tree
   * @param {*} root 
   * @returns 
   */
  findMaxDepth(root) {
    if(!root) return 0;

    const leftDepth = this.findMaxDepth(root.left);
    const rightDepth = this.findMaxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
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
  .insert(node1)
  .insert(node2)
  .insert(node3)
  .insert(node4)
  .insert(node5)
  .insert(node6)
  .insert(node7);
console.log("Inorder Travarsal: ");
tree.printInOrderTraversal(tree.root);

console.log(`.....Binary Tree Level-order Traversal.....`);
tree.printLevelOrder(tree.root);

let k = 3;
let kthSmallestElement = tree.findKthSmallestElement(tree.root, k);
console.log(`${k}th smallest element is: ${kthSmallestElement?.data}`);

k = 4;
kthSmallestElement = tree.findKthSmallestElement(tree.root, k);
console.log(`${k}th smallest element is: ${kthSmallestElement?.data}`);

k = 7;
kthSmallestElement = tree.findKthSmallestElement(tree.root, k);
console.log(`${k}th smallest element is: ${kthSmallestElement?.data}`);

const rightSideView = tree.getRightSideView(tree.root);
console.log(`Right-side view of Binary Tree is: [${rightSideView}]`);

console.log(`.....Tree Before Invert.......`);
tree.printInOrderTraversal(tree.root);
tree.invertTree(tree.root);
console.log(`.....Tree After Invert.......`);
tree.printInOrderTraversal(tree.root);

let lcaNode = tree.findLcaNode(tree.root, node1, node2);
console.log(`LCA of node ${node1.data} & ${node2.data} is: ${lcaNode?.data}`);

lcaNode = tree.findLcaNode(tree.root, node6, node7);
console.log(`LCA of node ${node6.data} & ${node7.data} is: ${lcaNode?.data}`);

lcaNode = tree.findLcaNode(tree.root, node5, node6);
console.log(`LCA of node ${node5.data} & ${node6.data} is: ${lcaNode?.data}`);

tree.invertTree(tree.root);
console.log(`Is Tree is a BST: ${tree.checkIsBst(tree.root)}`);
tree.insert(new Node(12)).insert(new Node(6));
console.log(`Tree post adding 2 new nodes:`);
tree.printInOrderTraversal(tree.root);
console.log(`Is Tree is a BST: ${tree.checkIsBst(tree.root)}`);

const diameter = tree.findDiameter(tree.root);
console.log(`Diameter of the binary tree is: ${diameter}`);

const depth = tree.findMaxDepth(tree.root);
console.log(`Depth of the binary tree is: ${depth}`);
