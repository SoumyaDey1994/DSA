/**
 * Date: 1st September, 2026
 * Problem Statement: Flattern Nested Array/List
 * Given an nested array of numbers, flattern it to single level
 * Example:
 *      Input: nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]]
 *      Output: [1, 2, 3, 5, 4, 8, 9, 6, 10]
 */
function flatternShortcut(numbers) {
  const numStr = numbers.toString();
  return numStr.split(",");
}

const nums = [1, 2, [3, 5, [4, 8, [9]]], [6, [10]]];
console.log(`(Shortcut) Flatterned List becomes: [${flatternShortcut(nums)}]`);

function customFlattern(numbers) {
  const output = [];

  for (let element of numbers) {
    if (Array.isArray(element)) {
      output.push(...customFlattern(element));
    } else {
      output.push(element);
    }
  }

  return output;
}

const nums2 = [3, 5, [6], [7], [8, 11, [12, 14, 15], 17], [19, 20]];
console.log(`(Shortcut) Flatterned List becomes: [${customFlattern(nums2)}]`);
