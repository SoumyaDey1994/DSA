/**
 * Given an 2-D array of M rows & N cols,
 * print the array elements in spiral order
 * 
 * Input: 
 * [
 *      2, 4, 6, 8,
 *      10, 12, 14, 16,
 *      18, 20, 22, 24
 * ]
 * 
 * Output: 2, 4, 6, 8, 16, 24, 22, 20, 18, 10, 12, 14
 */

function printMatrixSpiralOrder(arr, m, n) {
    let low=0, high=m-1;
    let left=0; right=n-1;
    let direction = 0;
    while(low <= high && left <= right) {
        // dir=0, print all values of top row (left->right)
        if(direction === 0) {
            for(let i=left; i<=right; i++) {
                console.log(arr[low][i]);
            }
            low++;
        } else if(direction === 1) {
            // dir=1, print all values of right column (low -> high)
            for(let i=low; i<=high; i++) {
                console.log(arr[i][right]);
            }
            right--;
        } else if(direction === 2) {
            // dir=2, print all values of bottom row (right -> left)
            for(let i=right; i>=left; i--) {
                console.log(arr[high][i]);
            }
            high--;
        } else if(direction === 3) {
            // dir=3, print all values of left column (high -> low)
            for(let i=high; i>=low; i--) {
                console.log(arr[i][left]);
            }
            left++;
        }
        direction = (direction+1)%4;
    }
}

const arr = [
    [2, 4, 6, 8],
    [10, 12, 14, 16],
    [18, 20, 22, 24]
];

const rows = arr.length;
const cols = arr[0].length;
// console.log("cols=", cols);
printMatrixSpiralOrder(arr, rows, cols);
