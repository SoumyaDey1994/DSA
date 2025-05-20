/**
 * Date: 20th May, 2025
 * Problem Statement: Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to the target.
 * You must assume that:
 *      Each input has exactly one solution, and you cannot use the same element twice.
 *      You can return the answer in any order.
 * Example 1:
 *      nums = [2, 7, 11, 15]
 *      target = 9
 *      output = [0, 1]
 * Example 2:
 *      nums = [3, 2, 4]
 *      target = 6
 *      output = [1, 2]
 * Example 3:
 *      nums = [-1, 3, 8, 2, -4, 7]
 *      target = 5
 *      output = [1, 3]
 */
function find2SumIndices(nums, target) {
    if(!nums || nums.length === 0) return;

    const complementMap = new Map();
    for(let i=0; i<nums.length; i++) {
        // check presence of complement in map
        // if exists return current & complement indices
        // else, add complement with index to map
        const complement = target - nums[i];
        if(complementMap.has(complement)) {
            return [complementMap.get(complement), i]
        }
        complementMap.set(nums[i], i);
    }
    return -1;
}


let nums = [2, 7, 11, 15];
let target = 9;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [3, 2, 4];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [-1, 3, 8, 2, -4, 7];
target = 5;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [1, 5];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [1, 3, 4, 3, 7];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [2, 3, 6, 7];
target = 11;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);

nums = [2, 6, 7, 6];
target = 12;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);


nums = [1, 3, 6, 3];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${find2SumIndices(
    nums,
    target
  )}`
);