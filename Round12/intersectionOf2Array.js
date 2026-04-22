/**
 * Date: 22nd April, 2026
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
  if (!nums1) return nums2;
  if (!nums2) return nums1;

  const output = [];
  const nums1Freq = new Map();
  for (const number of nums1) {
    nums1Freq.set(number, (nums1Freq.get(number) || 0) + 1);
  }

  for (let number of nums2) {
    if (nums1Freq.has(number)) {
      output.push(number);

      if (nums1Freq.get(number) === 1) {
        nums1Freq.delete(number);
      } else {
        nums1Freq.set(number, nums1Freq.get(number) - 1);
      }
    }
  }

  return output;
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
