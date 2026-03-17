/**
 * Date: 17th March, 2026
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
  constructor(data) {
    this.data = data;
    this.neighbors = [];
  }

  setNeighbors(nb) {
    this.neighbors.push(nb);
    return this;
  }
}

class Graph {
  static printGraph(startNode) {
    if (!startNode) return;

    const visited = new Set();
    function print(node) {
      if (visited.has(node)) return;

      console.log(node);
      visited.add(node);
      for (let nb of node.neighbors) {
        print(nb);
      }
    }

    print(startNode);
  }

  static cloneGraph(startNode) {
    if (!startNode) return;
    const visitedMap = new Map();

    function clone(node) {
      if (visitedMap.has(node)) {
        return visitedMap.get(node);
      }

      const temp = new Node(node.data);
      visitedMap.set(node, temp);

      for (let nb of node.neighbors) {
        temp.setNeighbors(clone(nb));
      }

      return temp;
    }

    return clone(startNode);
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.setNeighbors(node2).setNeighbors(node4);
node2.setNeighbors(node1).setNeighbors(node3).setNeighbors(node4);
node3.setNeighbors(node2).setNeighbors(node4);
node4.setNeighbors(node1).setNeighbors(node3).setNeighbors(node2);

console.log(`Original Graph: `);
Graph.printGraph(node1);

// Clone the graph
const cloneStart = Graph.cloneGraph(node1);
console.log(`\nCloned Graph: `);
Graph.printGraph(cloneStart);
