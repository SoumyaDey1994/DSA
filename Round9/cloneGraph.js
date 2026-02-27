/**
 * Date: 27th Feb, 2026
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

  setNeighbours(node) {
    this.neighbours.push(node);
    return this;
  }
}

class Graph {
  static printGraph(startNode) {
    if (!startNode) return;

    const visited = new Map();

    function print(node) {
      if (visited.has(node)) return;

      visited.set(node, true);
      console.log(node);
      for (let nb of node.neighbours) {
        print(nb);
      }
    }

    print(startNode);
  }

  static cloneGraph(startNode) {
    if (!startNode) return;

    const visited = new Map();

    function clone(node) {
      if (visited.has(node)) return visited.get(node);

      const tempNode = new Node(node.data);
      visited.set(node, tempNode);

      for (let nb of node.neighbours) {
        tempNode.setNeighbours(clone(nb));
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

node1.setNeighbours(node2).setNeighbours(node4);
node2.setNeighbours(node1).setNeighbours(node3);
node3.setNeighbours(node2).setNeighbours(node4);
node4.setNeighbours(node1).setNeighbours(node3);

console.log(`Original Graph: `);
Graph.printGraph(node1);

const cloneStart = Graph.cloneGraph(node1);
console.log(`\n\nCloned Graph: `);
Graph.printGraph(cloneStart);
