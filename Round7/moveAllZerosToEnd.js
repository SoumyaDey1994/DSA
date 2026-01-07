/**
 * Date: 7th Jan, 2026
 * Problem Statement: Move All Zeros to the End
 * Given an array of integers, move all the 0s to the end of the array 
 * while maintaining the relative order of the non-zero elements. 
 * The operation should be done in-place with minimal swaps.
 * Example 1:
 *      Input: arr = [0, 1, 0, 3, 12]
 *      Output: [1, 3, 12, 0, 0]
        Explanation: All non-zero elements (1, 3, 12) maintain their order, and zeros move to the end.
 * Example 2:
 *      Input: arr = [1, 2, 3, 0, 4, 0, 5]
 *      Output: [1,2, 3, 4, 5, 0, 0]
        Explanation: All non-zero elements (1, 2, 3, 4, 5) maintain their order, and zeros move to the end.
 * Example 3:
 *      Input: arr = [0, 0, 0, 1, 2]
 *      Output: [1, 2, 0, 0, 0]
        Explanation: All non-zero elements (1, 2) maintain their order, and zeros move to the end.
 * Example 4:
 *      Input: arr = [0, 0, 0, 0]
 *      Output: [0, 0, 0, 0]
        Explanation: Since all elements are zeros, the array remains unchanged.
 * Example 5:
 *      Input: arr = [5, 10, 15, 20]
 *      Output: [5, 10, 15, 20]
        Explanation: No zeros are present, so the array remains the same.
 */
function moveAllZerosToEnd(arr) {
    if(!arr || arr.length === 0) return 0;

    let countOfNonZero = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0) {  
            // swap curr element with arr[countOfNonZero] then increment countOfNonZero
            const temp = arr[i];
            arr[i] = arr[countOfNonZero];
            arr[countOfNonZero] = temp;
            
            countOfNonZero++; 
        }
    }

    return arr;
}


let arr = [0, 1, 0, 3, 12];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [1, 2, 3, 0, 4, 0, 5];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [0, 0, 0, 1, 2];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [0, 0, 0, 1, 2];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [1];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [5, 10, 15, 20];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);

arr = [5, 10, 0, 15, 0, 0, 20, 25, 0, 0, 0, 30];
console.log(
  `Post moving all zeros at end, [${arr}] becomes: [${moveAllZerosToEnd(arr)}]`
);
