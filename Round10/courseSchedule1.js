/**
 * Date: 18th March, 2026
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

  const courseDepenedencyCounts = new Array(numCourses).fill(0);
  const dependencyCourseGraph = new Map();

  for (let [course, dep] of prerequisites) {
    courseDepenedencyCounts[course] = courseDepenedencyCounts[course] + 1;
  }

  for (let [course, dep] of prerequisites) {
    if (!dependencyCourseGraph.has(dep)) {
      dependencyCourseGraph.set(dep, []);
    }

    dependencyCourseGraph.set(dep, [...dependencyCourseGraph.get(dep), course]);
  }

  const courseExecutionQueue = [];
  let noOfCourseFinished = 0;
  for (let i = 0; i < courseDepenedencyCounts.length; i++) {
    if (courseDepenedencyCounts[i] === 0) {
      courseExecutionQueue.push(i);
    }
  }

  while (courseExecutionQueue.length > 0) {
    const currCourse = courseExecutionQueue.shift();
    noOfCourseFinished++;

    const depCourses = dependencyCourseGraph.get(currCourse);
    if (depCourses?.length > 0) {
      for (const course of depCourses) {
        courseDepenedencyCounts[course] = courseDepenedencyCounts[course] - 1;
        if (courseDepenedencyCounts[course] === 0) {
          courseExecutionQueue.push(course);
        }
      }
    }
  }

  return noOfCourseFinished === numCourses;
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
