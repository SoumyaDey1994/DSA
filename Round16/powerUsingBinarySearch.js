/**
 * Date: 3rd September, 2026
 * Problem Statemet: Pow(base, exp) using Binary Search
 * Find Power of a given base using Binary Search approach with O(logn) time complexity
 * Example 1:
 *    Input: base=2, power=10
 *    Output: 1024
 * Example 2:
 *    Input: base=5, power=0
 *    Output: 1
 * Example 3:
 *    Input: base=2, power= -3
 *    Output: 0.125
 */
function findExpValue(base, power) {
    if(base === 0) return 0;
    if(power === 0) return 1;
    if(power < 0) return 1 / findExpValue(base, -power);

    let output = 1;
    while(power > 0) {
        if(power % 2 === 1) {
            output = output * base;
        }

        base = base * base;
        power = Math.floor(power/2);
    }

    return output;
}

// Test cases
console.log(`Power of 2^10 is: ${findExpValue(2, 10)}`); // 1024
console.log(`Power of 3^5 is: ${findExpValue(3, 5)}`); // 243
console.log(`Power of 5^0 is: ${findExpValue(5, 0)}`); // 1
console.log(`Power of 2^(-3) is: ${findExpValue(2, -3)}`); // 0.125
console.log(`Power of 7^1 is: ${findExpValue(7, 1)}`); // 7
console.log(`Power of 5^7 is: ${findExpValue(5, 7)}`); // 78125
console.log(`Power of 2^8 is: ${findExpValue(2, 8)}`); // 78125

