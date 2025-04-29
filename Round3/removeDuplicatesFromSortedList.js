/**
 * Date: 29th April, 2025
 * Problem Statement: Remove Duplicates from Sorted list
 * Given a sorted list (in non-decreasing order),
 * We need to remove the duplicates in-place such that each unique element appears only once.
 * After removing the duplicates, return the length of the unique portion.
 * Important:
 *      Do NOT use extra list or object (must modify the original list itself).
 *      You can have extra space O(1) only (i.e., constant space).
 *      The elements beyond the new length don’t matter.
 * Example 1:
 *      nums = [1, 1, 2]
 *      output: 2, nums = [1, 2, _]
 *      Explanation: The first 2 elements [1, 2] are unique, _ means we don't care what's beyond index 2
 * Example 2:
 *      nums = [0,0,1,1,1,2,2,3,3,4]
 *      output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *      Explanation: The first 5 elements [0,1,2,3,4] are unique, the rest are irrelevant.
 */
function removeDuplicates(num) {
  if (!num) return;
  if (num.length <= 1) return num;

  let countOfUniques = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[countOfUniques] !== num[i]) {
      countOfUniques++;
      num[countOfUniques] = num[i];
    }
  }
  // replace duplicate values with _
  for (let i = countOfUniques + 1; i < num.length; i++) {
    num[i] = "_";
  }

  return { uniques: countOfUniques + 1, num };
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);

nums = [1, 1, 2];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);

nums = [1, 2, 3, 4, 5];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);

nums = [9, 9, 9, 9];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);

nums = [9, 10, 10, 11, 11];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);

nums = [7];
console.log(
  `List after removing elements: ${JSON.stringify(removeDuplicates(nums))}`
);