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

  /**
   * Problem Statement: Lowest Common Ancestor (LCA) in a Binary Tree
   * Given 2 nodes p and q in a Binary Tree,
   * find the lowest (or deepest) node that has
   * both p and q as descendants (where a node can be a descendant of itself).
   * @param {*} root
   * @param {*} data1
   * @param {*} data2
   * @returns
   */
  findLowestCommonAncestor(root = null, data1, data2) {
    if (!root) return null;

    if (root.data === data1 || root.data === data2) return root;

    const leftLCA = this.findLowestCommonAncestor(root.left, data1, data2);
    const rightLCA = this.findLowestCommonAncestor(root.right, data1, data2);

    if (!leftLCA && !rightLCA) return null;

    if (leftLCA && rightLCA) return root;

    return leftLCA ?? rightLCA;
  }
  /**
   * Invert a Binary Tree
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
   * Check if a given Binary Tree
   * is a Binary Search Tree or not
   * @param {*} root
   * @returns
   */
  isBST(root) {
    if (!root) return;
    // if root is leaf node, return true
    if (root.left === null && root.right === null) return true;
    // If root is non-left node, return false
    if (root.left === null && root.right !== null) return false;
    if (root.right === null && root.left !== null) return false;

    const isLeftSubTreeBST = this.isBST(root.left);
    const isRightSubTreeBST = this.isBST(root.right);

    return isLeftSubTreeBST && isRightSubTreeBST;
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

let data1 = 14,
  data2 = 22;
let lcaNode = binaryTree.findLowestCommonAncestor(
  binaryTree.root,
  data1,
  data2
);
console.log(`LCA of Node 14 & 22 is: ${lcaNode?.data}`);

(data1 = 1), (data2 = 4);
lcaNode = binaryTree.findLowestCommonAncestor(binaryTree.root, data1, data2);
console.log(`LCA of Node 14 & 22 is: ${lcaNode?.data}`);

(data1 = 7), (data2 = 14);
lcaNode = binaryTree.findLowestCommonAncestor(binaryTree.root, data1, data2);
console.log(`LCA of Node 14 & 22 is: ${lcaNode?.data}`);

let binaryTree2 = new BinaryTree();
binaryTree2
  .addNode(50, binaryTree2.root)
  .addNode(30, binaryTree2.root)
  .addNode(70, binaryTree2.root)
  .addNode(75, binaryTree2.root)
  .addNode(71, binaryTree2.root)
  .addNode(20, binaryTree2.root)
  .addNode(32, binaryTree2.root);

console.log("In-Order Traversal: ");
binaryTree.printInOrder(binaryTree2.root);
// Invert Binary Tree
binaryTree2.invertTree(binaryTree2.root);

console.log("In-Order Traversal Post Invert: ");
binaryTree2.printInOrder(binaryTree2.root);

let isTree2BST = binaryTree2.isBST(binaryTree2.root);
console.log("Tree2 is a Binary Search Tree: ", isTree2BST);

binaryTree2.addNode(65).addNode(80);
isTree2BST = binaryTree2.isBST(binaryTree2.root);
console.log(
  "Post Inserting 65 & 80: Tree2 is a Binary Search Tree: ",
  isTree2BST
);
