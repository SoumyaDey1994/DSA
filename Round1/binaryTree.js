/**
 * Date: 18th Jan, 2025 & 19th Jan, 2025
 * Implement Binary tree along with following utility methods;
 *      1. Add Node to tree
 *      2. Inorder, Preorder & Postorder travarsal
 *      3. Check if Binary tree Balanced
 *      4. Check id Binary tree is BST
 *      5. Invert a Binary Tree
 *      6. Find 2nd smallest number
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
  /**
   * Add new node with mentioned data to tree
   * @param {*} data
   * @param {*} root
   * @returns
   */
  addNode(data, root = null) {
    const temp = new Node(data);
    if (!this.root) {
      this.root = temp;
      return this;
    }

    if (data < root.data) {
      if (root.left === null) {
        root.left = temp;
        return this;
      } else {
        return this.addNode(data, root.left);
      }
    } else {
      if (root.right === null) {
        root.right = temp;
        return this;
      } else {
        return this.addNode(data, root.right);
      }
    }
  }
  /**
   * Inorder Travarsal - Left+Root+Right
   * @param {*} root
   * @returns
   */
  travarseInorder(root = null) {
    if (!root) return;
    this.travarseInorder(root.left);
    console.log(root.data);
    this.travarseInorder(root.right);
  }
  /**
   * Preorder Travarsal - Root+Left+Right
   * @param {*} root
   * @returns
   */
  travarsePreorder(root = null) {
    if (!root) return;
    console.log(root.data);
    this.travarsePreorder(root.left);
    this.travarsePreorder(root.right);
  }
  /**
   * Postorder Travarsal - Left+Right_Root
   * @param {*} root
   * @returns
   */
  travarsePostorder(root = null) {
    if (!root) return;
    this.travarsePostorder(root.left);
    this.travarsePostorder(root.right);
    console.log(root.data);
  }
  /**
   * Check if tree is balanced or not
   * @param {*} root
   * @returns
   */
  isTreeBalanced(root = null) {
    // Base case 1: If tree is empty, return false
    if (!root) return false;
    // Base case 2: If left & right sub-tree are empty, return true else return false
    if (root.left === null && root.right === null) return true;
    if (root.left === null && root.right !== null) return false;
    if (root.left !== null && root.right === null) return false;

    const isLeftSubtreeBalanced = this.isTreeBalanced(root.left);
    const isRightSubtreeBalanced = this.isTreeBalanced(root.right);

    return isLeftSubtreeBalanced && isRightSubtreeBalanced;
  }
  /**
   * Check if tree is BST or not
   * @param {*} root
   * @returns
   */
  isTreeBST(root = null) {
    // Base case 1: If tree is empty, return false
    if (!root) return false;
    // If data of left < root & right > root, return true
    if (root.left !== null && root.left.data < root.data) return true;
    if (root.right !== null && root.right.data > root.data) return true;

    const isLeftBST = this.isTreeBST(root.left);
    const isRightBST = this.isTreeBST(root.right);

    return isLeftBST && isRightBST;
  }

  findSmallestNode(root = null) {
    if (!root) return null;
    //base case
    if (root.left === null && root.right === null) return root.data;
    // Recursive check
    if (root.left !== null) return this.findSmallestNode(root.left);
  }

  findLargestNode(root = null) {
    if(!root) return null;
    //base case
    if(root.right === null  && root.right === null)
        return root.data;
    // Recursive check
    if(root.right !== null) return this.findLargestNode(root.right);
  }

  /**
   * Invert a Binary Tree
   * @param {*} root
   * @returns
   */
  invertTree(root = null) {
    if (!root) return;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
  }
  /**
   * Find 2nd smallest number in a binary tree
   * @param {*} root
   * @returns
   */
  find2ndSmallest(root = null) {
    if (!root) return;

    let second = -Infinity;
    let actualRoot = root;

    function travarse(root) {
      if (!root) return;

      if (root.data < actualRoot.data && root.data < second) {
        second = root.data;
      }
      travarse(root.left);
      travarse(root.right);
    }
    travarse(root);

    return second === Infinity ? null : second;
  }
  /**
   * find out height of a binary tree
   * @param {*} root
   * @returns
   */
  getTreeHeight(root = null) {
    if (!root) return 0;
    if (root.left === null && root.right === null) return 1;

    const leftSubtreeHeight = 1 + this.getTreeHeight(root.left);
    const rightSubtreeHeight = 1 + this.getTreeHeight(root.right);

    return leftSubtreeHeight > rightSubtreeHeight
      ? leftSubtreeHeight
      : rightSubtreeHeight;
  }
}

/**
 * Create nodes & tree
 */

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

const tree = new BinaryTree();
tree.addNode(20, tree.root);
tree.addNode(10, tree.root);
tree.addNode(30, tree.root);

console.log("\nInorder Travarsal: ");
tree.travarseInorder(tree.root);
console.log("\nPreorder Travarsal: ");
tree.travarsePreorder(tree.root);
console.log("\nPostorder Travarsal: ");
tree.travarsePostorder(tree.root);
console.log("\nIs Tree Balanced: ", tree.isTreeBalanced(tree.root));
console.log("Is Tree is BST: ", tree.isTreeBST(tree.root));
console.log(`Current Tree Height is: ${tree.getTreeHeight(tree.root)}`);

tree.addNode(25, tree.root);
tree.addNode(15, tree.root);
tree.addNode(35, tree.root);

console.log("\nInorder Travarsal: ");
tree.travarseInorder(tree.root);
console.log("\nIs Tree Balanced: ", tree.isTreeBalanced(tree.root));
console.log("Is Tree is BST: ", tree.isTreeBST(tree.root));

tree.addNode(7, tree.root);
console.log("\nInorder Travarsal after adding 7: ");
tree.travarseInorder(tree.root);
console.log("\nIs Tree Balanced now: ", tree.isTreeBalanced(tree.root));
console.log("Is Tree a BST now: ", tree.isTreeBST(tree.root));

tree.invertTree(tree.root);
console.log("Tree after inverting: ");
tree.travarseInorder(tree.root);
console.log("Is Tree a BST post revert: ", tree.isTreeBST(tree.root));
tree.invertTree(tree.root);
console.log("Tree after inverting back: ");
tree.travarseInorder(tree.root);

const secondLowest = tree.find2ndSmallest(tree.root);
// console.log("Second smallest number is: ", secondLowest);

console.log(`Current Tree Height is: ${tree.getTreeHeight(tree.root)}`);
tree.addNode(5, tree.root);
tree.travarseInorder(tree.root);
console.log(
  `Tree Height Post adding node 5 is: ${tree.getTreeHeight(tree.root)}`
);
console.log("Is Tree Balanced now: ", tree.isTreeBalanced(tree.root));


const smallest = tree.findSmallestNode(tree.root);
const largest = tree.findLargestNode(tree.root);

console.log(`Smallest Node: ${smallest}, Largest Node: ${largest}`);
