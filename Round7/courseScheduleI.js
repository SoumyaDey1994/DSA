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
  if (numCourses === 0 || prerequisites.length === 0) return false;

  const courseDependencyCount = new Array(numCourses).fill(0);
  const dependencyCourseMap = new Map();
  // mark how mant dependency present of each course (by index)
  for (let [course, dependency] of prerequisites) {
    courseDependencyCount[course]++;
  }

  for (let [course, dependency] of prerequisites) {
    const dependentCourses = dependencyCourseMap.get(dependency);
    if (!dependentCourses) {
      dependencyCourseMap.set(dependency, [course]);
    } else {
      dependencyCourseMap.set(dependency, [...dependentCourses, course]);
    }
  }

  let noOfCoursesTaken = 0,
    queue = [];

  for (let i = 0; i < courseDependencyCount.length; i++) {
    if (courseDependencyCount[i] === 0) {
      queue.push(i);
      break;
    }
  }
  // BFS traversal
  while (queue.length > 0) {
    const currCourse = queue.shift();
    noOfCoursesTaken++;

    const dependentCourses = dependencyCourseMap.get(currCourse);
    if (dependentCourses && dependentCourses.length > 0) {
      for (let d of dependentCourses) {
        courseDependencyCount[d]--;
        if (courseDependencyCount[d] === 0) {
          queue.push(d);
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
