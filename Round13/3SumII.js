/**
 * Date: 10th June, 2026
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 *      3. Use Binary Search to find the triplet
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 */
function findTriplets(nums) {
  if (!nums || nums.length < 3) return;

  nums.sort((num1, num2) => num1 - num2); // sort nums in ASC order

  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);

        if (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        if (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return output.map((triplet) => `[${triplet}]`);
}

let nums = [-1, 0, 1, 2, -1, -4];
let triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 1, 1];
triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 0, 0];
triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [1, 2, 3, 4, 5];
triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
triplets = findTriplets(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);
