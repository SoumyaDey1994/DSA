/**
 * Date: 24th March, 2025
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
function getNextPermutation(input) {
  if (input.length <= 1) return input;

  const length = input.length;
  let indexOfTobeSwappedElement = -1;
  // find which element tobe swapped
  for (let index = length - 1; index > 0; index--) {
    // O(n): n=No of elements
    if (input[index] > input[index - 1]) {
      indexOfTobeSwappedElement = index - 1;
      break;
    }
  }

  if (indexOfTobeSwappedElement === -1) return input.reverse();
  let indexOfSwapElement = -1;
  // find with which element we can swap the target element
  for (let index = length - 1; index > indexOfTobeSwappedElement; index--) {
    // O(n): n=No of elements
    if (input[index] > input[indexOfTobeSwappedElement]) {
      indexOfSwapElement = index;
      break;
    }
  }
  // Perform the swap
  const temp = input[indexOfTobeSwappedElement];
  input[indexOfTobeSwappedElement] = input[indexOfSwapElement];
  input[indexOfSwapElement] = temp;
  // Return the final array by reversing the remaining part
  return [
    ...input.slice(0, indexOfTobeSwappedElement + 1),
    ...input.slice(indexOfTobeSwappedElement + 1).reverse(),
  ];
}

let input = [1, 2, 3];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);

input = [3, 2, 1];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);

input = [1, 5, 4, 3, 2];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);

input = [2, 1, 5, 3, 2, 0];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);

input = [6];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);

input = [7, 8];
console.log(
  `Next permutation of [${input}] is: [${getNextPermutation(input)}]`
);
