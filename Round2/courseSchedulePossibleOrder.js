/**
 * Date: 16th April, 2025
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
  // invalid scenario
  if (numCourses === 0 || prerequisites.length === 0) return [];

  const dependentCount = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill().map(() => []);
  // create dependency graph
  for (let [course, dependentOn] of prerequisites) {
    graph[dependentOn].push(course);
    dependentCount[course]++;
  }
  // console.log("Graph: ", graph);
  // console.log("Dependent: ", dependentCount);
  const queue = [];
  const orderOfCourses = [];
  // push courses in queue, which are independent
  for (let i = 0; i < numCourses; i++) {
    if (dependentCount[i] === 0) {
      queue.push(i);
    }
  }
  // iterate over the queued courses
  while (queue.length > 0) {
    // console.log("Queue: ", queue);
    const currCourse = queue.shift();
    orderOfCourses.push(currCourse);
    // check of each dependent course & resolve them 1 by 1
    for (let neighbor of graph[currCourse]) {
      dependentCount[neighbor]--;
      // when course becomes independent, push it to queue for pick up
      if (dependentCount[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return orderOfCourses.length === numCourses ? orderOfCourses : [];
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
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 6),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [2, 1],
    [3, 2],
    [4, 2],
    [4, 3],
    [5, 0],
  ]);
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 6),
  (prerequisites = [
    [2, 0],
    [3, 1],
    [4, 2],
    [4, 3],
    [5, 2],
  ]);
outputOrder = getOrderOfCourses(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);
