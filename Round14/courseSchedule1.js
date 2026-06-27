/**
 * Date: 27th June, 2025
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
  if (numCourses === 0) return;
  if (!prerequisites || prerequisites.length === 0) return;

  const courseDependencies = new Array(numCourses).fill(0);
  const dependencyMap = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dependency] = prerequisites[i];
    courseDependencies[course] = courseDependencies[course] + 1;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dependency] = prerequisites[i];
    if (!dependencyMap.has(dependency)) {
      dependencyMap.set(dependency, []);
    }

    dependencyMap.set(dependency, [course, ...dependencyMap.get(dependency)]);
  }

  let executionQueue = [];
  for (let i = 0; i < courseDependencies.length; i++) {
    if (courseDependencies[i] === 0) {
      executionQueue.push(i);
    }
  }

  let noOfCoursesFinished = 0;
//   console.log(executionQueue, dependencyMap);

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    noOfCoursesFinished++;

    const dependencies = dependencyMap.get(currCourse);
    if (dependencies && dependencies.length > 0) {
      for (const dep of dependencies) {
        courseDependencies[dep] = courseDependencies[dep] - 1;
        if (courseDependencies[dep] === 0) {
          executionQueue.push(dep);
        }
      }
    }
  }

  return noOfCoursesFinished === numCourses;
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

((numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 2],
    [2, 1],
    [1, 3],
  ]));
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`,
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`,
);
