/**
 * Date: 10th Feb, 2026
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
function findSmallestDeviation(input) {
  if (!input || input.length <= 1) return 0;

  input = input.map((ele) => (ele % 2 === 1 ? ele * 2 : ele));
  // sort the input in ASC order
  input.sort((num1, num2) => num1 - num2);
  let minDeviation = input[input.length - 1] - input[0];
  // loop untill largest element is even
  while (input[input.length - 1] % 2 === 0) {
    max = input.pop(); // as sorted, last element is largest element
    max = max / 2;
    input.push(max);

    input.sort((num1, num2) => num1 - num2);
    minDeviation = Math.min(minDeviation, input[input.length - 1] - input[0]);
  }

  return minDeviation;
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
