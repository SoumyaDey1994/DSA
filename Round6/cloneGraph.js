/**
 * Date: 15th Dec, 2025
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
    this.neighBours = [];
  }

  setNeighbors(nb) {
    this.neighBours.push(nb);
    return this;
  }
}

class Graph {
  static printGraph(startNode) {
    const visited = new Set();

    function print(node) {
      if (visited.has(node)) return;

      console.log("Node: ", node);
      visited.add(node);

      for (let nb of node.neighBours) {
        print(nb);
      }
    }

    print(startNode);
  }

  static cloneGraph(startNode) {
    const visited = new Map();

    function clone(node) {
      if (visited.has(node)) return visited.get(node);

      const tempNode = new Node(node.data);
      visited.set(node, tempNode);

      for (let nb of node.neighBours) {
        tempNode.neighBours.push(clone(nb));
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

node1.setNeighbors(node2).setNeighbors(node4);
node2.setNeighbors(node1).setNeighbors(node3);
node3.setNeighbors(node2).setNeighbors(node4);
node4.setNeighbors(node1).setNeighbors(node3);

console.log(`Original Graph: `);
Graph.printGraph(node1);

const cloneStart = Graph.cloneGraph(node1);
console.log(`Cloned Graph: `);
Graph.printGraph(cloneStart);
