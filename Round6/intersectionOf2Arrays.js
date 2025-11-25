/**
 * Date: 25th Nov, 2025
 * ✅ Problem: Intersection of Two Arrays II
 * You are given two integer arrays nums1 and nums2.
 * You must return an array that represents their intersection, meaning:
 *      ✔ Include only the elements that appear in both arrays
 *      ✔ If a number appears k times in both, it must appear k times in the output
 *      ✔ Output order doesn’t matter
 * Example 1:
 *      nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 *      output: [2, 2]
 *      explanation: nums1 has two 2’s, nums2 has two 2’s ----> Intersection also gets two 2’s.
 * Example 2:
 *      nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
 *      output: [4, 9]
 *      explanation:
 *          4 appears once in nums1 and twice in nums2, → take min → 1 time
 *          9 appears once in nums1 and twice in nums2. → take min → 1 time
 */

function findIntersection(nums1, nums2) {
  if (!nums1 || !nums2) return [];
  if (nums1.length === 0 || nums2.length === 0) return [];

  const freq = new Map();
  const result = [];
  // Frequency of nums1 items
  for (let item of nums1) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }

  // If freq has item, then include in final result
  for (let item of nums2) {
    if (freq.has(item)) {
      result.push(item);
      const count = freq.get(item);
      // If only 1 occurance, then remove item from freq
      // Else decrement the value by 1
      if (count === 1) {
        freq.delete(item);
      } else {
        freq.set(item, count - 1);
      }
    }
  }

  return result;
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(
  `Intersection of [${nums1}] & [${nums2}] is: [${findIntersection(
    nums1,
    nums2
  )}]`
);

(nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
console.log(
  `Intersection of [${nums1}] & [${nums2}] is: [${findIntersection(
    nums1,
    nums2
  )}]`
);
