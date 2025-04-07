/**
 * Date: 7th April, 2025
 * Problem Statement: Maximum Sum Subarray of Size K
 * Given an array of integers and a number k, 
 * find the maximum sum of any contiguous subarray of size k.
 * Example 1:
 *      Input: arr = [2, 1, 5, 1, 3, 2], k = 3  
 *      Output: 9  
 *      Explanation: Subarray [5, 1, 3] has the maximum sum = 9
 */
function findMaxSum(arr, k) { // 0(N): N is num of elements
    if(!arr || arr.length === 0) return null;
    // if arr length < k, return whole arr sum
    if(arr.length < k) return arr.reduce((sum, ele) => sum+ele, 0);

    let maxSum = -Infinity;
    let start = 0;
    let windowSum = 0;
    for(let end=0; end < arr.length; end++) {
        // add to window sum
        windowSum = windowSum + arr[end];
        // if window length > k, remove from start
        if((end-start+1) === k) {
            maxSum = Math.max(maxSum, windowSum);
            // console.log(`Max Sum: ${maxSum}`);
            windowSum = windowSum - arr[start];
            start++;
        }
    }
    return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2], k = 3;
console.log(`Subarray [${arr}] has the maximum sum = ${findMaxSum(arr, k)}`);

arr = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4;
console.log(`Subarray [${arr}] has the maximum sum = ${findMaxSum(arr, k)}`);

arr = [100, 200, 300, 400], k = 2;
console.log(`Subarray [${arr}] has the maximum sum = ${findMaxSum(arr, k)}`);

arr = [], k = 3;
console.log(`Subarray [${arr}] has the maximum sum = ${findMaxSum(arr, k)}`);