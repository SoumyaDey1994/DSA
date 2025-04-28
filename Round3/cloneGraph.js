/**
 * Date: 28th April, 2025
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
class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  setNeighbors(nb) {
    this.neighbors.push(nb);
    return this;
  }
}

function printGraph(startNode) {
  if (!startNode) return;

  const visited = new Map();
  const queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();
    if (visited.has(node)) continue;

    console.log(node);
    visited.set(node, true);
    for (let nb of node.neighbors) {
      queue.push(nb);
    }
  }
}

function cloneGraph(startNode) {
  if (!startNode) return;

  const visited = new Map();
  function clone(node) {
    if (visited.has(node)) return visited.get(node);

    const temp = new GraphNode(node.value);
    visited.set(node, temp);

    for (const nb of node.neighbors) {
      temp.neighbors.push(clone(nb));
    }

    return temp;
  }
  return clone(startNode);
}

const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.setNeighbors(node2).setNeighbors(node4);
node2.setNeighbors(node1).setNeighbors(node3).setNeighbors(node4);
node3.setNeighbors(node2).setNeighbors(node4);
node4.setNeighbors(node1).setNeighbors(node3).setNeighbors(node2);

console.log(`Original Graph: `);
printGraph(node1);

// Clone the graph
const cloneStart = cloneGraph(node1);
console.log(`\nCloned Graph: `);
printGraph(cloneStart);
