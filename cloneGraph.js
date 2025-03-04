/**
 * You are given a reference to a node in a connected, undirected graph. Each node in the graph contains a unique integer value (val) and a list of its neighbors.
 * Your task is to create a deep copy (clone) of the graph.
 * The deep copy should have the same structure and values as the original graph, but all nodes and edges must be independent of the original graph.
 * Input: 
 *      1: [2, 4]
        2: [1, 3]
        3: [2, 4]
        4: [1, 3]
 */

class Node {
    constructor(val, neighbours=[]) {
        this.val = val;
        this.neighbours = neighbours;
    }

    setNeighbour(neighbour) {
        this.neighbours.push(neighbour)
    }
}


function getClonedGraph(input) {
    if(!input)
        return null;
    
    const visited = new Map();

    function travarse(original) {
        // If original node exists, return the map entry
        if(visited.has(original)){
            return visited.get(original);
        }
        // Clone the original node & set to visited map
        const temp = new Node(original.val);
        !visited.has(original) && visited.set(original, temp);
        // go through the edges of original & travarse all edge nodes
        for(const neighbour of original.neighbours) {
            temp.neighbours.push(travarse(neighbour));
        }
        return temp;
    }
    return travarse(input);
}

function printGraph(input) {
    if(!input)
        return;

    const alreadyPrinted = new Map();

    function print(node) {
        if(alreadyPrinted.has(node.val))
            return;
    
        console.log(node);
        alreadyPrinted.set(node.val);
        for(const neighbour of node.neighbours) {
            print(neighbour);
        }
    }
    print(input);
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Connect the nodes
node1.neighbours = [node2, node4];
node2.neighbours = [node1, node3];
node3.neighbours = [node2, node4];
node4.neighbours = [node1, node3];


const output = getClonedGraph(node1);
printGraph(output);
