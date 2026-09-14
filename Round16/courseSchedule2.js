/**
 * Date: 14th September, 2026
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
function findCourseExecutionOrder(numCourses, prerequisites) {
  if (numCourses === 0) return;
  if (!prerequisites || prerequisites.length === 0) return;

  const courseDepCount = new Array(numCourses).fill(0);
  const depCourseMap = new Map();

  for (const [course, dep] of prerequisites) {
    courseDepCount[course] = courseDepCount[course] + 1;

    if (!depCourseMap.has(dep)) {
      depCourseMap.set(dep, []);
    }

    depCourseMap.set(dep, [...depCourseMap.get(dep), course]);
  }

  const executionQueue = [],
    executionOrder = [];

  for (let i = 0; i < courseDepCount.length; i++) {
    if (courseDepCount[i] === 0) {
      executionQueue.push(i);
    }
  }

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    executionOrder.push(currCourse);

    const dependentCourses = depCourseMap.get(currCourse);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCourse of dependentCourses) {
        courseDepCount[depCourse] = courseDepCount[depCourse] - 1;
        if (courseDepCount[depCourse] === 0) {
          executionQueue.push(depCourse);
        }
      }
    }
  }

  return executionOrder.length === numCourses ? executionOrder : [-1];
}


let numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
let outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 6),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [2, 1],
    [3, 2],
    [4, 2],
    [4, 3],
    [5, 0],
  ]));
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 6),
  (prerequisites = [
    [2, 0],
    [3, 1],
    [4, 2],
    [4, 3],
    [5, 2],
  ]));
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]));
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`,
);
