/**
 * Date: 21st April, 2026
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
  if (!prerequisites || prerequisites.length === 0 || numCourses === 0)
    return false;

  const courseDepenedencyCounts = new Array(numCourses).fill(0),
    dependencyGraph = new Map();

  for (let [course, dep] of prerequisites) {
    courseDepenedencyCounts[course] = courseDepenedencyCounts[course] + 1;
  }

  for (let [course, dep] of prerequisites) {
    if (!dependencyGraph.has(dep)) {
      dependencyGraph.set(dep, []);
    }

    dependencyGraph.set(dep, [...dependencyGraph.get(dep), course]);
  }

  //   console.log("Courses dep count: ", courseDepenedencyCounts);

  const executionQueue = [];
  let noOfCourseFinished = 0;
  for (let i = 0; i < courseDepenedencyCounts.length; i++) {
    if (courseDepenedencyCounts[i] === 0) {
      executionQueue.push(i);
    }
  }

  //    console.log("Execution Queue: ", executionQueue);
  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    noOfCourseFinished++;

    const dependentCourses = dependencyGraph.get(currCourse);
    // console.log("Dep Courses: ", dependentCourses);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCourse of dependentCourses) {
        courseDepenedencyCounts[depCourse]--;
        if (courseDepenedencyCounts[depCourse] === 0) {
          executionQueue.push(depCourse);
        }
      }
    }
  }

  //   console.log(noOfCourseFinished);
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
