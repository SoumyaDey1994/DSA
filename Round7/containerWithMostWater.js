/**
 * Date: 8th Jan, 2026
 * Problem Statement:
 * You are given an array height[], where each element represents the height of a vertical line.
 * You need to find two lines that, together with the x-axis,
 * form a container that can hold the maximum water.
 * You can only choose two bars, and water does not accumulate in between.
 * Example:
 *      heights = [1,8,6,2,5,4,8,3,7]
 *      output = 49
 *      Explanation: Max area b/w heights 1 & 8
 */
function findMaxWaterVolume(heights) {
  if (!heights || heights.length === 0) return 0;

  let left = 0,
    right = heights.length - 1;
  let maxWater = 0;
  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(heights[left], heights[right]);
    const area = width * minHeight;
    maxWater = Math.max(maxWater, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);

heights = [1, 1];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);

heights = [4, 3, 2, 1, 4];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);

heights = [1, 2, 1];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);

heights = [1, 5, 4, 7, 1, 9, 8];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);

heights = [1, 3, 4, 11, 1, 9, 6];
console.log(
  `Max Volume of water for heights [${heights}] is: ${findMaxWaterVolume(
    heights
  )}`
);
