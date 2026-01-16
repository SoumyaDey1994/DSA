/**
 * Date: 16th Jan, 2026
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
  if (nums1.length === 0 || nums2.length === 0) return [];

  const num1FreqMap = new Map();
  let output = [];
  for (let num of nums1) {
    num1FreqMap.set(num, (num1FreqMap.get(num) || 0) + 1);
  }

  for (let num of nums2) {
    if (num1FreqMap.has(num)) {
      //   console.log(`Common element ${num}`);
      output.push(num);
      const freq = num1FreqMap.get(num);
      if (freq === 1) {
        num1FreqMap.delete(num);
      } else {
        num1FreqMap.set(num, freq - 1);
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

(nums1 = [1, 3, 5, 6, 7]), (nums2 = [5, 9, 2, 1, 5, 6, 1, 2, 9]);
console.log(
  `Intersection of [${nums1}] & [${nums2}] is: [${findIntersection(
    nums1,
    nums2
  )}]`
);
