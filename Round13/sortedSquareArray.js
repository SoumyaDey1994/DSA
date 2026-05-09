/**
 * Date: 9th May, 2026
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

  let length = arr.length;
  const output = new Array(length).fill(null);
  let left = 0,
    right = length - 1;

  while (left <= right) {
    const leftAbs = Math.abs(arr[left]);
    const rightAbs = Math.abs(arr[right]);

    if (leftAbs > rightAbs) {
      output[length - 1] = leftAbs * leftAbs;
      left++;
    } else {
      output[length - 1] = rightAbs * rightAbs;
      right--;
    }

    length--;
  }

  return output;
}

let input = [1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);

input = [-7, -3, -1, 1, 2, 3, 5, 6, 8, 9];
console.log(` Sorted Squared Array becomes: [${getSortedSquareArray(input)}]`);
