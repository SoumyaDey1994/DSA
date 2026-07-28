/**
 * Date: 28th July, 2026
 * Given an array of integers, separate out unique and duplicates from the list
 * Example 1:
 *      nums = [2, 4, 1, 5, 2, 6, 9, 5, 1, 5]
 *      output:
 *          uniques = [4, 6, 9]
 *          duplicates = [2, 1, 5]
 */
function findUniqueAndDuplicates(nums) {
  if (!nums || nums.length === 0) return;

  const uniques = new Set(nums);
  const duplicates = new Set();

  for (let index = 0; index < nums.length; index++) {
    const currNum = nums[index];
    if (nums.indexOf(currNum) !== nums.lastIndexOf(currNum)) {
      duplicates.add(currNum);
      uniques.delete(currNum);
    }
  }

  return { uniques, duplicates };
}

let nums = [2, 4, 1, 5, 2, 6, 9, 5, 1, 5];
console.log(`Unique & Duplicates from [${nums}] are: `);
console.log(findUniqueAndDuplicates(nums));

nums = [1, 1, 1, 1];
console.log(`Unique & Duplicates from [${nums}] are: `);
console.log(findUniqueAndDuplicates(nums));

nums = [1, 1, 1, 2, 1, 2, 1];
console.log(`Unique & Duplicates from [${nums}] are: `);
console.log(findUniqueAndDuplicates(nums));

nums = [3, 8, 1, 9];
console.log(`Unique & Duplicates from [${nums}] are: `);
console.log(findUniqueAndDuplicates(nums));
