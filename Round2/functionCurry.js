/**
 * Date: 1st March, 2025
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */

function sum(num) {
    // console.log("number 1", num);
    return function(num2) {
        // console.log("number 2", num2);
        if(!num2) {
            return num;
        } else {
            return sum(num + num2);
        }
    }
}

let result = sum(1)(2)(3)();
console.log(`Sum of ${`sum(1)(2)(3)`} is ${result}`);

result = sum(1)(2)(3)(4)(5)();
console.log(`Sum of ${`sum(1)(2)(3)`} is ${result}`);

result = sum(5)(7)(4)(4)();
console.log(`Sum of ${`sum(1)(2)(3)`} is ${result}`);
