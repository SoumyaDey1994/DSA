/**
 * Date: 1st September, 2026
 * Problem Statement: Sorted Squared Array
 * Write a function that takes in a non-empty array of integers
 *      that are sorted in ascending order and returns a new array of the same
 *      length with the squares of the original integers also sorted in ascending order.
 * Example 1:
 *   Sample Input:
 *      array = [1, 2, 3, 5, 6, 8, 9]
 *   Sample Output:
 *      [1, 4, 9, 25, 36, 64, 81]
 * Example 2:
 *   Sample Input:
 *      array = [-7, -3, -1, 1, 2, 3, 5, 6, 8, 9]
 *   Sample Output:
 *      [1, 1, 4, 9, 9, 25, 36, 49, 64, 81]
 * Example 3:
 *   Sample Input:
 *      array = [-7, -6, -3, 0, 1, 3, 4, 5, 6]
 *   Sample Output:
 *      [0,1,9,9,16,25,36,36,49]
 */
function getSortedSquareArray(array) {
  if (!array || array.length === 0) return;

  const inputLength = array.length;
  const output = new Array(inputLength).fill(null);
  let left = 0,
    right = inputLength - 1,
    targetIndex = inputLength - 1;

  while (left <= right) {
    const leftAbs = Math.abs(array[left]);
    const rightAbs = Math.abs(array[right]);
    if (leftAbs > rightAbs) {
      output[targetIndex] = leftAbs * leftAbs;
      left++;
    } else {
      output[targetIndex] = rightAbs * rightAbs;
      right--;
    }
    targetIndex--;
  }

  return output;
}

let input = [1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);

input = [-7, -3, -1, 1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);

input = [-7, -6, -3, 0, 1, 3, 4, 5, 6];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);

input = [-9, -7, -6, -2, -1, 0];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);
