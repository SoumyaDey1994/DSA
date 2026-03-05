/**
 * Date: 5th March, 2026
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
  if (!nums1 || nums1.length === 0 || !nums2 || nums2.length === 0) return [];

  const result = [];
  const freqMap = new Map();
  for (let num of nums1) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    if (freqMap.has(num)) {
      result.push(num);

      if (freqMap.get(num) === 1) {
        freqMap.delete(num);
      } else {
        freqMap.set(num, freqMap.get(num) - 1);
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
    nums2,
  )}]`,
);

((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]));
console.log(
  `Intersection of [${nums1}] & [${nums2}] is: [${findIntersection(
    nums1,
    nums2,
  )}]`,
);

((nums1 = [1, 3, 5, 7]), (nums2 = [2, 4, 5, 6, 8]));
console.log(
  `Intersection of [${nums1}] & [${nums2}] is: [${findIntersection(
    nums1,
    nums2,
  )}]`,
);
