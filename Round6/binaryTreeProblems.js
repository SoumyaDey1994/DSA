/**
 * Date: 1st Dec, 2025
 * Problem Statement:
 *      1. Binary Tree InOrder Traversal
 *      2. Binary Tree Level Order Traversal
 *      3. Depth of binary tree
 *      4. Binary Tree is BST or not
 *      5. Invert a Binary Tree
 *      6. Lowest Common Ancestor (LCA) of a Binary Tree
 *      7. Kth Smallest Element in a BST
 *      8. Binary Tree Right Side View
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

  #addNode(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (node.data < root.data) {
      this.#addNode(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else if (node.data > root.data) {
      this.#addNode(root.right, node);
    }

    return root;
  }

  insert(node) {
    if (!this.root) {
      this.root = node;
    } else {
      this.root = this.#addNode(this.root, node);
    }
    return this;
  }
  /**
   * Inorder traversal of Binary tree
   * @param {*} root
   * @returns
   */
  printInorder(root) {
    if (!root) return;
    this.printInorder(root.left);
    console.log(root.data);
    this.printInorder(root.right);
  }
  /**
   * Level-order traversal of Binary tree
   * @param {*} root
   * @returns
   */
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

  /**
   * Find height/depth of a binary tree
   * @param {*} root
   * @returns
   */
  findDepth(root) {
    if (!root) return 0;

    const leftDepth = 1 + this.findDepth(root.left);
    const rightDepth = 1 + this.findDepth(root.right);

    return leftDepth > rightDepth ? leftDepth : rightDepth;
  }

  /**
   * Check if the binart tree is BST or not
   * @param {*} root
   * @returns
   */
  isTreeBst(root) {
    if (!root) return false;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    return this.isTreeBst(root.left) && this.isTreeBst(root.right);
  }

  /**
   * Invert the Binary Tree
   * @param {*} root
   * @returns
   */
  invertTree(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
  }
  /**
   * Find Lowest Common Ancestor (LCA) node of Binary Tree
   * @param {*} root
   * @param {*} nodeA
   * @param {*} nodeB
   * @returns
   */
  findLCANode(root, nodeA, nodeB) {
    if (!root) return;

    if (root.left === nodeA || root.right === nodeB) {
      return root;
    }

    const leftLCA = this.findLCANode(root.left, nodeA, nodeB);
    const rightLCA = this.findLCANode(root.right, nodeA, nodeB);

    if (!leftLCA && !rightLCA) return null;
    if (leftLCA && rightLCA) return root;

    return leftLCA ? leftLCA : rightLCA;
  }

  /**
   * Find Kth Smallest element of Binary Tree
   * @param {*} root
   * @param {*} k
   * @returns
   */
  findKthSmallestElement(root, k) {
    if (!root) return null;

    let stack = [];
    let currNode = root;

    while (currNode !== null || stack.length > 0) {
      while (currNode !== null) {
        stack.push(currNode);
        currNode = currNode.left;
      }

      currNode = stack.pop();
      k--;
      if (k === 0) {
        return currNode.data;
      }

      currNode = currNode.right;
    }

    return null;
  }

  /**
   * Get right-side view of Binary Tree
   * @param {*} root
   * @returns
   */
  getRightSideView(root) {
    if (!root) return null;

    const queue = [root];
    const result = [];
    while (queue.length > 0) {
      const length = queue.length;
      let rightMostVal = null;
      for (let i = 0; i < length; i++) {
        let currNode = queue.shift();
        rightMostVal = currNode.data;

        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }
      result.push(rightMostVal);
    }

    return result;
  }
}

const node10 = new Node(10);
const node5 = new Node(5);
const node12 = new Node(12);
const node7 = new Node(7);
const node15 = new Node(15);

const binaryTree = new BinaryTree();
binaryTree
  .insert(node10)
  .insert(node5)
  .insert(node12)
  .insert(node7)
  .insert(node15);

console.log("\n......Inorder & Leve-order Traversal......\n");
console.log(`Tree inorder traversal after initial insert: `);
binaryTree.printInorder(binaryTree.root);

console.log(`Tree level order traversal after initial insert: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log("\n......Depth/Height of Binary Tree......\n");

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

const node11 = new Node(11);
const node50 = new Node(50);
const node1 = new Node(1);
const node3 = new Node(3);
const node13 = new Node(13);

binaryTree
  .insert(node11)
  .insert(node1)
  .insert(node13)
  .insert(node3)
  .insert(node50);

console.log(`Tree inorder traversal after new inserts: `);
binaryTree.printInorder(binaryTree.root);

console.log(`Tree level order traversal after new inserts: `);
binaryTree.printLevelOrder(binaryTree.root);

console.log(
  `Current depth of Binary Tree: ${binaryTree.findDepth(binaryTree.root)}`
);

console.log(
  `Is Current Binary Tree a BST: ${binaryTree.isTreeBst(binaryTree.root)}`
);

const node0 = new Node(0);
binaryTree.insert(node0);

console.log(`Tree Inorder Traversal after inserting 0: `);
binaryTree.printInorder(binaryTree.root);

console.log("\n......Check If BST......\n");

console.log(
  `After adding 0, Is Current Binary Tree a BST: ${binaryTree.isTreeBst(
    binaryTree.root
  )}`
);

const node4 = new Node(4);
const node2 = new Node(2);
binaryTree.insert(node4).insert(node2);

console.log(
  `After adding 4 & 2, Is Current Binary Tree a BST: ${binaryTree.isTreeBst(
    binaryTree.root
  )}`
);

console.log("\n......Find LCA Node......\n");
let lcaNode = binaryTree.findLCANode(binaryTree.root, node5, node12);
console.log(`LCA of node ${node5.data} & ${node12.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node3, node13);
console.log(`LCA of node ${node3.data} & ${node13.data} is: ${lcaNode?.data}`);

lcaNode = binaryTree.findLCANode(binaryTree.root, node11, node13);
console.log(`LCA of node ${node11.data} & ${node13.data} is: ${lcaNode?.data}`);

console.log("\n......Invert Binary Tree......\n");

binaryTree.invertTree(binaryTree.root);
console.log(`Inorder Traversal after inverting tree: `);
binaryTree.printInorder(binaryTree.root);

binaryTree.invertTree(binaryTree.root);
console.log("\n......Find Kth Smallest Element......\n");

const thirdSmallest = binaryTree.findKthSmallestElement(binaryTree.root, 3);
const fifthSmallest = binaryTree.findKthSmallestElement(binaryTree.root, 5);
const tenthSmallest = binaryTree.findKthSmallestElement(binaryTree.root, 10);
const firstSmallest = binaryTree.findKthSmallestElement(binaryTree.root, 1);
const thirteenthSmallest = binaryTree.findKthSmallestElement(
  binaryTree.root,
  13
);
const twentythSmallest = binaryTree.findKthSmallestElement(binaryTree.root, 20);

console.log(`3rd Smallest Element: ${thirdSmallest}`);
console.log(`5th Smallest Element: ${fifthSmallest}`);
console.log(`10th Smallest Element: ${tenthSmallest}`);
console.log(`1st Smallest Element: ${firstSmallest}`);
console.log(`13th Smallest Element: ${thirteenthSmallest}`);
console.log(`20th Smallest Element: ${twentythSmallest}`);

console.log(`Inorder Traversal after inverting tree: `);
binaryTree.printInorder(binaryTree.root);
console.log("\n......Right-Side View of Binary Tree......\n");
const rightNodes = binaryTree.getRightSideView(binaryTree.root);
console.log(`Right side elements are: [${rightNodes}]`);
