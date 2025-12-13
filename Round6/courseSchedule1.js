/**
 * Date: 12th Dec, 2025
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
function isPossibleToFinishCourses(numCourses, prerequisites) {
  if (numCourses === 1) return true;
  if (prerequisites.length === 1) return true;

  const dependencies = new Array(numCourses).fill(0);
  const depMap = new Map();
  const queue = [];

  for (let [course, dep] of prerequisites) {
    dependencies[course]++;
    if (!depMap.has(dep)) {
      depMap.set(dep, []);
    }
    depMap.set(dep, [...depMap.get(dep), course]);
  }

  for (let dependency of depMap.keys()) {
    if (dependencies[dependency] === 0) {
      queue.push(dependency);
    }
  }

  let noOfCoursesTaken = 0;
  // console.log(dependencies);
  // console.log(depMap);
  while (queue.length > 0) {
    const currCourse = queue.shift();
    noOfCoursesTaken++;

    const neighbours = depMap.get(currCourse);
    // console.log(`Curr Course: `, currCourse, `neighbours: `, neighbours);
    if (neighbours) {
      for (let neighbor of neighbours) {
        dependencies[neighbor]--;
        if (dependencies[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  return noOfCoursesTaken === numCourses;
}

let numCourses = 2,
  prerequisites = [[1, 0]];
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`
);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`
);

(numCourses = 4),
  (prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
console.log(
  `Finishing courses [${prerequisites.map(
    (t) => `[${t}]`
  )}] possible ? ${isPossibleToFinishCourses(numCourses, prerequisites)}`
);
