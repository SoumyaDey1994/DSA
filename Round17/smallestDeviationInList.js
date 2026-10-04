/**
 * Date: 4th October, 2026
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
  if (!input || input.length === 0) return;

  // perform allowed operation
  input = input.map((number) => (number % 2 === 1 ? number * 2 : number));
  // Sort the list
  input.sort((num1, num2) => num1 - num2);

  let smallestDeviation = Infinity;

  while (input[input.length - 1] % 2 === 0) {
    let lastNumber = input.pop();
    lastNumber = lastNumber / 2;
    input.push(lastNumber);

    input.sort((num1, num2) => num1 - num2);
    let min = input[0],
      max = input[input.length - 1];

    smallestDeviation = Math.min(smallestDeviation, max - min);
    // console.log(lastNumber);
  }

  return smallestDeviation;
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
