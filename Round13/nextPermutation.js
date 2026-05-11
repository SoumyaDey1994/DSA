/**
 * Date: 11th May, 2026
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
  if (!input || input.length === 0) return;

  let indexToBeSwapped = -1;
  const inputLength = input.length;
  for (let i = inputLength - 1; i > 0; i--) {
    if (input[i] > input[i - 1]) {
      indexToBeSwapped = i - 1;
      break;
    }
  }

  if (indexToBeSwapped === -1) {
    return input.reverse();
  }

  for (let j = indexToBeSwapped + 1, k = inputLength - 1; j < k; j++, k--) {
    const temp = input[j];
    input[j] = input[k];
    input[k] = temp;
  }

  for (let j = indexToBeSwapped + 1; j < inputLength; j++) {
    if (input[j] > input[indexToBeSwapped]) {
      const temp = input[j];
      input[j] = input[indexToBeSwapped];
      input[indexToBeSwapped] = temp;

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
