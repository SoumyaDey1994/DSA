/**
 * Date: 4th March, 2025
 * Problem Statement: Trapping Rain Water
 * You are given an array height[], where each element represents the height of a bar in a histogram.
 * Water can be trapped between bars after raining.
 * You need to compute the total water trapped.
 * Example 1:
 *      heights = [0,1,0,2,1,0,1,3,2,1,2,1]
 *      output: 6
 *      Example: Total closed area where water can be trapped
 */

// water at i=min(max left height)-height[i], min(max right height)−height[i]
function findTotalWaterTrapped(heights) {
  // Total water is 0 if no bar present
  if (!heights || heights.length === 0) return 0;

  let left = 0,
    maxLeft = heights[left];
  let right = heights.length - 1,
    maxRight = heights[right];
  let totalWater = 0;
  while (left < right) {
    if (maxLeft <= maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, heights[left]);
      // console.log("Max Left: ", maxLeft, "height Left: ", heights[left]);
      totalWater = totalWater + Math.min(maxLeft, maxLeft - heights[left]);
      // console.log("TotalWater: ", totalWater);
    } else {
      right--;
      maxRight = Math.max(maxRight, heights[right]);
      // console.log("Max Right: ", maxRight, "height Right: ", heights[right]);
      totalWater = totalWater + Math.min(maxRight, maxRight - heights[right]);
      // console.log("TotalWater: ", totalWater);
    }
  }
  return totalWater;
}
let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let totalWater = findTotalWaterTrapped(heights);
console.log(`Total Water can be trapped: ${totalWater}`);

heights = [4, 2, 0, 3, 2, 5];
totalWater = findTotalWaterTrapped(heights);
console.log(`Total Water can be trapped: ${totalWater}`);

heights = [1, 2, 1];
totalWater = findTotalWaterTrapped(heights);
console.log(`Total Water can be trapped: ${totalWater}`);

heights = [3, 0, 2, 0, 4];
totalWater = findTotalWaterTrapped(heights);
console.log(`Total Water can be trapped: ${totalWater}`);

heights = [5, 4, 1, 2];
totalWater = findTotalWaterTrapped(heights);
console.log(`Total Water can be trapped: ${totalWater}`);
