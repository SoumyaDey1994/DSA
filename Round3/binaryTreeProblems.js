/**
 * Date: 20th April, 2025
 * Problem Statement:
 *      1.  Binary Tree Level Order Traversal
 *      2.  Maximum Depth of Binary Tree
 */
class TreeNode {
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

  addNode(data, root = null) {
    const temp = new TreeNode(data);
    if (root === null) {
      this.root = temp;
      return this;
    }

    if (root.left === null && data < root.data) {
      root.left = temp;
    } else if (root.right === null && data > root.data) {
      root.right = temp;
    } else if (data < root.data) {
      return this.addNode(data, root.left);
    } else {
      return this.addNode(data, root.right);
    }

    return this;
  }
  /**
   * Inorder traversal of Binary Tree
   * @param {*} root 
   * @returns 
   */
  printInOrder(root = null) {
    if (!root) return;

    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }
  /**
   * Preorder traversal of Binary Tree
   * @param {*} root 
   * @returns 
   */
  printPreOrder(root = null) {
    if (!root) return;

    console.log(root.data);
    this.printPreOrder(root.left);
    this.printPreOrder(root.right);
  }
  /**
   * Postorder traversal of Binary Tree
   * @param {*} root 
   * @returns 
   */
  printPostOrder(root = null) {
    if (!root) return;

    this.printPostOrder(root.left);
    this.printPostOrder(root.right);
    console.log(root.data);
  }
  /**
   * Print level-by-level nodes of binary tree
   * @param {*} root
   * @returns
   */
  levelOrderTraversal(root = null) {
    if (!root) return;

    const queue = [root];
    while (queue.length > 0) {
      const currNode = queue.shift();
      console.log(currNode.data);
      currNode.left !== null && queue.push(currNode.left);
      currNode.right !== null && queue.push(currNode.right);
    }
  }

  /**
   * Get the depth of Binary tree
   *
   */
  findDepth(root = null, depth = 0) {
    if (!root) return depth;

    const leftDepth = this.findDepth(root.left, 1 + depth);
    const rightDepth = this.findDepth(root.right, 1 + depth);

    return Math.max(leftDepth, rightDepth);
  }
}

let binaryTree = new BinaryTree();
binaryTree
  .addNode(10, binaryTree.root)
  .addNode(15, binaryTree.root)
  .addNode(5, binaryTree.root)
  .addNode(1, binaryTree.root)
  .addNode(20, binaryTree.root)
  .addNode(7, binaryTree.root)
  .addNode(12, binaryTree.root);

console.log("In-Order Traversal: ");
binaryTree.printInOrder(binaryTree.root);

console.log("Pre-Order Traversal: ");
binaryTree.printPreOrder(binaryTree.root);

console.log("Post-Order Traversal: ");
binaryTree.printPostOrder(binaryTree.root);

console.log("Binary Tree Level-Order Traversal: ");
binaryTree.levelOrderTraversal(binaryTree.root);

binaryTree
  .addNode(4, binaryTree.root)
  .addNode(14, binaryTree.root)
  .addNode(22, binaryTree.root);

console.log("Binary Tree Level-Order Traversal (post insert 4 new nodes): ");
binaryTree.levelOrderTraversal(binaryTree.root);

console.log(`Depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`);
