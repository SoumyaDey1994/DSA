/**
 * Date: 20th March, 2026
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
function findCourseCompletionOrder(numCourses, prerequisites) {
  if (!prerequisites || prerequisites.length === 0 || numCourses === 0)
    return [-1];

  const courseDependencyCount = new Array(numCourses).fill(0);
  const dependecyCourseMap = new Map();

  for (let [course, dep] of prerequisites) {
    courseDependencyCount[course] = courseDependencyCount[course] + 1;
  }

  for (let [course, dep] of prerequisites) {
    if (!dependecyCourseMap.has(dep)) {
      dependecyCourseMap.set(dep, []);
    }

    dependecyCourseMap.set(dep, [...dependecyCourseMap.get(dep), course]);
  }

  const executionQueue = [],
    executionOrder = [];
  for (let i = 0; i < numCourses; i++) {
    if (courseDependencyCount[i] === 0) {
      executionQueue.push(i);
    }
  }

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    executionOrder.push(currCourse);

    const dependentCourses = dependecyCourseMap.get(currCourse);

    if (dependentCourses && dependentCourses.length > 0) {
      for (const depCr of dependentCourses) {
        courseDependencyCount[depCr] = courseDependencyCount[depCr] - 1;
        if (courseDependencyCount[depCr] === 0) {
          executionQueue.push(depCr);
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
let outputOrder = findCourseCompletionOrder(numCourses, prerequisites);
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
outputOrder = findCourseCompletionOrder(numCourses, prerequisites);
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
outputOrder = findCourseCompletionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]));
outputOrder = findCourseCompletionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`,
);
