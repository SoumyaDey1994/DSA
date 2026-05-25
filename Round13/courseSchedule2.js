/**
 * Date: 25th May, 2026
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
function findCompletionOrder(numCourses, prerequisites) {
  if (numCourses === 0 || !prerequisites || prerequisites.length === 0) return;

  const courseDependencies = new Array(numCourses).fill(0),
    dependencyMap = new Map();

  for (const [course, dep] of prerequisites) {
    courseDependencies[course] = courseDependencies[course] + 1;
  }

  for (const [course, dep] of prerequisites) {
    if (!dependencyMap.has(dep)) {
      dependencyMap.set(dep, []);
    }

    dependencyMap.set(dep, [course, ...dependencyMap.get(dep)]);
  }

  const executionOrder = [],
    queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (courseDependencies[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    if (executionOrder.length === numCourses) return executionOrder;

    const dependencies = dependencyMap.get(currCourse);
    if (dependencies && dependencies.length > 0) {
      for (const dep of dependencies) {
        courseDependencies[dep] = courseDependencies[dep] - 1;
        if (courseDependencies[dep] === 0) {
          queue.push(dep);
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
let outputOrder = findCompletionOrder(numCourses, prerequisites);
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
outputOrder = findCompletionOrder(numCourses, prerequisites);
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
outputOrder = findCompletionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`,
);

((numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]));
outputOrder = findCompletionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`,
);

((numCourses = 7),
  (prerequisites = [
    [2, 0],
    [3, 0],
    [4, 1],
    [5, 3],
    [6, 2],
    [0, 1],
  ]));
outputOrder = findCompletionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`,
);
