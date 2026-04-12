/**
 * Date: 12th April, 2026
 * Given an array of integers, separate out unique and duplicates from the list
 * Example 1:
 *      nums = [2, 4, 1, 5, 2, 6, 9, 5, 1, 5]
 *      output:
 *          uniques = [4, 6, 9]
 *          duplicates = [2, 1, 5]
 */
function findUniqueAndDuplicates(nums) {
  if (!nums || nums.length === 0) return {};

  const unique = [];
  const duplicateList = nums.filter(
    (num, idx, arr) => idx !== arr.lastIndexOf(num),
  );

  const duplicateSet = new Set(duplicateList);
  for (const num of nums) {
    if (!duplicateSet.has(num)) {
      unique.push(num);
    }
  }

  return {
    unique: unique,
    duplicate: [...duplicateSet],
  };
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
