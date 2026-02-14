/**
 * Date: 14th Feb, 2025
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
function isPossibleToFinishCourses(numCourses, prerequisites) {
  if (numCourses === 0 || prerequisites.length === 0) return false;

  const dependencyCounts = new Array(numCourses).fill(0);
  for (let [course, dependency] of prerequisites) {
    dependencyCounts[course] = dependencyCounts[course] + 1;
  }

  const depMap = new Map();
  for (let [course, dependency] of prerequisites) {
    if (!depMap.has(dependency)) {
      depMap.set(dependency, []);
    }

    depMap.set(dependency, [course, ...depMap.get(dependency)]);
  }

  const queue = [];
  for (let index = 0; index < dependencyCounts.length; index++) {
    if (dependencyCounts[index] === 0) {
      queue.push(index); // starting point, course having no dependency
    }
  }

  let completedCourses = 0;
  while (queue.length > 0) {
    const currCourse = queue.shift();
    completedCourses++;

    const dependents = depMap.get(currCourse) || [];
    for (let d of dependents) {
      dependencyCounts[d]--;
      if (dependencyCounts[d] === 0) {
        queue.push(d);
      }
    }
  }

  return completedCourses === numCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);


(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`
);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`
);
