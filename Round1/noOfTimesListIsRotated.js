/**
 * Date: 10th Jan, 2025
 * Given an list of numbers
 * and this is in sorted order
 * find out how many times the array is rotated
 * Return -1 if its invalid array of elements
 * Input:
 *    arr = [15, 16, 18, 2, 4, 5, 7, 9, 10]
 *    element = 7
 */
function getRotationCount(arr) { // TC- O(nlogn)
    let low=0, high = arr.length -1;
    while(low <= high) {
        const mid = Math.floor((low+high)/2);
        // if mid is smaller than its left & right, then mid is the ans
        if(arr[mid] < arr[mid-1] && arr[mid] < arr[mid+1]) {
            return mid;
        } else if(arr[mid] < arr[high]) {
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return 0;
}

let arr = [15, 16, 18, 2, 4, 5, 7, 9, 10];
let rotationCount = getRotationCount(arr);
console.log(`List [${arr}] rotated ${rotationCount} times`);

arr = [2, 4, 5, 7, 9, 10];
rotationCount = getRotationCount(arr);
console.log(`List [${arr}] rotated ${rotationCount} times`);

arr = [20];
rotationCount = getRotationCount(arr);
console.log(`List [${arr}] rotated ${rotationCount} times`);

arr = [20, 15, 16, 18];
rotationCount = getRotationCount(arr);
console.log(`List [${arr}] rotated ${rotationCount} times`);

arr = [12, 10];
rotationCount = getRotationCount(arr);
console.log(`List [${arr}] rotated ${rotationCount} times`);

/**
 * Closure example
 * @param {*} value 
 * @returns 
 */
function outer(value) {
    function getSqrt(val) {
        return Math.sqrt(val);
    }

    function getFloor(val) {
        return Math.floor(val);
    }

    return function inner(operation) {
        if (operation === "sqrt") return getFloor(getSqrt(value));
        else return getFloor(value);
    }
}

const closure = outer(51.9);
const output = closure("sqrt");
console.log("Output: ", output);
