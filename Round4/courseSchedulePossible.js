/**
 * Date: 22nd June, 2025
 * Problem Statement: Course Schedule
 * We are given:
 *      An integer numCourses representing the total number of courses you have to take.
 *      A list of prerequisites where prerequisites[i] = [a, b] means to take course a, you must first take course b.
 * Return true if you can finish all courses, otherwise return false.
 * Note: This is a cycle detection problem in a directed graph.
 * Example 1:
 *      Input: numCourses = 2, prerequisites = [[1,0]]
 *      Output: true
 *      Explanation: You can take course 0, then course 1
 * Example 2:
 *      Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 *      Output: false
 *      Explanation: There's a cycle between 0 and 1
 */
function isPossibleToFinish(numCourses, prerequisites) {
  if (numCourses === 0) return;
  if (prerequisites?.length === 1) return true;

  const dependencies = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill().map(() => []);
  const queue = [];
  let takenCourses = 0;

  for (const [course, dependsOn] of prerequisites) {
    dependencies[course]++;
    graph[dependsOn].push(course);
  }

  //   console.log(dependencies);
  //   console.log(graph);

  for (let i = 0; i < graph.length; i++) {
    if (dependencies[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    let currCourse = queue.shift();
    // console.log("Curr Course: ", currCourse)
    takenCourses++;

    for (let neighbor of graph[currCourse]) {
      dependencies[neighbor]--;
      if (dependencies[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return takenCourses === numCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];
console.log(
  `Finishing courses [${prerequisites}] possible ? ${isPossibleToFinish(
    numCourses,
    prerequisites
  )}`
);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
console.log(
  `Finishing courses [${prerequisites}] possible ? ${isPossibleToFinish(
    numCourses,
    prerequisites
  )}`
);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
console.log(
  `Finishing courses [${prerequisites}] possible ? ${isPossibleToFinish(
    numCourses,
    prerequisites
  )}`
);
