/**
 * Date: 6th April, 2025
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
function getArrayChunks(arr, size) {
  if (arr.length < size) return [arr];

  const chunkList = [];
  let chunk = [];
  let start = 0,
    end = arr.length - 1;
  // Iterate over all element of arr
  // push to chuckList when size meets
  // else push individual elements to chunks
  while (start <= end) {
    if (chunk.length === size) {
      chunkList.push([...chunk]);
      chunk = [];
    }

    chunk.push(arr[start]);
    start++;
  }
  // Push remaining element to chunk list
  if (chunk.length > 0) {
    chunkList.push([chunk]);
  }

  return chunkList;
}

let arr = [1, 2, 3, 4, 5],
  size = 2;
let output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`
  )}]`
);

(arr = [1, 2, 3, 4, 5, 6, 7, 8]), (size = 3);
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`
  )}]`
);

(arr = [10, 20, 30]), (size = 1);
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`
  )}]`
);

(arr = [10, 20]), (size = 5);
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`
  )}]`
);

(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), (size = 5);
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`
  )}]`
);
