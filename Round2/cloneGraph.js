/**
 * Date: 15th April, 2025
 * You are given a reference to a node in a connected, undirected graph. 
 * Each node in the graph contains a unique integer value (val) and a list of its neighbors.
 * Your task is to create a deep copy (clone) of the graph.
 * The deep copy should have the same structure and values as the original graph, 
 * but all nodes and edges must be independent of the original graph.
 * Input: 
 *      1: [2, 4]
        2: [1, 3]
        3: [2, 4]
        4: [1, 3]
 */
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  setNeighbors(nb) {
    this.neighbors.push(nb);
    return this;
  }
}

// print the graph
function printGraph(startNode) {
  if (!startNode) return;

  const printed = new Map();

  function print(node) {
    if (printed.has(node.value)) return;

    console.log(node);
    printed.set(node.value, true);

    for (let nb of node.neighbors) {
      print(nb);
    }
  }

  print(startNode);
}

// Function to clone a graph
function cloneGraph(startNode) {
  if (!startNode) return;

  const visited = new Map();

  function clone(node) {
    if (visited.has(node)) return visited.get(node);

    const tempNode = new Node(node.value);
    if (!visited.has(node)) {
      visited.set(node, tempNode);
    }

    for (const nb of node.neighbors) {
      tempNode.neighbors.push(clone(nb));
    }
    return tempNode;
  }

  return clone(startNode);
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.setNeighbors(node2).setNeighbors(node4);
node2.setNeighbors(node1).setNeighbors(node3);
node3.setNeighbors(node2).setNeighbors(node4);
node4.setNeighbors(node1).setNeighbors(node3);

console.log(`Original Graph: `);
printGraph(node1);

const cloneStart = cloneGraph(node1);
console.log(`Cloned Graph: `);
printGraph(cloneStart);
