/**
 * Date: 19th April, 2026
 * Given an array of integers, separate out unique and duplicates from the list
 * Example 1:
 *      nums = [2, 4, 1, 5, 2, 6, 9, 5, 1, 5]
 *      output:
 *          uniques = [4, 6, 9]
 *          duplicates = [2, 1, 5]
 */
function findUniqueAndDuplicates(nums) {
  if (!nums || nums.length === 0) return null;

  const duplicates = nums.filter(
    (num, index, arr) => index !== arr.lastIndexOf(num),
  );
  const duplicateSet = new Set(duplicates);
  const uniques = [];

  for (let num of nums) {
    if (!duplicateSet.has(num)) {
      uniques.push(num);
    }
  }

  return { uniques, duplicates: [...duplicateSet] };
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
