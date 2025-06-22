/**
 * Date: 22nd June, 2025
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
function findCourseScheduleOrder(numCourses, prerequisites) {
  if (numCourses === 0) return;

  if (prerequisites?.length === 1) return prerequisites;

  const dependencies = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill().map(() => []);
  const queue = [],
    executionOrder = [];

  for (const [course, dependsOn] of prerequisites) {
    dependencies[course]++;
    graph[dependsOn].push(course);
  }

  for (let dep of dependencies) {
    if (dep === 0) {
      queue.push(dep);
    }
  }

  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    for (let neighbor of graph[currCourse]) {
      dependencies[neighbor]--;
      if (dependencies[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return executionOrder.length === numCourses ? executionOrder : [];
}

let numCourses = 2,
  prerequisites = [[1, 0]];
console.log(
  `Execution order of courses [${prerequisites.map(
    (p) => `[${p}]`
  )}] is: ${findCourseScheduleOrder(numCourses, prerequisites)}`
);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
console.log(
  `Execution order of courses [${prerequisites.map(
    (p) => `[${p}]`
  )}] is: ${findCourseScheduleOrder(numCourses, prerequisites)}`
);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
console.log(
  `Execution order of courses [${prerequisites.map(
    (p) => `[${p}]`
  )}] is: ${findCourseScheduleOrder(numCourses, prerequisites)}`
);

(numCourses = 5),
  (prerequisites = [
    [1, 0],
    [2, 1],
    [3, 0],
    [4, 1],
    [4, 2],
  ]);
console.log(
  `Execution order of courses [${prerequisites.map(
    (p) => `[${p}]`
  )}] is: ${findCourseScheduleOrder(numCourses, prerequisites)}`
);

(numCourses = 5),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 4],
    [4, 1],
    [0, 4],
  ]);
console.log(
  `Execution order of courses [${prerequisites.map(
    (p) => `[${p}]`
  )}] is: ${findCourseScheduleOrder(numCourses, prerequisites)}`
);
