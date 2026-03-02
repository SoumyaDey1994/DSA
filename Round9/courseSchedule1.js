/**
 * Date: 2nd March, 2026
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
  if (numCourses === 0 || !prerequisites || prerequisites.length === 0)
    return false;

  const courseDependencies = new Array(numCourses).fill(0);
  const dependencyMap = new Map();

  for (let [course, dependency] of prerequisites) {
    courseDependencies[course] = courseDependencies[course] + 1;
  }

  for (let [course, dependency] of prerequisites) {
    if (!dependencyMap.has(dependency)) {
      dependencyMap.set(dependency, []);
    }

    dependencyMap.set(dependency, [...dependencyMap.get(dependency), course]);
  }

  const queue = [];
  let countOfCompletedCourses = 0;
  // get the starting point
  for (let i = 0; i < courseDependencies.length; i++) {
    if (courseDependencies[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    countOfCompletedCourses++;

    const dependentCourses = dependencyMap.get(currCourse);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCr of dependentCourses) {
        courseDependencies[depCr]--;
        if (courseDependencies[depCr] === 0) {
          queue.push(depCr);
        }
      }
    }
  }

  return countOfCompletedCourses === numCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);

((numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]));
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);

((numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]));
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
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
