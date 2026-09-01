/**
 * Date: 1st September, 2026
 * Problem Statement: Daily Temperatures
 * You are given an array temperatures where:
 *     temperatures[i] = temperature on day i
 * For each day, find how many days you have to wait until a warmer temperature occurs.
 * If no warmer day exists → put 0.
 * Return an array answer[] of same length.
 * Example:
 *      temperatures = [73,74,75,71,69,72,76,73]
 *      output: [1,1,4,2,1,1,0,0]
 */
function findWaitDays(temperatues) {
  if (!temperatues || temperatues.length === 0) return;

  const waitDays = new Array(temperatues.length).fill(0);
  const executionStack = [];

  for (let i = 0; i < temperatues.length; i++) {
    while (
      executionStack.length > 0 &&
      temperatues[i] > temperatues[executionStack[executionStack.length - 1]]
    ) {
      const index = executionStack.pop();
      waitDays[index] = i - index;
    }

    executionStack.push(i);
  }

  return waitDays;
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);

temperatures = [60, 50, 40, 30];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);

temperatures = [30, 40, 35, 50, 45];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);

temperatures = [15];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);

temperatures = [15, 10, 5, 3];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);

temperatures = [35, 32, 37, 40, 35, 30, 41];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitDays(temperatures)}]`,
);
