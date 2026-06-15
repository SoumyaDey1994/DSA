/**
 * Date: 15th June, 2026
 * Problem Statement: Flattern Nested Array/List
 * Given an nested array of numbers, flattern it to single level
 * Example:
 *      Input: nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]]
 *      Output: [1, 2, 3, 5, 4, 8, 9, 6, 10]
 */
function flatternList(input) {
  if (!input || input.length === 0) return [];

  const flatList = [];

  for (let item of input) {
    if (Array.isArray(item)) {
      flatList.push(...flatternList(item));
    } else {
      flatList.push(item);
    }
  }

  return flatList;
}

let nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]];
console.log(`Flatterned List becomes: [${flatternList(nums)}]`);

nums = [1, 2, 3, 5, [4, 9], 2, 0];
console.log(`Flatterned List becomes: [${flatternList(nums)}]`);

nums = [1, 2, 3];
console.log(`Flatterned List becomes: [${flatternList(nums)}]`);

nums = [1, 2, 3, [4, 5, [6, [7, 8, 9], [10, 11, [12, 14, [15]]]]]];
console.log(`Flatterned List becomes: [${flatternList(nums)}]`);
