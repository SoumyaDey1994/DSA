/**
 * Date: 7th May, 2026
 * Problem Statement: Flattern Nested Array/List
 * Given an nested array of numbers, flattern it to single level
 * Example:
 *      Input: nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]]
 *      Output: [1, 2, 3, 5, 4, 8, 9, 6, 10]
 */
function flattern(numbers) {
  const flatList = [];
  for (let element of numbers) {
    if (Array.isArray(element)) {
      flatList.push(...flattern(element));
    } else {
      flatList.push(element);
    }
  }
  return flatList;
}

let nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]];
console.log(`Flatterned List becomes: [${flattern(nums)}]`);

nums = [1, 2, 3, 5, [4, 9], 2, 0];
console.log(`Flatterned List becomes: [${flattern(nums)}]`);

nums = [1, 2, 3];
console.log(`Flatterned List becomes: [${flattern(nums)}]`);

nums = [1, 2, 3, [4, 5, [6, [7, 8, 9], [10, 11, [12, 14, [15]]]]]];
console.log(`Flatterned List becomes: [${flattern(nums)}]`);
