/**
 * You are given an array of integers nums. Return an array answer such that:
    answer[i] is equal to the product of all elements of nums except nums[i].
    You must solve it without using division and in 𝑂(𝑛) time.
    Example 1:
    Input:
        nums = [1, 2, 3, 4]
    Output:
        [24, 12, 8, 6]
*/

function getProductWithoutSelf(nums) {
    const length = nums.length;
    let prefix = 1;
    let result = new Array(length).fill(0);
    for(let i=0; i<length; i++) {
        // console.log("Prefix: ", prefix, "Index: ", i);
        result[i] = prefix;
        prefix = prefix * nums[i];
    }
    // console.log("After Prefix: ", result);

    let suffix = 1;
    for(let i=length-1; i>=0; i--) {
        // console.log("Suffix: ", suffix, "Index: ", i);
        result[i] = result[i] * suffix;
        suffix = suffix * nums[i];
    }
    // console.log("After Suffix: ", result);
    return result;
}

let nums = [1, 2, 3, 4];
let result = getProductWithoutSelf(nums);
console.log(`Product of [${nums}] except self is: [${result}]`);

nums = [-1, 1, 0, -3, 3];
result = getProductWithoutSelf(nums);
console.log(`Product of [${nums}] except self is: [${result}]`);
