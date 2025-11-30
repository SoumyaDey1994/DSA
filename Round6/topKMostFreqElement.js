/**
 * Date: 30th Nov, 2025
 * 📌 Problem Statement — Top K Frequent Elements
 * You are given an integer array nums and an integer k.
 * You need to return the k most frequent elements in the array.
 * Requirements (typical LeetCode version):
 *      Return any order of the k most frequent elements (order doesn’t matter unless explicitly asked).
 *      The solution should be better than O(n log n) time (i.e., usually O(n) or O(n log k)).
 * Example 1:
 *      nums = [1, 1, 1, 2, 2, 3], k = 2
 *      output: [1, 2]
 * Example 2:
 *      nums = [1], k = 1
 *      output: [1]
 * Example 2:
 *      nums = [4, 4, 4, 6, 6, 7, 7, 7, 7], k = 2
 *      output: [4, 7]
 */
function getMostFreqKElements(nums, k) {
  if (!nums || nums.length === 0) return [];
  if (nums.length <= k) return [...new Set(nums)];

  const freqMap = new Map();
  // count freq of each values
  for (const n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1);
  }

  const minHeap = [];
  // Sort array in ASC order w.r.t frequency of number
  const heapify = () =>
    minHeap.sort((num1, num2) => freqMap.get(num1) - freqMap.get(num2));

  for (let item of freqMap.keys()) {
    if (minHeap.length < k) {
      minHeap.push(item);
    } else {
      if (freqMap.get(minHeap[0]) < freqMap.get(item)) {
        minHeap[0] = item;
      }
    }
    heapify();
  }

  return minHeap;
}

function getMostFreqKElementsEfficient(nums, k) {
  if (!nums || nums.length === 0) return [];

  const freqMap = new Map();
  for (const n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1);
  }

  // entries: [num, freq]
  const entries = Array.from(freqMap.entries());

  // sort by freq descending
  entries.sort((a, b) => b[1] - a[1]);

  // take first k numbers
  return entries.slice(0, k).map(([num]) => num);
}

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElements(
    nums,
    k
  )}]`
);

(nums = [1]), (k = 1);
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElements(
    nums,
    k
  )}]`
);

(nums = [4, 4, 4, 6, 6, 7, 7, 7, 7]), (k = 2);
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElements(
    nums,
    k
  )}]`
);

(nums = [4, 4, 4, 6, 6, 7, 7, 7, 7, 8, 8, 1, 1, 1, 1]), (k = 3);
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElements(
    nums,
    k
  )}]`
);

(nums = [
  5, 3, 5, 2, 8, 5, 3, 8, 9, 3, 1, 8, 8, 2, 9, 3, 3, 5, 9, 9, 10, 2, 2, 2, 8,
]),
  (k = 4);
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElementsEfficient(
    nums,
    k
  )}]`
);

(nums = [5, 3, 5, 2, 8, 5, 3, 8, 9, 3, 1, 8, 2, 9, 9]), (k = 4);
console.log(
  `${k} most frequent element of [${nums}] are: [${getMostFreqKElementsEfficient(
    nums,
    k
  )}]`
);
