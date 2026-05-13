/**
 * Date: 13th May, 2026
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
  if (numCourses === 0 || prerequisites.length === 0) return;

  const dependencyCounts = new Array(numCourses).fill(0);
  const dependencyGraph = new Map();

  for (const [course, dependency] of prerequisites) {
    dependencyCounts[course] = dependencyCounts[course] + 1;
  }

  for (const [course, dependency] of prerequisites) {
    if (!dependencyGraph.has(dependency)) {
      dependencyGraph.set(dependency, []);
    }

    dependencyGraph.set(dependency, [
      course,
      ...dependencyGraph.get(dependency),
    ]);
  }

  let executionQueue = [],
    countOfCompletedCourses = 0;
  for (let i = 0; i < dependencyCounts.length; i++) {
    if (dependencyCounts[i] === 0) {
      executionQueue.push(i);
    }
  }

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    countOfCompletedCourses++;

    const dependentCourses = dependencyGraph.get(currCourse) || [];
    if (dependentCourses.length > 0) {
      for (let dep of dependentCourses) {
        dependencyCounts[dep] = dependencyCounts[dep] - 1;
        if (dependencyCounts[dep] === 0) {
          executionQueue.push(dep);
        }
      }
    }
  }

  return numCourses === countOfCompletedCourses;
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


((numCourses = 6),
  (prerequisites = [
    [2, 0],
    [3, 1],
    [4, 2],
    [4, 3],
    [5, 2],
  ]));
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);

((numCourses = 5),
  (prerequisites = [
    [2, 0],
    [3, 1],
    [4, 2],
    [4, 3],
    [0, 2],
  ]));
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);
