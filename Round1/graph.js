/**
 * Date: 12th Jan, 2025
 * Create a Graph class with following methods,
 *      1. add vertex
 *      2. add edge b/w 2 vertex
 *      3. print graph
 */
class Graph {
    constructor() {
        this.adjacents = new Map();
    }

    addVertex(vtx) {
        this.adjacents.set(vtx, []);
    }

    addEdge(vtx1, vtx2) {
        if(!this.adjacents.has(vtx1)) {
            this.addVertex(vtx1);
        }

        if(!this.adjacents.has(vtx2)) {
            this.addVertex(vtx2);
        }

        this.adjacents.get(vtx1).push(vtx2);
        this.adjacents.get(vtx2).push(vtx1);
    }

    printGraph() {
        for(let [v, e] of this.adjacents.entries()) {
            console.log(`${v} --> [${e}]`);
        }
    }
}

// Example Usage
const graph = new Graph();
// Adding vertices
    // graph.addVertex("A");
    // graph.addVertex("B");
    // graph.addVertex("C");
    // graph.addVertex("D");
    // graph.addVertex("E");
    // graph.addVertex("F");

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

graph.printGraph(); // Print the vertex & edges
