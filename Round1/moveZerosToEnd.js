/**
 * Date: 13th Jan, 2025
 * Given an array of numbers including 0s,
 * move all 0s to the end of array
 * Ex:
 *      I/P: [8,0,5,0,0,7]
 *      o/P: [8, 5, 7, 0, 0, 0]
 */

function moveZerosToEnd(nums) {
    const length = nums.length;
    let countOfNonZero = 0;
    for(let index=0; index<length; index++) {
        const element = nums[index];
        if(element !== 0) {
            ++countOfNonZero;
            [nums[index], nums[countOfNonZero-1]] = [nums[countOfNonZero-1], nums[index]];
        }
    }
    return nums;
}

let array = [8,0,5,0,0,7];
console.log(`After moving 0 to end [${array}] becomes: [${moveZerosToEnd(array)}]`);

array = [0, 0, 9, 0];
console.log(`After moving 0 to end [${array}] becomes: [${moveZerosToEnd(array)}]`);

array = [10, 20];
console.log(`After moving 0 to end [${array}] becomes: [${moveZerosToEnd(array)}]`);

array = [2, 0, 4, 5, 3, 0, 7, 0, 0, 12, 11, 0, 10, 9, 0, 0, 0, 15];
console.log(`After moving 0 to end [${array}] becomes: [${moveZerosToEnd(array)}]`);
