/**
 * Date: 22nd June, 2025
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
    this.neighbor = [];
  }

  setNeighbor(nb) {
    this.neighbor.push(nb);
    return this;
  }
}

function printGraph(startNode) {
  if (!startNode) return;

  const visited = new Map();
  const print = (node) => {
    if (visited.has(node)) return;
    visited.set(node, true);
    console.log(node);
    for (let neighbor of node.neighbor) {
      print(neighbor);
    }
  };

  print(startNode);
}

function cloneGraph(startNode) {
  if (!startNode) return;

  const visited = new Map();

  const clone = (node) => {
    if (visited.has(node)) return visited.get(node);

    const temp = new Node(node.value);
    if (!visited.has(node)) {
      visited.set(node, temp);
    }
    for (let neighbor of node.neighbor) {
      temp.neighbor.push(clone(neighbor));
    }

    return temp;
  };

  return clone(startNode);
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.setNeighbor(node3).setNeighbor(node5);
node2.setNeighbor(node4);
node3.setNeighbor(node1).setNeighbor(node4);
node4.setNeighbor(node2).setNeighbor(node5);
node5.setNeighbor(node1).setNeighbor(node4);

console.log(`Original Graph: `);
printGraph(node1);

const cloneStart = cloneGraph(node1);
console.log(`Cloned Graph: `);
printGraph(cloneStart);
