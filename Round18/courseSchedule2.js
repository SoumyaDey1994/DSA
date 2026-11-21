/**
 * Date: 21st November, 2026
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

  const courseDependencyCount = new Array(numCourses).fill(0);
  const dependencyMap = new Map();

  for (let [course, _] of prerequisites) {
    courseDependencyCount[course] = courseDependencyCount[course] + 1;
  }

  for (const [course, dep] of prerequisites) {
    if (!dependencyMap.has(dep)) {
      dependencyMap.set(dep, []);
    }

    dependencyMap.set(dep, [...dependencyMap.get(dep), course]);
  }

  const executionOrder = [],
    executionQueue = [];
  for (let i = 0; i < courseDependencyCount.length; i++) {
    if (courseDependencyCount[i] === 0) {
      executionQueue.push(i);
    }
  }

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    executionOrder.push(currCourse);

    if (executionOrder.length === numCourses) return executionOrder;

    const dependentCourses = dependencyMap.get(currCourse);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCourse of dependentCourses) {
        courseDependencyCount[depCourse] = courseDependencyCount[depCourse] - 1;
        if (courseDependencyCount[depCourse] === 0) {
          executionQueue.push(depCourse);
        }
      }
    }
  }

  return [-1];
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
