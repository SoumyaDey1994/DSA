/**
 * Date: 22nd March, 2026
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
function calculateTotalTimeToCompleteTasks(tasks, n) {
  if (!tasks || tasks.length === 0) return 0;
  if (n === 0) return tasks.length; // if no cooldown, execute tasks as it is ordered

  const freqList = new Array(26).fill(0);

  for (let task of tasks) {
    const taskCode = task.charCodeAt(0) - 65;
    freqList[taskCode] = freqList[taskCode] + 1;
  }

  const maxFreq = Math.max(...freqList);
  let countOfhigestFreqTask = 0;

  for (let taskIndex = 0; taskIndex < 26; taskIndex++) {
    if (freqList[taskIndex] === maxFreq) {
      countOfhigestFreqTask++;
    }
  }

  const reqTime = (maxFreq - 1) * (n + 1) + countOfhigestFreqTask;

  return Math.max(reqTime, tasks.length);
}

let tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2;
console.log(
  `Min time unit to complete [${tasks}] is: ${calculateTotalTimeToCompleteTasks(tasks, n)}`,
);

((tasks = ["A", "A", "A", "B", "B", "B"]), (n = 0));
console.log(
  `Min time unit to complete [${tasks}] is: ${calculateTotalTimeToCompleteTasks(tasks, n)}`,
);

((tasks = ["A", "A", "A", "A", "B", "C", "D", "E"]), (n = 2));
console.log(
  `Min time unit to complete [${tasks}] is: ${calculateTotalTimeToCompleteTasks(tasks, n)}`,
);

((tasks = ["A", "B", "C", "D"]), (n = 3));
console.log(
  `Min time unit to complete [${tasks}] is: ${calculateTotalTimeToCompleteTasks(tasks, n)}`,
);
