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

    insert(data) {
        const node = new Node(data);
        if(this.root === null) {
            this.root = node;
            return this;
        }
        this.insertNode(this.root, node);
        return this;
    }

    insertNode(root, node) {
        if (root.left === null && node.data < root.data) {
            root.left = node;
        } else if (root.right === null && node.data > root.data) {
            root.right = node;
        } else if(node.data < root.data) {
            this.insertNode(root.left, node);
        } else {
            this.insertNode(root.right, node);
        }
    }

    search(root, value) {
        if (value === root.data)
            return true;
        if (root.left === null && root.right === null)
            return false;
        if (value < root.data) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    inOrderTravarse(root) {
        if(root === null)
            return;
        console.log(root.data);
        this.inOrderTravarse(root.left);
        this.inOrderTravarse(root.right);
    }   

    getLowestCommonAncestor(root, data1, data2) {
        if(root === null) return null;
        if(root.data === data1 || root.data === data2) return root;

        const leftAncestor = this.getLowestCommonAncestor(root.left, data1, data2);
        const rightAncestor = this.getLowestCommonAncestor(root.right, data1, data2);
        
        if(leftAncestor === null && rightAncestor === null) return null;

        if(leftAncestor && rightAncestor) return root;

        return leftAncestor ? leftAncestor : rightAncestor;
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(20).insert(30).insert(10);
binaryTree.insert(5).insert(40).insert(35).insert(50).insert(15);

console.log("InOrder Travarsal: ");
binaryTree.inOrderTravarse(binaryTree.root);

let data1=10, data2=30;

const lwa = binaryTree.getLowestCommonAncestor(binaryTree.root, data1, data2);
console.log(`Lowest common ancestor of ${data1} & ${data2} is: ${lwa.data}`);
