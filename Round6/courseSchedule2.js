/**
 * Date: 13th Dec, 2025
 * Problem Statement: Course Schedule 2
 * We are given:
 *      An integer numCourses representing the total number of courses you have to take.
 *      A list of prerequisites where prerequisites[i] = [a, b] means to take course a, you must first take course b.
 * Return one possible order to take the courses.
 * If it’s not possible (i.e., there is a cycle), return an empty array.
 * Example 1:
 *      Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 *      Output: [0,1,2,3] or [0,2,1,3]
 */
function getOrderOfCourses(numCourses, prerequisites) {
  if (numCourses === 1) return prerequisites;
  if (prerequisites.length === 1) return prerequisites;

  const dependencies = new Array(numCourses).fill(0);
  const dependencyMap = new Map();
  const queue = [],
    executionOrder = new Set();
  for (let [course, dep] of prerequisites) {
    dependencies[course]++;
    dependencyMap.set(dep, [...(dependencyMap.get(dep) || []), course]);
  }

  for (let course of dependencies) {
    if (dependencies[course] === 0) {
      queue.push(course);
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.add(currCourse);

    const neighbours = dependencyMap.get(currCourse);
    if (neighbours) {
      for (let neighbour of neighbours) {
        dependencies[neighbour]--;
        if (dependencies[neighbour] === 0) {
          queue.push(neighbour);
        }
      }
    }
  }

  return executionOrder.size === numCourses ? [...executionOrder] : null;
}


let numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
let outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 6),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [2, 1],
    [3, 2],
    [4, 2],
    [4, 3],
    [5, 0],
  ]);
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 6),
  (prerequisites = [
    [2, 0],
    [3, 1],
    [4, 2],
    [4, 3],
    [5, 2],
  ]);
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`
);

