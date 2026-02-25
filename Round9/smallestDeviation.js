/**
 * Date: 25th Feb, 2026
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
function findSmallestDeviation(nums) {
  if (!nums || nums.length === 0) return 0;

  nums = nums.map((num) => (num % 2 === 1 ? num * 2 : num)); // multiple 2 with odd to make them evev
  nums.sort((num1, num2) => num1 - num2); // sort in ASC order
  let smallestDeviation = Infinity;

  while (nums[nums.length - 1] % 2 === 0) {
    let max = nums.pop();
    max = max / 2;
    nums.push(max);

    nums.sort((num1, num2) => num1 - num2); // sort in ASC order
    smallestDeviation = Math.min(
      smallestDeviation,
      nums[nums.length - 1] - nums[0],
    );
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
