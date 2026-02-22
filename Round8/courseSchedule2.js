/**
 * Date: 22nd Feb, 2026
 * Problem Statement: Course Schedule 2
 * We are given:
 *      An integer numCourses representing the total number of courses you have to take.
 *      A list of prerequisites where prerequisites[i] = [a, b] means to take course a,
 *      you must first take course b.
 * Return one possible order to take the courses.
 * If it’s not possible (i.e., there is a cycle), return an empty array.
 * Example 1:
 *      Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 *      Output: [0,1,2,3] or [0,2,1,3]
 */
function findCourseExecutionOrder(numCourses, prerequisites) {
  if (numCourses === 0) return [-1];
  if (!prerequisites || prerequisites.length === 0) return [-1];

  const dependencies = new Array(numCourses).fill(0),
    depCourseMap = new Map();
  for (let [course, dep] of prerequisites) {
    dependencies[course] = dependencies[course] + 1; // record how many dependencies for each course
  }

  for (let [course, dep] of prerequisites) {
    if (!depCourseMap.has(dep)) {
      depCourseMap.set(dep, []);
    }

    depCourseMap.set(dep, [...depCourseMap.get(dep), course]); // record dependency: [courses depends on]
  }

  const queue = [],
    executionOrder = [];
  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] === 0) {
      queue.push(i); // note starting course having 0 dependencies
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    if (depCourseMap.has(currCourse)) {
      // console.log(currCourse, depCourseMap.get(currCourse))
      for (let depCourse of depCourseMap.get(currCourse)) {
        dependencies[depCourse] = dependencies[depCourse] - 1;
        if (dependencies[depCourse] === 0) {
          queue.push(depCourse);
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
