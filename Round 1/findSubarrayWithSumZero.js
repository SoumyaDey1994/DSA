/**
 * Given an array of integers, 
 * determine if there exists a subarray (a contiguous part of the array) whose elements sum up to zero.
 * If such a subarray exists, return true; otherwise, return false.
 * Ex:
 *      I/P: [3, 4, -7, 5]
 *      O/P: [3, 4, -7] --> true
 */

function getSubarrayWithSumZero(input) {
    const length = input.length;
    const sumMap = new Map();
    let currSum = 0;
    for(let i=0; i<length; i++) { // TC - O(N), SC - O(N)
        currSum = currSum + input[i];
        // if sum is 0, return sub array 0 to i
        if(currSum === 0) {
            return input.slice(0, i+1);
        }
        // If map already has currSum, return sub array currSum index+1 to i
        if(sumMap.has(currSum)) {
            const startIndex = sumMap.get(currSum) + 1;
            return input.slice(startIndex, i+1);
        }
        // Add curr sum to map, with cur index as value
        sumMap.set(currSum, i);
    }
    return null;
}

let input = [3, 4, -7, 5];
let output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);

input = [1, 2, -3, 3];
output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);


input = [4, 2, -3, 1, 6];
output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);


input = [1, 2, 3];
output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);


input = [1, -1];
output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);

input = [1, 5, -7, 6, 1];
output = getSubarrayWithSumZero(input);
console.log(`Sub array with zero sum exists - ${!!output}:[${output}]`);
