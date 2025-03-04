/**
 * You are given a binary tree where every node has either 0 or 2 children and the value of each node is non-negative.
 * Additionally, the value of the root node is the smallest in the tree.
    Your task is to find the second smallest value among all the nodes in the tree. 
    If there is no such value, return -1.
    Input:
        A binary tree root node.
    Output:
        An integer representing the second smallest value in the tree or -1 if it does not exist.
 */

function find2ndSmallestNode(root) {
    //If not root, or root.left or root.right, return -1
    if(!root || !root.left || !root.right) return -1;

    const originalRoot = root;
    let second = Infinity;

    function travarse(root) {
        if(!root) return -1;
        // if root is more than original root but less than 2nd
        // replace 2nd with curr root value
        if(root.val > originalRoot.val && root.val < second) {
            second = root.val;
        }
        travarse(root.left);
        travarse(root.right);
    }

    travarse(root);
    return second === Infinity ? -1 : second;
}

// Example Usage
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Construct the tree [2, 2, 5, null, null, 5, 7]
let root = new TreeNode(2, 
    new TreeNode(2), 
    new TreeNode(5, new TreeNode(5), new TreeNode(7))
);

console.log(`2nd smallest element of binary tree is: ${find2ndSmallestNode(root)}`);

// Construct the tree [10, 10, 12, 11, 15, 13, 18]
root = new TreeNode(10, 
    new TreeNode(10, new TreeNode(11), new TreeNode(12)), 
    new TreeNode(12, new TreeNode(13), new TreeNode(18))
);

console.log(`2nd smallest element of binary tree is: ${find2ndSmallestNode(root)}`);

// Construct the tree [10, 10, 12, 11, 15, 13, 18]
root = new TreeNode(5);

console.log(`2nd smallest element of binary tree is: ${find2ndSmallestNode(root)}`);
