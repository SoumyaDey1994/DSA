/**
 * Date: 7th March, 2025
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

function findNextPermutation(ip) { // O(n)
    const input = [...ip];
    const length = input.length;
    let changeIndex = -1;
    // identify at which index element need change
    for(let index=length-2; index >= 0; index--) {
        if(input[index] < input[index+1]) {
            changeIndex = index;
            break;
        }
    }
    if(changeIndex === -1) return input.reverse();

    let swapIndex = -1;
    // find the element to be swapped
    for(let index=length-1; index>changeIndex; index--) {
        if(input[index] > input[changeIndex]) {
            swapIndex = index;
            break;
        }
    }
    // Swap the element places
    // console.log(`Element ${input[changeIndex]} swapped with ${input[swapIndex]}`);
    [input[changeIndex], input[swapIndex]] = [input[swapIndex], input[changeIndex]];
    return [...input.slice(0, changeIndex+1), ...input.slice(changeIndex+1).reverse()];
}


let input = [1, 2, 3];
let output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);

input = [3, 2, 1];
output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);

input = [1, 5, 4, 3, 2];
output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);

input = [1, 1, 5];
output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);

input = [1, 8, 4, 6, 5, 2];
output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);

input = [2, 8, 7, 4, 3, 1];
output = findNextPermutation(input);
console.log(`Next permutation of [${input}] is: [${output}]`);
