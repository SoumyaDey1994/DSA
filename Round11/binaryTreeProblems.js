/**
 * Date: 15th April, 2026
 * Problem Statement: Binary Tree - Level-order Traversal
 * Date: 15th April, 2026
 * Problem Statement: Invert Binary Tree
 * Date:
 * Problem Statement: Find LCA of 2 give nodes
 * Date:
 * Problem Statement: Find Diameter of the Binary Tree
 * Date:
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

  addNode(node) {
    if (this.root === null) {
      this.root = node;
      return this;
    }

    this.#insert(this.root, node);
    return this;
  }

  #insert(root, node) {
    if (root.left === null && node.data < root.data) {
      root.left = node;
    } else if (root.left !== null && node.data < root.data) {
      this.#insert(root.left, node);
    } else if (root.right === null && node.data > root.data) {
      root.right = node;
    } else {
      this.#insert(root.right, node);
    }
  }

  printInOrder(root) {
    if (!root) return null;

    this.printInOrder(root.left);
    console.log(root.data);
    this.printInOrder(root.right);
  }

  /**
   * Level order traversal of Binary Tree Nodes
   * @param {*} root
   * @returns
   */
  printLevelOrder(root) {
    if (!root) return null;

    const executionQueue = [root];

    const result = [];
    while (executionQueue.length > 0) {
      const curr = executionQueue.shift();
      result.push(curr.data);

      if (curr.left !== null) executionQueue.push(curr.left);
      if (curr.right !== null) executionQueue.push(curr.right);
    }

    return result.join("-->");
  }

  /**
   * Invert the Binary Tree
   * @param {*} root
   * @returns
   */
  invertTree(root) {
    if (!root) return null;
    // swap left & right node
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    // repeat the above process for left & right subTree
    this.invertTree(root.left);
    this.invertTree(root.right);
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
  .addNode(node1)
  .addNode(node2)
  .addNode(node3)
  .addNode(node4)
  .addNode(node5)
  .addNode(node6)
  .addNode(node7);

console.log("Inorder Travarsal: ");
tree.printInOrder(tree.root);

console.log(`.....Binary Tree Level-order Traversal.....`);
console.log(tree.printLevelOrder(tree.root));

tree.invertTree(tree.root);
console.log("Post Invert: Inorder Travarsal: ");
tree.printInOrder(tree.root);

tree.invertTree(tree.root);
