/**
 * Date: 22nd Jan, 2026
 * Problem Statement: Binary Tree - Level-order Traversal
 * 
 * Date: 15th Feb, 2026
 * Problem Statement: Invert Binary Tree
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
tree.printInOrderTraversal(tree.root)
tree.invertTree(tree.root);
console.log(`.....Tree After Invert.......`);
tree.printInOrderTraversal(tree.root)