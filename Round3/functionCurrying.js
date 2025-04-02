/**
 * Date: 2nd April, 2025
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(num1) {
  return function (num2) {
    if (!num2) return num1 || 0;
    else return sum(num1 + num2);
  };
}

let output = sum(1)(2)(3)();
console.log(`Output of sum(1)(2)(3)() ==> ${output}`);

output = sum(1)(2)(3)(4)(5)();
console.log(`Output of sum(1)(2)(3)(4)(5)() ==> ${output}`);

output = sum(5)(7)(4)(4)();
console.log(`Output of sum(5)(7)(4)(4)() ==> ${output}`);

output = sum(1)();
console.log(`Output of sum(1)() ==> ${output}`);

output = sum()();
console.log(`Output of sum()() ==> ${output}`);
