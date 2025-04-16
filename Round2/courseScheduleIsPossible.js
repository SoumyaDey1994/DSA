/**
 * Date: 16th April, 2025
 * Problem Statement: Course Schedule
 * We are given:
 *      An integer numCourses representing the total number of courses you have to take.
 *      A list of prerequisites where prerequisites[i] = [a, b] means to take course a, you must first take course b.
 * Return true if you can finish all courses, otherwise return false.
 * Note: This is a cycle detection problem in a directed graph.
 * Example 1:
 *      Input: numCourses = 2, prerequisites = [[1,0]]
 *      Output: true
 *      Explanation: You can take course 0, then course 1
 * Example 2:
 *      Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 *      Output: false
 *      Explanation: There's a cycle between 0 and 1
 */
function isPossibleToFinishCourse(numCourses, prerequisites) {
  if (numCourses === 0 || prerequisites.length === 0) return null;
  if (numCourses === 1) return true;

  const dependencies = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill().map(() => []);
  const queue = [];
  // create course, dependent mapping
  for (let [course, dependentOn] of prerequisites) {
    graph[dependentOn].push(course);
    dependencies[course]++;
  }
  // console.log(graph);
  // console.log(dependencies);
  // push courses to queue which are independent
  for (let i = 0; i < graph.length; i++) {
    if (dependencies[i] === 0) {
      queue.push(i);
    }
  }
  // console.log(queue);
  let takenCourses = 0;
  // iterate over courses, take course, reduce dependency 1 after another
  // like this iterate over all courses
  while (queue.length > 0) {
    // console.log(queue);
    let currCourse = queue.shift();
    takenCourses++;

    for (let neighbor of graph[currCourse]) {
      dependencies[neighbor]--;
      if (dependencies[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return takenCourses === numCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];
let isPossible = isPossibleToFinishCourse(numCourses, prerequisites);
console.log(`Courses can be completed: ${isPossible}`);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
isPossible = isPossibleToFinishCourse(numCourses, prerequisites);
console.log(`Courses can be completed: ${isPossible}`);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
isPossible = isPossibleToFinishCourse(numCourses, prerequisites);
console.log(`Courses can be completed: ${isPossible}`);
