/**
 * Date: 22nd Jan, 2026
 * Problem Statement:
 *      Binary Tree - Level-order Traversal
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