/**
 * Date: 29th August, 2026
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 *      3. Use Binary Search to find the triplet
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 */
function findTripletsUsingBinarySearch(numbers) {
  if (!numbers || numbers.length < 3) return;

  const triplets = [];
  numbers.sort((num1, num2) => num1 - num2);

  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    let left = i + 1,
      right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        triplets.push([numbers[i], numbers[left], numbers[right]]);
        if (left > right && numbers[left] === numbers[left + 1]) {
          left++;
        }

        if (left > right && numbers[right] === numbers[right + 1]) {
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

  return triplets;
}

let nums = [-1, 0, 1, 2, -1, -4];
let triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 1, 1];
triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 0, 0];
triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [1, 2, 3, 4, 5];
triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
triplets = findTripletsUsingBinarySearch(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);
