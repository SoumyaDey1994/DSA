/**
 * Date: 22nd July, 2026
 * Problem Statement: Flattern Nested Array/List
 * Given an nested array of numbers, flattern it to single level
 * Example:
 *      Input: nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]]
 *      Output: [1, 2, 3, 5, 4, 8, 9, 6, 10]
 */
function flatternNestedList(numbers) {
  if (!numbers || numbers.length === 0) return;

  function flattern(nums) {
    const result = [];

    for (let num of nums) {
      if (Array.isArray(num)) {
        result.push(...flattern(num));
      } else {
        result.push(num);
      }
    }

    return result;
  }

  return flattern(numbers);
}

let nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]];
console.log(`Flatterned List becomes: [${flatternNestedList(nums)}]`);

nums = [1, 2, 3, 5, [4, 9], 2, 0];
console.log(`Flatterned List becomes: [${flatternNestedList(nums)}]`);

nums = [1, 2, 3];
console.log(`Flatterned List becomes: [${flatternNestedList(nums)}]`);

nums = [1, 2, 3, [4, 5, [6, [7, 8, 9], [10, 11, [12, 14, [15]]]]]];
console.log(`Flatterned List becomes: [${flatternNestedList(nums)}]`);
