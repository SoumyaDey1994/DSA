/**
 * Write down implementation of
 * BFS & DFS travarsal
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map(); // To store the graph as an adjacency list
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // For undirected graphs
  }

  // Placeholder for Breadth-First Search (BFS) Traversal
  bfs(start) {
    console.log(`BFS traversal starting from vertex: ${start}`);
    // TODO: Implement BFS logic here
    const queue = [start];
    const visited = new Map();
    visited.set(start, true);
    while(queue.length > 0) {
      //Pop-out & Print the element
      const vertex = queue.shift();
      console.log(vertex);
      const adjacents = this.adjacencyList.get(vertex);
      for(let adj of adjacents) {
        if(!visited.has(adj)) {
          // console.log(vertex);
          queue.push(adj);
          visited.set(adj, true);
        }
      }
    }
  }

  travarseDFS(start, visited) {
    console.log(start);
    visited.set(start, true);
    const adjacents = this.adjacencyList.get(start);
    // console.log(`Adjacents of ${start} are: ${adjacents}`);
    for(let adj of adjacents) {
      if(!visited.has(adj)) {
        this.travarseDFS(adj, visited);
      }
    }
  }

  // Placeholder for Depth-First Search (DFS) Traversal
  dfs(start, visited) {
    console.log(`DFS traversal starting from vertex: ${start}`);
    // TODO: Implement DFS logic here
    this.travarseDFS(start, visited);
  }

  // Print the graph's adjacency list
  printGraph() {
    for (const [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }
}

// Example Usage
const graph = new Graph();

// Adding vertices and edges
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");
// Printing the graph
// graph.printGraph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding edges (with cycles and a complex structure)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("F", "C"); // Cycle from F to C
graph.addEdge("B", "E"); // Additional connection forming another cycle
graph.addEdge("A", "F"); // Direct connection from A to F
graph.addEdge("C", "D");

// Calling placeholder methods
graph.bfs("A");
graph.dfs("A", new Map());
