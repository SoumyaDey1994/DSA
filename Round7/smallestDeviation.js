/**
 * Date: 4th Feb, 2026
 * Problem Statement: Find minimal smallest deviation
 * You are given a list of positive integers.
 * Your goal is to make the "deviation" of the list as small as possible.
 * Note: The deviation is simply the difference between the largest and smallest number in the list.
 * To do this, you can apply these two operations as many times as you like on any number:
 *      If a number is odd, you may multiply it by 2.
 *      If a number is even, you may divide it by 2.
 * Return the minimum possible deviation you can achieve.
 * Example 1:
 *      input = [1, 2, 3, 4]
 *      output = 1
 */

// Overall complexity: O(N² log N log M)
function findSmallestDeviation(input) {
  if (!input || input.length === 0) return 0;

  // make all numbers even
  input = input
    .map((ele) => (ele % 2 === 1 ? ele * 2 : ele))
    .sort((a, b) => a - b); // O(NLogN)

  let min = input[0];
  let deviation = input[input.length - 1] - min;

  while (input[input.length - 1] % 2 === 0) { // O(NlogM)
    // O(logM)
    let max = input.pop();

    max = max / 2;
    input.push(max);

    min = Math.min(min, max); // O(1)
    input.sort((a, b) => a - b); // O(NlogN)

    deviation = Math.min(deviation, input[input.length - 1] - min);
  }

  return deviation;
}

let input = [1, 2, 3, 4];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);

input = [3, 5, 7];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);

input = [8, 4, 2, 16];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);

input = [7];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);

input = [2, 10, 8, 1];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);

input = [1024, 512, 256, 128, 64];
console.log(
  `Min Deviation for list [${input}] is: ${findSmallestDeviation(input)}`,
);
