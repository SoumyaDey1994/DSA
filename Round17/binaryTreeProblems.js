/**
 * Problems:
 *    Binary Tree - Level-order Traversal (31st October, 2026)
 *    Invert Binary Tree (31st October, 2026)
 *    Find Max Depth of the Binary Tree (31st October, 2026)
 *    Find Diameter of the Binary Tree (31st October, 2026)
 *    Check if a Binary Tree is BST or not (31st October, 2026)
 *    Find LCA of 2 give nodes (31st October, 2026)
 *    Find kth smallest element in Binary Tree (31st October, 2026)
 *    Right-side element view of Binary Tree (31st October, 2026)
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
    if (this.root === null) {
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

  printInOrder(root) {
    if (root === null) return;

    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }

  printLevelOrder(root) {
    if (root === null) return;

    const queue = [root];

    while (queue.length > 0) {
      const currNode = queue.shift();
      console.log(currNode.data);

      if (currNode.left !== null) {
        queue.push(currNode.left);
      }

      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
  }

  invertTree(root) {
    if (root === null) return;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    if (root.left !== null) {
      this.invertTree(root.left);
    }

    if (root.right !== null) {
      this.invertTree(root.right);
    }
  }

  findMaxDepth(root) {
    if (root === null) return 0;

    const leftDepth = this.findMaxDepth(root.left);
    const rightDepth = this.findMaxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  findDiameter(root) {
    if (root === null) return;

    let diameter = 0;

    function findHeight(curr) {
      if (curr === null) return 0;
      const leftHeight = findHeight(curr.left);
      const rightHeight = findHeight(curr.right);

      diameter = leftHeight + rightHeight;

      return 1 + Math.max(leftHeight, rightHeight);
    }

    findHeight(root);
    return diameter;
  }

  isBst(root) {
    if (root === null) return;

    if (root.left === null && root.right === null) return true;
    if (root.left !== null && root.right === null) return false;
    if (root.left === null && root.right !== null) return false;

    return this.isBst(root.left) && this.isBst(root.right);
  }

  findLcaNode(root, small, large) {
    if (root === null) return;

    if (root.left === small || root.right === large) return root;

    const leftLca = this.findLcaNode(root.left, small, large);
    const rightLca = this.findLcaNode(root.right, small, large);

    if (!leftLca && !rightLca) return null;
    if (leftLca && rightLca) return root;

    return leftLca || rightLca;
  }

  getRightSideView(root) {
    if (root === null) return;

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
      let levelSize = queue.length;
      let rightSideValue = null;

      for (let i = 0; i < levelSize; i++) {
        let curr = queue.shift();
        rightSideValue = curr.data;

        if (curr.left !== null) {
          queue.push(curr.left);
        }

        if (curr.right !== null) {
          queue.push(curr.right);
        }
      }

      result.push(rightSideValue);
    }

    return result.join("-->");
  }

  findKthSmallestNode(root, k) {
    if (root === null) return;

    const queue = [];
    let currNode = root;

    while (queue.length > 0 || currNode !== null) {
      while (currNode !== null) {
        queue.push(currNode);
        currNode = currNode.left;
      }

      currNode = queue.pop();
      k--;

      if (k === 0) return currNode.data;

      currNode = currNode.right;
    }

    return null;
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
console.log(`--- Is Binary Tree a BST: ${binaryTree.isBst(binaryTree.root)}`);

const node1 = new Node(1);
const node20 = new Node(20);
const node4 = new Node(4);

binaryTree.insert(node1).insert(node4).insert(node20);
console.log(`....Tree In-order Traveral......`);
binaryTree.printInOrder(binaryTree.root);
console.log(
  `--- Is Binary Tree a BST now: ${binaryTree.isBst(binaryTree.root)}`,
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

lcaNode = binaryTree.findLcaNode(binaryTree.root, node1, node12);
console.log(`--- LCA of Node 1 & 12 is: ${lcaNode?.data}`);

console.log(
  `--- Right-side view of binary tree is: [${binaryTree.getRightSideView(binaryTree.root)}]`,
);

let k = 3;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestNode(binaryTree.root, k)}`,
);

k = 2;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestNode(binaryTree.root, k)}`,
);

k = 6;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestNode(binaryTree.root, k)}`,
);

k = 7;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestNode(binaryTree.root, k)}`,
);

k = 10;
console.log(
  `--- ${k}th smallest element in Binary Tree is: ${binaryTree.findKthSmallestNode(binaryTree.root, k)}`,
);
