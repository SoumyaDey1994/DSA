/**
 * Date: 16th July, 2026
 * Problem Statement: Redundant Connection
 * You’re given edges of a graph that started as a tree (n nodes, n-1 edges).
 * Then one extra edge was added.
 * Return the edge that creates a cycle.
 * Example 1:
 *      edges: [[1,2], [1,3], [2,3]]
 *      output: [2,3]
 *      explanation: the edge from node 2 to node 3 makes the tree cycling, hence thats the ans
 */
function findRedundantConnection(edges) {
  if (!edges || edges.length < 3) return;

  const parent = [];
  for (let i = 0; i < edges.length; i++) {
    parent[i] = i;
  }

  function findParent(node) {
    if (parent[node] !== node) {
      parent[node] = findParent(parent[node]);
    }

    return parent[node];
  }

  function findUnion(nodeA, nodeB) {
    const parentA = findParent(nodeA);
    const parentB = findParent(nodeB);

    if (parentA === parentB) return false;

    parent[nodeB] = nodeA;
    return true;
  }

  for (let [v1, v2] of edges) {
    if (!findUnion(v1, v2)) return [v1, v2];
  }

  return [-1];
}


let edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
let redundantEdge = findRedundantConnection(edges);
console.log(
  `Redundant connection of [${edges.map((e) => `[${e}]`)}] is: [${redundantEdge}]`,
);

edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
redundantEdge = findRedundantConnection(edges);
console.log(
  `Redundant connection of [${edges.map((e) => `[${e}]`)}] is: [${redundantEdge}]`,
);

edges = [
  [1, 2],
  [1, 3],
  [3, 4],
  [4, 5],
  [2, 4],
  [4, 3],
];
redundantEdge = findRedundantConnection(edges);
console.log(
  `Redundant connection of [${edges.map((e) => `[${e}]`)}] is: [${redundantEdge}]`,
);
