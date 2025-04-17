/**
 * Date: 17th April, 2025
 * Problem Statement: Array Chunking
 * Given an array and a chunk size, split the array into multiple smaller arrays (chunks),
 * where each chunk has a maximum length equal to the given size.
 * Key Points:
 *      1. All elements in the original array must be included.
 *      2. The last chunk may contain fewer elements if the array can't be split evenly.
 *      3. You return an array of arrays (chunks).
 * Example 1:
 *      Input: arr = [1, 2, 3, 4, 5], size = 2
 *      Output: [[1, 2], [3, 4], [5]]
 * Example 2:
 *      Input: arr = [1, 2, 3, 4, 5, 6, 7], size = 3
 *      Output: [[1, 2, 3], [4, 5, 6], [7]]
 * Example 3:
 *      Input: arr = [10, 20, 30], size = 1
 *      Output: [[10], [20], [30]]
 * Example 4:
 *      Input: arr = [1, 2], size = 5
 *      Output: [[1, 2]]
 */
function getChunkedArrays(arr, size) {
    const length = arr.length;
    if(length <= 1 || size >= length) return arr;
    
    const result = []; 
    let chunk = [];
    // push to chunks & once size reached, push the chunk to results
    for(let i=0; i<length; i++) {
        if(chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }
        chunk.push(arr[i]);
    }
    // Push remaining elements
    if(chunk.length > 0) {
        result.push(chunk);
    }

    return result;
}

let arr = [1, 2, 3, 4, 5], size = 2;
let chunks = getChunkedArrays(arr, size);
console.log(`Array Chunks:[${chunks}]`);

arr = [1, 2, 3, 4, 5, 6, 7], size = 3;
chunks = getChunkedArrays(arr, size);
console.log(`Array Chunks:[${chunks}]`);

arr = [10, 20, 30], size = 1;
chunks = getChunkedArrays(arr, size);
console.log(`Array Chunks:[${chunks}]`);

arr = [1, 2], size = 5
chunks = getChunkedArrays(arr, size);
console.log(`Array Chunks:[${chunks}]`);
