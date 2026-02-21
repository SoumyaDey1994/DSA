/**
 * Date: 21st Feb, 2026
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
function findWaitingDays(temperatues) {
  if (!temperatues || temperatues.length === 0) return [];

  const stack = [],
    result = new Array(temperatues.length).fill(0);

  for (let i = 0; i < temperatues.length; i++) {
    while (stack.length > 0 && temperatues[i] > temperatues[stack.length - 1]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);

temperatures = [60, 50, 40, 30];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);

temperatures = [30, 40, 35, 50, 45];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);

temperatures = [15];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);

temperatures = [15, 10, 5, 3];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);

temperatures = [35, 32, 37, 40, 35, 30, 41];
console.log(
  `Waiting period(in days) for temperatues [${temperatures}] are: [${findWaitingDays(temperatures)}]`,
);
