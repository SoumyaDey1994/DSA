/**
 * Date: 26th November, 2026
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
    this.neighbours = [];
  }

  setNeighbour(nb) {
    this.neighbours.push(nb);
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
      for (const nb of node.neighbours) {
        print(nb);
      }
    }

    print(startNode);
  }

  static cloneGraph(startNode) {
    if (!startNode) return;

    const visitedMap = new Map();
    function clone(node) {
      if (visitedMap.has(node)) return visitedMap.get(node);

      const tempNode = new Node(node.data);
      visitedMap.set(node, tempNode);

      for (const nb of node.neighbours) {
        tempNode.setNeighbour(clone(nb));
      }
      return tempNode;
    }

    return clone(startNode);
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.setNeighbour(node2).setNeighbour(node4);
node2.setNeighbour(node1).setNeighbour(node3);
node3.setNeighbour(node2).setNeighbour(node4);
node4.setNeighbour(node1).setNeighbour(node3);

console.log(`Original Graph: `);
Graph.printGraph(node1);

const cloneStart = Graph.cloneGraph(node1);
console.log(`\n\nCloned Graph: `);
Graph.printGraph(cloneStart);
