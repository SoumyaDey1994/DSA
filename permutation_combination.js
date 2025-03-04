/**
 * Given an input string s,
 * find out all permutations &
 * find out all combinations of length k
 */

function getPermutations(input) {
    if(input.length === 0) return [''];

    const result = [];
    for(let index=0; index<input.length; index++) {
        const char = input[index];
        const remaining = input.slice(0, index) + input.slice(index+1);
        // console.log("Remaining: ", remaining);
        const remPermutations = getPermutations(remaining);
        // console.log("remPermutations: ", remPermutations);
        for(let remP of remPermutations) {
            // console.log("Perm: ", char + remP);
            result.push(char + remP);
        }
    }
    return result;
}

function getCombinations(input, size) {
    if(size===0) return [""];
    if(input.length === 0) return [];

    const curr = input[0];
    const remaining = input.slice(1);
    // With & without
    const combWithCurrent = getCombinations(remaining, size-1).map(comb => curr+comb);
    const combWithoutCurrent = getCombinations(remaining, size);

    return [...combWithCurrent, ...combWithoutCurrent];
}

const input = 'dave';
const permutations = getPermutations(input);
console.log(`Permutations of ${input} are: [${permutations}]: ${permutations.length}`);
const combinations = getCombinations(input, 3);
console.log(`Combinations of ${input} are: [${combinations}]: ${combinations.length}`);
