/**
 * Date: 15th Feb, 2026
 * Problem Statement: Next Permutation
 * This problem asks us to find the next lexicographically greater permutation of a given sequence of numbers.
 * If no greater permutation exists (i.e., the sequence is the largest possible permutation),
 * we must return the smallest permutation (sorted in ascending order).
 * Example 1:
 *      input = [1, 2, 3]
 *      output = [1, 3, 2]
 *      Explanation: The next permutation of [1, 2, 3] is [1, 3, 2].
 * Example 2:
 *      input = [3, 2, 1]
 *      output = [1, 2, 3]
 *      Explanation: [3, 2, 1] is the highest permutation, so we return the smallest [1, 2, 3].
 * Example 3:
 *      input = [1, 5, 4, 3, 2]
 *      output = [2, 1, 3, 4, 5]
 *      Explanation: We must find the next higher arrangement by modifying the sequence minimally.
 */
function findNextPermutation(input) {
  if (!input || input.length <= 1) return input;

  let targetIndex = -1;
  // find index of element to be swapped- O(n)
  for (let i = input.length - 1; i > 0; i--) {
    if (input[i] > input[i - 1]) {
      targetIndex = i - 1;
      break;
    }
  }

  if (targetIndex === -1) {
    return input.reverse();
  }
  // reverse input from targetIndex to last element - O(n)
  for (let j = targetIndex + 1, k = input.length - 1; j < k; j++, k--) {
    const temp = input[j];
    input[j] = input[k];
    input[k] = temp;
  }
  // swap targetIndex element with next greater element in list - O(n)
  for (let x = targetIndex + 1; x < input.length; x++) {
    if (input[x] > input[targetIndex]) {
      [input[x], input[targetIndex]] = [input[targetIndex], input[x]];
      break;
    }
  }

  return input;
}

let input = [1, 2, 3];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [3, 2, 1];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [1, 3, 2];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [1, 5, 4, 3, 2];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [3, 1, 4, 3, 2];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [2, 5, 9, 7, 6, 1];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);

input = [2, 5, 6, 7, 9, 8, 7, 6, 4];
console.log(
  `Next Permutation of [${input}] is: [${findNextPermutation(input)}]`,
);
