/**
 * Date: 23rd April, 2026
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
  if (numCourses === 0) return;
  if (!prerequisites || prerequisites.length === 0) return;

  const courseDependencies = new Array(numCourses).fill(0);
  const dependencyGraph = new Map();

  for (const [course, dep] of prerequisites) {
    courseDependencies[course] = courseDependencies[course] + 1;
  }

  for (const [course, dep] of prerequisites) {
    if (!dependencyGraph.has(dep)) {
      dependencyGraph.set(dep, []);
    }

    dependencyGraph.set(dep, [...dependencyGraph.get(dep), course]);
  }

  const queue = [],
    executionOrder = [];
  for (let i = 0; i < courseDependencies.length; i++) {
    if (courseDependencies[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    const dependencies = dependencyGraph.get(currCourse);
    if (dependencies && dependencies.length > 0) {
      for (let dep of dependencies) {
        courseDependencies[dep] = courseDependencies[dep] - 1;
        if (courseDependencies[dep] === 0) {
          queue.push(dep);
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
