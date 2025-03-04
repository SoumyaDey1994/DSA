/**
 * Given an array of integers, find the subarray with max sum
 * Input:
 *      nums = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23]
 */

function getMaxSum(nums) {
    // If all negetive, find the max value
    const isAllNegetive = nums.every((num) => num < 0);
    if(isAllNegetive) return Math.max(...nums);

    let finalResult = 0, sum = 0;
    let subarray = [], resultArray = [];
    for(let index=0; index<nums.length; index++) { // T = O(n)
        if((sum + nums[index]) > 0) {
            sum = sum + nums[index];
            subarray.push(nums[index]);
            resultArray = [...subarray];
        } else {
            sum = 0;
            subarray = [];
        }
        finalResult = Math.max(finalResult, sum);
    }
    console.log("Subarry: ", resultArray);
    return finalResult;
}

let nums = [1, -3, 2, -5, 7, 6, -1, -4, 11, -23];
let output = getMaxSum(nums);
console.log(`Max sum of array [${nums}] is: ${output}`);
