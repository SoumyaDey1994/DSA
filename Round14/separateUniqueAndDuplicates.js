/**
 * Date: 21st June, 2026
 * Given an array of integers, separate out unique and duplicates from the list
 * Example 1:
 *      nums = [2, 4, 1, 5, 2, 6, 9, 5, 1, 5]
 *      output:
 *          uniques = [4, 6, 9]
 *          duplicates = [2, 1, 5]
 */
function findUniqueAndDuplicates(nums) {
  if (!nums || nums.length === 0) return;

  const unique = [];

  const duplicates = nums.filter(
    (curr, idx, arr) => idx !== arr.lastIndexOf(curr),
  );

  const duplicateSet = new Set(duplicates);

  for (const num of nums) {
    if (!duplicateSet.has(num)) {
      unique.push(num);
    }
  }

  return { unique, duplicates: Array.from(duplicateSet) };
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
