/**
 * Date: 12th April, 2026
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

  setNeighbours(nb) {
    this.neighbours.push(nb);
    return this;
  }
}

class Graph {
  static printGraph(startNode) {
    const visited = new Set();

    function print(node) {
      if (visited.has(node)) return;

      visited.add(node);
      console.log(node);
      for (let nb of node.neighbours) {
        print(nb);
      }
    }

    print(startNode);
  }

  static cloneGraph(startNode) {
    const visited = new Map();

    function clone(node) {
      if (visited.has(node)) return visited.get(node);

      const temp = new Node(node.data);
      visited.set(node, temp);
      for (let nb of node.neighbours) {
        temp.setNeighbours(clone(nb));
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

// Connect the nodes
node1.setNeighbours(node2).setNeighbours(node4);
node2.setNeighbours(node1).setNeighbours(node3);
node3.setNeighbours(node2).setNeighbours(node4);
node4.setNeighbours(node1).setNeighbours(node3);
console.log(`........Original Graph..........`);
Graph.printGraph(node1);

const cloneStart = Graph.cloneGraph(node1);
console.log(`........Cloned Graph..........`);
Graph.printGraph(cloneStart);
