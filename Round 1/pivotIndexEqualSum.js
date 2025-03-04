/**
 * Find Pivot Index: 
 * Determine the index where the sum of the numbers on the left is equal to the sum on the right.
 */
// Time Complexity: O(n) where n=num of elements in list
function findPivot(arr) {
    // if list has 1 element, then pivot doesn't exists
    if(arr.length === 1) return 0;

    const total = arr.reduce((sum, ele) => sum+ele, 0);
    let currSum = 0;
    // Check for currentsum === complement
    for(let index=0; index<arr.length; index++) {
        const complement = total - currSum - arr[index];
        if(complement === currSum) {
            return index;
        }
        currSum += arr[index];
    }
    return -1;
}

let nums = [1, 7, 3, 6, 5, 6];
let pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);

nums = [1, 2, 3];
pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);

nums = [2, 1, -1];
pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);

nums = [0, 0, 0, 0, 0];
pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);

nums = [-1, -1, -1, 0, 1, 1];
pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);

nums = [20];
pivot = findPivot(nums);
console.log(`Pivot Index of list [${nums}] is: ${pivot}`);
