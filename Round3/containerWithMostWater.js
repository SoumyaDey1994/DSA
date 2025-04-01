/**
 * Date: 1st April, 2025
 * Problem Statement:
 * You are given an array height[], where each element represents the height of a vertical line.
 * You need to find two lines that, together with the x-axis, form a container that can hold the maximum water.
 * You can only choose two bars, and water does not accumulate in between.
 * Example:
 *      heights = [1,8,6,2,5,4,8,3,7]
 *      output = 49
 *      Explanation: Max area b/w heights 1 & 8
 */
function getMaxAreaOfContainer(heights) {
  // No water can be preserved if <2 bars present
  if (!heights || heights.length <= 1) return 0;

  let left = 0,
    right = heights.length - 1;
  let maxArea = 0;
  // continue iteration untill left cross right
  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    // set maxArea to maximum value comparing prev & current
    maxArea = Math.max(maxArea, height * width);
    // if left height < right height, shift left ->, else shift right <-
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`Maximum area to hold water: ${getMaxAreaOfContainer(heights)}`);

heights = [1, 1];
console.log(`Maximum area to hold water: ${getMaxAreaOfContainer(heights)}`);

heights = [4, 3, 2, 1, 4];
console.log(`Maximum area to hold water: ${getMaxAreaOfContainer(heights)}`);

heights = [1, 2, 1];
console.log(`Maximum area to hold water: ${getMaxAreaOfContainer(heights)}`);
