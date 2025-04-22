/**
 * Date: 22nd April, 2025
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 */
function findTriplets(nums) { // O(n^2)
    const isAllPositive = nums.every(num => num > 0);
    const isAllNegative = nums.every(num => num < 0);
    // if nums has all positive/negetive, then no triplet possible
    if(isAllPositive || isAllNegative) return [];
    // sort the num array
    nums = nums.sort((a, b) => a-b); // O(nlogn)
    const complementMap = new Map();
    const result = [];
    for(let i=0; i<nums.length; i++) { // O(n)
        const curr = nums[i];
        const complement = 0 - curr;
        for(let j=1; j<nums.length-1; j++) {
            if((nums[j] + nums[j+1]) === complement) {
                if(!complementMap.has(curr) && !complementMap.has(complement)) {
                    result.push([curr, nums[j], nums[j+1]]);
                    complementMap.set(curr, complement);
                    complementMap.set(complement, curr);
                }
            }
        }
    }

    return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
let output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);

nums = [0, 1, 1];
output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);

nums = [0, 0, 0];
output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);

nums = [1, 2, 3, 4, 5];
output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
output = findTriplets(nums);
console.log(`3 Sum triplets of [${nums}] are: [${output.map(t => `[${t}]`)}]`);
