/**
 * Date: 25th May, 2025
 * Problem Statement: Maximum Sum Subarray of Size K
 * Given an array of integers and a number k,
 * find the maximum sum of any contiguous subarray of size k.
 * Example 1:
 *      Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 *      Output: 9
 *      Explanation: Subarray [5, 1, 3] has the maximum sum = 9
 */
function findMaxSumSubArrSizeK(arr, k) {
  if (!arr || arr.length === 0 || k === 0) return -1;

  let maxSum = -Infinity,
    windowSum = 0;
  let start = 0,
    resultSubList = [];
  for (let end = 0; end < arr.length; end++) {
    windowSum = windowSum + arr[end];
    // shrink window when size > k
    if (end - start + 1 >= k) {
      // store the sub array
      if (windowSum > maxSum) {
        resultSubList = arr.slice(start, end + 1);
      }
      maxSum = Math.max(maxSum, windowSum);
      windowSum = windowSum - arr[start];
      start++;
    }
  }
  return { maxSum, list: resultSubList.join(",") };
}

let arr = [2, 1, 5, 1, 3, 2],
  k = 3;
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${
    findMaxSumSubArrSizeK(arr, k)?.maxSum
  }, List: [${findMaxSumSubArrSizeK(arr, k).list}]`
);

(arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]), (k = 4);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${
    findMaxSumSubArrSizeK(arr, k)?.maxSum
  }, List: [${findMaxSumSubArrSizeK(arr, k).list}]`
);

(arr = [100, 200, 300, 400]), (k = 2);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${
    findMaxSumSubArrSizeK(arr, k)?.maxSum
  }, List: [${findMaxSumSubArrSizeK(arr, k).list}]`
);

(arr = []), (k = 3);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${
    findMaxSumSubArrSizeK(arr, k)?.maxSum
  }, List: [${findMaxSumSubArrSizeK(arr, k).list}]`
);

(arr = [23, 54, 67, 37, 64, 90, 10, 71, 99]), (k = 3);
console.log(
  `Max sum subarray out of [${arr}] of size ${k} is: Sum: ${
    findMaxSumSubArrSizeK(arr, k)?.maxSum
  }, List: [${findMaxSumSubArrSizeK(arr, k).list}]`
);
