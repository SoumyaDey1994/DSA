/**
 * Given an sorted array, which is rotated
 * find a given element & return its index
 * Input:
 *      nums = [15, 16, 18, 2, 4, 5, 7, 9, 10]
 *      element = 7
 */

function findElementInList(nums, element) {
    const length = nums.length;
    let low = 0, high = length - 1;
    while(low <= high) {
        const mid = Math.floor((low+high)/2);
        if(nums[mid] === element) { // if element in mid, return mid
            return mid;
        } else if(nums[mid] <= nums[high]) {    // if mid < high
            if(element > nums[mid] && element <= nums[high]) { // element > mid & < high
                low = mid+1;
            } else {
                high = mid-1;
            }
        } else {
            if(element <= nums[mid] && element > nums[low]) { // element <= mid & > low
                high = mid-1;
            } else {
                low = mid+1;
            }
        }
    }
    return -1;
}

let nums = [15, 16, 18, 2, 4, 5, 7, 9, 10];
let element = 7;
console.log(`Element ${element} index in list [${nums}] is: ${findElementInList(nums, element)}`);

element = 16;
console.log(`Element ${element} index in list [${nums}] is: ${findElementInList(nums, element)}`);
