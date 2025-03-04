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

// water at i=min(max left height,max right height)−height[i]

function getTotalWaterTrapped(heights) {
    let totalArea = 0;
    let left = 0, maxLeft = heights[left];
    let right = heights.length-1, maxRight = heights[right];

    while(left < right) { // O(n)
        if(maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, heights[left]);
            totalArea = totalArea + Math.max(0, maxLeft - heights[left]);
        } else {
            right--;
            maxRight = Math.max(maxRight, heights[right]);
            totalArea = totalArea + Math.max(0, maxRight - heights[right]);
        }
    }
    return totalArea;
}

let heights = [0,1,0,2,1,0,1,3,2,1,2,1];
let output = getTotalWaterTrapped(heights);
console.log(`Total amount of water can be captured: ${output}`);

heights = [3, 3, 3, 3, 3];
output = getTotalWaterTrapped(heights);
console.log(`Total amount of water can be captured: ${output}`);

heights = [5, 4, 3, 2, 1];
output = getTotalWaterTrapped(heights);
console.log(`Total amount of water can be captured: ${output}`);

heights = [2, 1, 0, 1, 3];
output = getTotalWaterTrapped(heights);
console.log(`Total amount of water can be captured: ${output}`);

heights = [4, 2, 0, 3, 2, 5];
output = getTotalWaterTrapped(heights);
console.log(`Total amount of water can be captured: ${output}`);
