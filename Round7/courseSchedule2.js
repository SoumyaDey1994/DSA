/**
 * Date: 17th Jan, 2026
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
function findCourseExecutionOrder(numCourses, prerequisites) {
  if (numCourses === 0 || prerequisites.length === 0) return [];

  const courseDependencies = new Array(numCourses).fill(0);
  // note which course has how many dependencies
  for (let [course, dep] of prerequisites) {
    courseDependencies[course]++;
  }

  const dependencyMap = new Map();
  // note dependency: [courses]
  for (let [course, dep] of prerequisites) {
    if (!dependencyMap.has(dep)) {
      dependencyMap.set(dep, []);
    }

    const dependentCourses = dependencyMap.get(dep);
    dependencyMap.set(dep, [...dependentCourses, course]);
  }

  const queue = [];
  // start with courses having 0 dependencies
  for (let i = 0; i < numCourses; i++) {
    if (courseDependencies[i] === 0) {
      queue.push(i);
    }
  }
  const executionOrder = [];
  // execute untill queue becomes empty
  while (queue.length > 0) {
    const currCourse = queue.shift();
    executionOrder.push(currCourse);

    const dependentCourses = dependencyMap.get(currCourse);
    // decrese dependency count of associated courses
    // if some course becomes 0 dependency, put them in queue
    if (dependentCourses) {
      for (let dc of dependentCourses) {
        courseDependencies[dc]--;
        if (courseDependencies[dc] === 0) {
          queue.push(dc);
        }
      }
    }
  }

  return executionOrder.length === numCourses ? executionOrder : [];
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
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
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
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder.join("->")}`
);

(numCourses = 2),
  (prerequisites = [
    [1, 0],
    [0, 1],
  ]);
outputOrder = findCourseExecutionOrder(numCourses, prerequisites);
console.log(
  `Courses can be completed in following order: ${outputOrder?.join("->")}`
);
