/**
 * Date: 16th Feb, 2026
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(...args) {
  let total = args.reduce((acc, curr) => acc + curr, 0);

  return function inner(...args2) {
    if (args2.length === 0) return total;

    total = total + args2.reduce((acc, curr) => acc + curr, 0);
    // return sum(total);
    return inner;
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

result = sum(5, 7)(1)(2, 3, 4)();
console.log(`Sum of ${`sum(5, 7)(1)(2, 3, 4)()`} is ${result}`);
