/**
 * A peak element in an array is an element that is strictly greater than its neighbors.
 * You are tasked with finding any one peak element and returning its index. 
 * If the array contains multiple peaks, returning the index of any of them is valid.
 * 
 * Ex: 
 *      I/P: nums = [1, 2, 3, 1]
 *      o/P: 2 (element 3)
 */
function getPeakElementIndex(input) {
    let low=0, high = input.length - 1;
    while(low < high) {
        const mid = Math.floor((low+high)/2);
        if(input[mid] < input[mid+1]) {
            low = mid+1;
        } else {
            high = mid;
        }
    }
    return low;
}

let input = [1, 2, 3, 1];
let output = getPeakElementIndex(input);
console.log(`Peak element present at index: ${output}, element: ${input[output]}`);

input = [4, 2, 1];
output = getPeakElementIndex(input);
console.log(`Peak element present at index: ${output}, element: ${input[output]}`);

input = [1, 2, 1, 3, 5, 6, 4];
output = getPeakElementIndex(input);
console.log(`Peak element present at index: ${output}, element: ${input[output]}`);
