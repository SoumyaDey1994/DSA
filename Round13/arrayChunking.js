/**
 * Date: 18th May, 2026
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
function getArrayChunks(input, size) {
  if (!input || input.length === 0 || size === 0) return;

  const chunkGroups = [];
  let chunk = [];

  for (let element of input) {
    if (chunk.length >= size) {
      chunkGroups.push(chunk);
      chunk = [];
    }
    chunk.push(element);
  }

  if (chunk.length > 0) {
    chunkGroups.push(chunk);
  }

  return chunkGroups;
}

let arr = [1, 2, 3, 4, 5],
  size = 2;
let output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`,
  )}]`,
);

((arr = [1, 2, 3, 4, 5, 6, 7, 8]), (size = 3));
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`,
  )}]`,
);

((arr = [10, 20, 30]), (size = 1));
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`,
  )}]`,
);

((arr = [10, 20]), (size = 5));
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`,
  )}]`,
);

((arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), (size = 5));
output = getArrayChunks(arr, size);
console.log(
  `Chunks of size ${size} of list [${arr}] becomes: [${output.map(
    (c) => `[${c}]`,
  )}]`,
);
