/**
 * Date: 14th August, 2026
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

  const courseDepenedencyCounts = new Array(numCourses).fill(0);
  const dependencyCourseGraph = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dep] = prerequisites[i];
    courseDepenedencyCounts[course] = courseDepenedencyCounts[course] + 1;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dep] = prerequisites[i];
    if (!dependencyCourseGraph.has(dep)) {
      dependencyCourseGraph.set(dep, []);
    }

    dependencyCourseGraph.set(dep, [...dependencyCourseGraph.get(dep), course]);
  }

  const courseExecutionQueue = [];
  let numOfCompletedCourses = 0;
  for (let i = 0; i < courseDepenedencyCounts.length; i++) {
    if (courseDepenedencyCounts[i] === 0) {
      courseExecutionQueue.push(i);
    }
  }

  while (courseExecutionQueue.length > 0) {
    const currCourse = courseExecutionQueue.shift();
    numOfCompletedCourses++;
    const dependentCourses = dependencyCourseGraph.get(currCourse);

    if (dependentCourses && dependentCourses.length > 0) {
      for (const dep of dependentCourses) {
        courseDepenedencyCounts[dep] = courseDepenedencyCounts[dep] - 1;
        if (courseDepenedencyCounts[dep] === 0) {
          courseExecutionQueue.push(dep);
        }
      }
    }
  }

  return numOfCompletedCourses === numCourses;
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
