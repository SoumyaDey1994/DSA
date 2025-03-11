/**
 * Date: 10th March, 2025
 * Problem Statement: Longest Consecutive Sequence
 * given an unsorted array of integers. 
 * Your task is to find the length of the longest consecutive sequence (i.e., a subsequence of numbers that appear consecutively in increasing order).
 * Constraints:
 *      1. The sequence must consist of consecutive integers appearing anywhere in the array.
 *      2. The order of elements in the original array does not matter.
 *      3. The solution should have O(n) time complexity.
 * Example 1:
 *      Input: arr = [100, 4, 200, 1, 3, 2]
 *      Output: 4
 *      Explanation: The longest consecutive sequence is [1, 2, 3, 4] (length = 4).
 * Example 2:
 *      Input: arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23]
 *      Output: 5
 *      Explanation: The longest consecutive sequence is [19, 20, 21, 22, 23] (length = 5).
 */
function getLongestConsecSubseq(arr) { //O(n)
   if(arr.length === 0) return 0;

   let maxLength = 0;
   const numSet = new Set(arr);
   for(let num of arr) {
        // check if current num can be starting point
        if(!numSet.has(num-1)) {
            let currNum = num;
            let streak = 1;
            // check if immediate next no is also available in set
            // if yes, increase the streak & also currNum
            while(numSet.has(currNum + 1)) {
                currNum++;
                streak++;
            }

            maxLength = Math.max(maxLength, streak);
        }
   }
   return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
let output = getLongestConsecSubseq(arr);
console.log(`Longest Consecutive Subsequence length of [${arr}] is: ${output}`);

arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23];
output = getLongestConsecSubseq(arr);
console.log(`Longest Consecutive Subsequence length of [${arr}] is: ${output}`);

arr = [7];
output = getLongestConsecSubseq(arr);
console.log(`Longest Consecutive Subsequence length of [${arr}] is: ${output}`);

arr = [1, 2, 3, 4, 5, 6];
output = getLongestConsecSubseq(arr);
console.log(`Longest Consecutive Subsequence length of [${arr}] is: ${output}`);

arr = [10, 100, 1000];
output = getLongestConsecSubseq(arr);
console.log(`Longest Consecutive Subsequence length of [${arr}] is: ${output}`);
