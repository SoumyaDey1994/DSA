/**
 * Date: 25th Feb, 2026
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function findAllPermutations(nums) {
  if (!nums || nums.length === 0) return [];

  const aux = new Array(nums.length).fill(false);
  const result = [];

  function permutations(aux, subList) {
    if (subList.length === nums.length) {
      result.push([...subList]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (aux[i]) continue;

      aux[i] = true;
      subList.push(nums[i]);

      permutations(aux, subList);

      subList.pop();
      aux[i] = false;
    }
  }

  permutations(aux, []);
  return result.map((r) => `[${r}]`);
}

let nums = [1, 2, 3];
let permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);

nums = [4, 9];
permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);

nums = [5, 7, 9, 1];
permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);
