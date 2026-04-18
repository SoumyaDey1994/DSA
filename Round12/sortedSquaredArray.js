/**
 * Date: 18th April, 2026
 * Problem Statement: Sorted Squared Array
 * Write a function that takes in a non-empty array of integers
 *      that are sorted in ascending order and returns a new array of the same
 *      length with the squares of the original integers also sorted in ascending order.
 * Sample Input:
 *      array = [1, 2, 3, 5, 6, 8, 9]
 * Sample Output:
 *      [1, 4, 9, 25, 36, 64, 81]
 * Sample Input:
 *      array = [-7, -3, -1, 1, 2, 3, 5, 6, 8, 9]
 * Sample Output:
 *      [1, 1, 4, 9, 9, 25, 36, 49, 64, 81]
 */
function getSortedSquareArray(arr) {
  if (!arr || arr.length === 0) return [];

  const output = new Array(arr.length).fill(0);

  let left = 0,
    right = arr.length - 1;
  let outputIndex = arr.length - 1;
  while (left <= right) {
    const absLeft = Math.abs(arr[left]);
    const absRight = Math.abs(arr[right]);

    if (absLeft > absRight) {
      output[outputIndex] = absLeft * absLeft;
      left++;
    } else {
      output[outputIndex] = absRight * absRight;
      right--;
    }

    outputIndex--;
  }

  return output;
}

let input = [1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);

input = [-7, -3, -1, 1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);
