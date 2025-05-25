/**
 * Date: 25th May, 2025
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
function chunkArray(arr, size) {
  if (!arr || arr.length === 0) return;
  if (size >= arr.length) return arr;

  let chunk = [];
  const chunkGroup = [];
  for (let i = 0; i < arr.length; i++) {
    // if chunk length = size,
    // put chunk in chunk group & start over
    if (chunk.length === size) {
      chunkGroup.push(chunk);
      chunk = [];
    }
    chunk.push(arr[i]);
  }
  // if some elements present in chunk post iteration
  // push the chunk as it in in chunk group
  if (chunk.length > 0) {
    chunkGroup.push(chunk);
  }

  return chunkGroup.map((group) => `[${group}]`);
}

let arr = [1, 2, 3, 4, 5],
  size = 2;
console.log(
  `Array chunks of size ${size} for list [${arr}] is: [${chunkArray(
    arr,
    size
  )}]`
);

(arr = [1, 2, 3, 4, 5, 6, 7, 8]), (size = 3);
console.log(
  `Array chunks of size ${size} for list [${arr}] is: [${chunkArray(
    arr,
    size
  )}]`
);

(arr = [10, 20, 30]), (size = 1);
console.log(
  `Array chunks of size ${size} for list [${arr}] is: [${chunkArray(
    arr,
    size
  )}]`
);

(arr = [10, 20, 30, 40]), (size = 5);
console.log(
  `Array chunks of size ${size} for list [${arr}] is: [${chunkArray(
    arr,
    size
  )}]`
);

(arr = [10, 20, 30, 50, 70, 90]), (size = 4);
console.log(
  `Array chunks of size ${size} for list [${arr}] is: [${chunkArray(
    arr,
    size
  )}]`
);
