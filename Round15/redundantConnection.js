/**
 * Date: 28th August, 2026
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
  if (!edges || edges.length <= 2) return;

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
    const parentOfNodeA = findParent(nodeA);
    const parentOfNodeB = findParent(nodeB);

    if (parentOfNodeA === parentOfNodeB) return false;

    parent[nodeB] = nodeA;
    return true;
  }

  for (let [u, v] of edges) {
    if (!findUnion(u, v)) return [u, v];
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
