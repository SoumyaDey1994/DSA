/**
 * Date: 26th March, 2026
 * Problem Statement:
 *      Find an element x such that: i=0∑n−1∣arr[i]−x∣ is minimum.
 * Key Insight (Very Important)
 * 👉 The value of x that minimizes sum of absolute differences is the MEDIAN of the array.
 * This is a well-known mathematical property.
 * 
 * Example 1:
 *      Input: [1, 2, 4, 6]
 *      Output:  {"median":4,"cost":7}
 * Example 2:
 *      Input: [3, 6, 1, 4, 9]
 *      Output:  {"median":4,"cost":11}
 * Example 3:
 *      Input: [1, 5, 4, 7, 9, 6]
 *      Output:  {"median":6,"cost":12}
 */
function findMedianAndCost(nums) {
  if (!nums || nums.length === 0) return;

  nums.sort((num1, num2) => num1-num2); // Sort in ASC order
  const medianIndex = Math.floor(nums.length / 2);
  const median = nums[medianIndex];

  const cost = nums.reduce((acc, curr) => acc + Math.abs(curr - median), 0);

  return { median, cost };
}


let input = [1, 2, 4, 6];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [3, 6, 1, 4, 9];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [10, 2, 4, 8];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [1, 5, 4, 7, 9, 6];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);

input = [1, 1, 1, 1, 1];
console.log(`Median & Cost: ${JSON.stringify(findMedianAndCost(input))}`);
