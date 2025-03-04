/**
 * Date: 10th January, 2025
 * Given an array of integers, find the subarray with max sum
 * Input:
 *      nums = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23]
 */
function getMaxSumSubarray(input) {
    /**
     * If all negetive, return the Max element
     * If all positive, return entire list
     * Else, find out subarray using Kadane's algo
     */
    const isAllElementNegetive = input.every(ele => ele < 0); // TC - O(N)
    if(isAllElementNegetive) return Math.max(...input); // TC - O(N)

    const isAllElementPositive = input.every(ele => ele >= 0); // TC - O(N)
    if(isAllElementPositive) return input; // O(1)

    const length = input.length;
    let maxSum = 0, currSum=0, subArr=[], targetSubArray = [];
    for(let index=0; index<length; index++) { // TC - O(N)
        const newSum = currSum + input[index];
        if(newSum > 0) {
            currSum = newSum;
            subArr.push(input[index]);
        } else {
            currSum = 0;
            subArr = [];
        }

        if(currSum > maxSum) {
            targetSubArray = [...subArr];
            maxSum = currSum;
        }
    }
    console.log(`Max Sum subarray: [${targetSubArray}]`);
    return maxSum;
}

const arr = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23];
const maxSumSubarr = getMaxSumSubarray(arr);
console.log(`Max sum subarray is: ${maxSumSubarr}`);
