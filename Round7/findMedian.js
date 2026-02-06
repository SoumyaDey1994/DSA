/**
 * Date: 6th Feb, 2026
 * Problem Statement:
 *      Find an element x such that: i=0∑n−1∣arr[i]−x∣ is minimum.
 * Key Insight (Very Important)
 * 👉 The value of x that minimizes sum of absolute differences is the MEDIAN of the array.
 * This is a well-known mathematical property.
 */

function findMedianAndCost(nums) {
  // O(nlogn)
  if (!nums || nums.length === 0) return;

  // Sort in ASC order
  const sorted = [...nums].sort((a, b) => a - b);

  const index = Math.floor(sorted.length / 2);
  const median = sorted[index];
  const cost = sorted.reduce((sum, curr) => sum + Math.abs(curr - median), 0);

  return { value: median, cost: cost };
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
