/**
 * Date: 2nd Jan, 2026
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(num1) {
  return function (num2) {
    if (!num2) {
      return num1 ?? 0;
    } else {
      return sum(num1 + num2);
    }
  };
}

let result = sum(1)(2)(3)();
console.log(`Sum of ${`sum(1)(2)(3)`} is ${result}`);

result = sum(1)(2)(3)(4)(5)();
console.log(`Sum of ${`sum(1)(2)(3)(4)(5)`} is ${result}`);

result = sum(5)(7)(4)(4)();
console.log(`Sum of ${`sum(5)(7)(4)(4)`} is ${result}`);

result = sum()();
console.log(`Sum of ${`sum()()`} is ${result}`);

result = sum(5)();
console.log(`Sum of ${`sum(5)()`} is ${result}`);
