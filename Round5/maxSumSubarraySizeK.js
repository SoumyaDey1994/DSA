/**
 * Date: 23rd July, 2025
 * Problem Statement: Maximum Sum Subarray of Size K
 * Given an array of integers and a number k,
 * find the maximum sum of any contiguous subarray of size k.
 * Example 1:
 *      Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 *      Output: 9
 *      Explanation: Subarray [5, 1, 3] has the maximum sum = 9
 */
function getMaxSumSubarraySizeK(arr, k) {
  if (!arr || arr.length === 0) return -1;

  let maxSum = -Infinity,
    sum = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (right - left + 1 > k) {
      sum = sum - arr[left];
      left++;
    }
    sum = sum + arr[right];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2],
  k = 3;
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${getMaxSumSubarraySizeK(
    arr,
    k
  )}`
);

(arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]), (k = 4);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${getMaxSumSubarraySizeK(
    arr,
    k
  )}`
);

(arr = [100, 200, 300, 400]), (k = 2);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${getMaxSumSubarraySizeK(
    arr,
    k
  )}`
);

(arr = []), (k = 3);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${getMaxSumSubarraySizeK(
    arr,
    k
  )}`
);

(arr = [23, 54, 67, 37, 64, 90, 10, 71, 99]), (k = 3);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${getMaxSumSubarraySizeK(
    arr,
    k
  )}`
);
