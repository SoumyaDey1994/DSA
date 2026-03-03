/**
 * Date: 3rd March, 2026
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
  if (!prerequisites || prerequisites.length === 0 || numCourses === 0) return;

  const courseDependencies = new Array(numCourses).fill(0);
  const dependencyMap = new Map();

  for (let [course, dependency] of prerequisites) {
    courseDependencies[course] = courseDependencies[course] + 1;

    if (!dependencyMap.has(dependency)) {
      dependencyMap.set(dependency, []);
    }

    dependencyMap.set(dependency, [...dependencyMap.get(dependency), course]);
  }

  // find the startin point
  const queue = [];
  for (let i = 0; i < courseDependencies.length; i++) {
    if (courseDependencies[i] === 0) {
      queue.push(i);
    }
  }

  const executionOrder = [];
  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    const dependentCourses = dependencyMap.get(currCourse);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let depCourse of dependentCourses) {
        courseDependencies[depCourse]--;
        if (courseDependencies[depCourse] === 0) {
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
