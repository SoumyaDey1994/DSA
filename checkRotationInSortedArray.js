/**
 * Given an array of integers,
 * check if the array is rotated
 * If yes, return no of times it is rotated
 */

function getRotation(nums) {
    const length = nums.length;
    let low = 0, high = length - 1;
    while(low <= high) {
        if(nums[low] <= nums[high]) return low; // case 1
        const mid = Math.floor((low+high)/2);
        const prev = (mid-1+length)%length;
        const next = (mid+1)%length;
        // if mid is less than both prev & next, then it's the junction point
        if(nums[mid] <= nums[prev] && nums[mid] <= nums[next]) { // case 2
            return mid;
        } else if(nums[mid] >= nums[low]) {
            low = mid+1; // case 3
        } else {
            high = mid-1; // case 4
        }
    }
    return -1; // for invalid input array
}

let nums = [8, 9, 10, 12, 4, 5, 6, 7];
let output = getRotation(nums);
console.log(`Array [${nums}] rotated ${output} times`);

nums = [1, 2, 3, 4, 5];
output = getRotation(nums);
console.log(`Array [${nums}] rotated ${output} times`);

nums = [10, 9, 8, 7];
output = getRotation(nums);
console.log(`Array [${nums}] rotated ${output} times`);

nums = [15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 12];
output = getRotation(nums);
console.log(`Array [${nums}] rotated ${output} times`);

nums = [3, 3];
output = getRotation(nums);
console.log(`Array [${nums}] rotated ${output} times`);
