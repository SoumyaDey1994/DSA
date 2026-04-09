/**
 * Date: 9th April, 2026
 * Problem Statement: Task Scheduler
 * Given an array of tasks:
 *      tasks = ["A","A","A","B","B","B"] &
 *      A non-negative integer n representing cooldown time
 * Return the minimum number of time units required to finish all tasks.
 * Rules:
 *      Each task takes 1 unit of time
 *      Same tasks must be separated by at least n units
 *      You can either:
 *          Execute a task
 *          Or stay idle
 * Example 1:
 *      tasks = ["A","A","A","B","B","B"], n=2
 *      output: 8
 *      Explanation:
 *          one valid schedule: A → B → idle → A → B → idle → A → B
 *          Same tasks (A or B) are 2 units apart
 *          Total time = 8
 */
function findMinTimeUnit(tasks, n) {
  if (!tasks || tasks.length === 0) return 0;
  if (n === 0) return tasks.length;

  const freqMap = new Map();
  for (let task of tasks) {
    freqMap.set(task, (freqMap.get(task) || 0) + 1);
  }
  const maxFreq = Math.max(...freqMap.values()); // O(n)
  let countOfMaxFreqTask = 0;
  for (let [task, freq] of freqMap) {
    // O(n)
    if (freq === maxFreq) {
      countOfMaxFreqTask++;
    }
  }

  const reqTime = (maxFreq - 1) * (n + 1) + countOfMaxFreqTask;
  return Math.max(reqTime, tasks.length);
}

let tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2;
console.log(
  `Min time unit to complete [${tasks}] with n=${n} is: ${findMinTimeUnit(tasks, n)}`,
);

((tasks = ["A", "A", "A", "B", "B", "B"]), (n = 0));
console.log(
  `Min time unit to complete [${tasks}] with n=${n} is: ${findMinTimeUnit(tasks, n)}`,
);

((tasks = ["A", "A", "A", "A", "B", "C", "D", "E"]), (n = 2));
console.log(
  `Min time unit to complete [${tasks}] with n=${n} is: ${findMinTimeUnit(tasks, n)}`,
);

((tasks = ["A", "B", "C", "D"]), (n = 3));
console.log(
  `Min time unit to complete [${tasks}] with n=${n} is: ${findMinTimeUnit(tasks, n)}`,
);
