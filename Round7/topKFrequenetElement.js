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
function findTopKFreqElements(nums, k) {
  if (!nums || nums.length < k) return [];

  const freqMap = new Map();
  // save frequencies of each number
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const uniqueNumWithFreq = Array.from(freqMap.entries());

  // Sort by DESC order of frequencies
  const result = uniqueNumWithFreq.sort((pair1, pair2) => pair2[1] - pair1[1]);

  return result.slice(0, k).map((pair) => pair[0]);
}

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);

(nums = [1]), (k = 1);
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);

(nums = [4, 4, 4, 6, 6, 7, 7, 7, 7]), (k = 2);
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);

(nums = [4, 4, 4, 6, 6, 7, 7, 7, 7, 8, 8, 1, 1, 1, 1]), (k = 3);
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);

(nums = [
  5, 3, 5, 2, 8, 5, 3, 8, 9, 3, 1, 8, 8, 2, 9, 3, 3, 5, 9, 9, 10, 2, 2, 2, 8,
]),
  (k = 4);
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);

(nums = [5, 3, 5, 2, 8, 5, 3, 8, 9, 3, 1, 8, 2, 9, 9]), (k = 4);
console.log(
  `${k} most frequent element of [${nums}] are: [${findTopKFreqElements(
    nums,
    k
  )}]`
);
