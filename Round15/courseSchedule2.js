/**
 * Date: 28th Augut, 2026
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
function getOrderOfCourses(numCourses, prerequisites) {
  if (numCourses === 0) return;
  if (!prerequisites || prerequisites.length === 0) return;

  const courseDependencies = new Array(numCourses).fill(0);
  const dependencyMap = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dep] = prerequisites[i];
    courseDependencies[course] = courseDependencies[course] + 1;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, dep] = prerequisites[i];
    if (!dependencyMap.has(dep)) {
      dependencyMap.set(dep, []);
    }

    dependencyMap.set(dep, [...dependencyMap.get(dep), course]);
  }

  //   console.log(dependencyMap);

  const executionOrder = [];
  const executionQueue = [];

  for (let course = 0; course < courseDependencies.length; course++) {
    if (courseDependencies[course] === 0) {
      executionQueue.push(course);
    }
  }

  //   console.log(executionQueue);

  while (executionQueue.length > 0) {
    const currCourse = executionQueue.shift();
    executionOrder.push(currCourse);

    if (executionOrder.length === numCourses) return executionOrder;

    const dependentCourses = dependencyMap.get(currCourse);
    // console.log(dependentCourses);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCourse of dependentCourses) {
        courseDependencies[depCourse] = courseDependencies[depCourse] - 1;
        if (courseDependencies[depCourse] === 0) {
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
let outputOrder = getOrderOfCourses(numCourses, prerequisites);
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
outputOrder = getOrderOfCourses(numCourses, prerequisites);
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
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]));
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`,
);
