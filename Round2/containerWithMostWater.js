/**
 * Date: 4th March, 2025
 * Problem Statement:
 * You are given an array height[], where each element represents the height of a vertical line.
 * You need to find two lines that, together with the x-axis, form a container that can hold the maximum water.
 * You can only choose two bars, and water does not accumulate in between.
 * Example:
 *      heights = [1,8,6,2,5,4,8,3,7]
 *      output = 49
 *      Explanation: Max area b/w heights 1 & 8
 */
function getMaxAreaContainer(heights) {
    let left=0, right = heights.length - 1;
    let maxArea = 0;
    while(left < right) {
        const minHeight = Math.min(heights[left], heights[right]);
        const width = right - left;
        const area = width * minHeight;
        maxArea = Math.max(area, maxArea);
        // console.log(maxArea);
        if(heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

let heights = [1,8,6,2,5,4,8,3,7];
let output = getMaxAreaContainer(heights);
console.log(`Max area of container is: ${output}`);

heights = [1,1];
output = getMaxAreaContainer(heights);
console.log(`Max area of container is: ${output}`);

heights = [4, 3, 2, 1, 4];
output = getMaxAreaContainer(heights);
console.log(`Max area of container is: ${output}`);

heights = [1, 2, 1];
output = getMaxAreaContainer(heights);
console.log(`Max area of container is: ${output}`);
