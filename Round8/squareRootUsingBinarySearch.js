/**
 * Date: 22nd Jan, 2026
 * Problem Statement: Find Square Root using Binary Search
 * Given a non-negative integer x, we need to find the square root of x.
 * The result should be only the integer part (i.e., floor value of the actual square root).
 * You must not use built-in square root functions, and you should optimize the solution using binary search.
 * ✅ Constraints:
 *      Input: x is a non-negative integer
 *      Output: Return the largest integer r such that r * r <= x
 * Example 1:
 *      Input: x = 4
 *      Output: 2
 *      Explanation: √4 = 2
 * Example 2:
 *      Input: x = 8
 *      Output: 2
 *      Explanation: √8 ≈ 2.828, floor(√8) = 2
 * Example 3:
 *      Input: x = 0
 *      Output: 0
 *      Explanation: √0 = 0
 */
function findSquareRoot(num) {
  if (!num || num <= 1) return num;

  let left = 0,
    right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSqr = mid * mid;
    const midPlus1Sqr = (mid + 1) * (mid + 1);
    let result = null;

    if (midSqr <= num && midPlus1Sqr > num) {
      return mid;
    } else if (midSqr > num) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

let num = 4;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 8;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 25;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 80;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 101;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 624;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 385;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 169;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);
