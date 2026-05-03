/**
 * Date: 3rd May, 2026
 * Problem Statement: Flattern Nested Array/List
 * Given an nested array of numbers, flattern it to single level
 * Example:
 *      Input: nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]]
 *      Output: [1, 2, 3, 5, 4, 8, 9, 6, 10]
 */
function flattern(nums) {
  const flatList = [];

  for (let item of nums) {
    if (Array.isArray(item)) {
      flatList.push(...flattern(item));
    } else {
      flatList.push(item);
    }
  }

  return flatList;
}

function flatternInSingleLine(numbers) {
  return numbers.toString().split(",").map(Number);
}

const nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]];
console.log(`Flatterned List becomes: [${flattern(nums)}]`);

console.log(`Flatterned List (using 1 liner): [${flatternInSingleLine(nums)}]`);
