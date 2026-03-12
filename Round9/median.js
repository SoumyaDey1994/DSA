/**
 * Date: 12th March, 2026
 * Problem Statement:
 *      Find an element x such that: i=0∑n−1∣arr[i]−x∣ is minimum.
 * Key Insight (Very Important)
 * 👉 The value of x that minimizes sum of absolute differences is the MEDIAN of the array.
 * This is a well-known mathematical property.
 */
function findMedianAndCost(nums) {
  if (!nums || nums.length === 0) return;

  // Sort is ASC order
  nums.sort((num1, num2) => num1 - num2);
  const targetIndex = Math.floor(nums.length / 2);
  const median = nums[targetIndex];
  const cost = nums.reduce((total, curr) => total + Math.abs(curr - median), 0);

  return { median, cost };
}


let input = [1, 2, 4, 6];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [3, 6, , 1, 4, 9];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [10, 2, 4, 8];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [1, 5, 4, 7, 9, 6];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [1, 1, 1, 1, 1];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

