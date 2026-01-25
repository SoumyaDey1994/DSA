/**
 * Date: 25th Jan, 2026
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(...args1) {
  let initialTotal = args1.reduce((acc, curr) => acc + curr);
  return function inner(...args2) {
    if (args2.length === 0) {
      return initialTotal;
    } else {
      initialTotal = initialTotal + args2.reduce((acc, curr) => acc + curr);
      return inner;
      // return sum(initialTotal);
    }
  };
}

let result = sum(1)(2)(3)();
console.log(`Sum of ${`sum(1)(2)(3)`} is ${result}`);

result = sum(1)(2)(3)(4)(5)();
console.log(`Sum of ${`sum(1)(2)(3)(4)(5)`} is ${result}`);

result = sum(5)(7)(4)(4)();
console.log(`Sum of ${`sum(5)(7)(4)(4)`} is ${result}`);

result = sum(5, 6)(7)(4, 5)(4)();
console.log(`Sum of ${`sum(5, 6)(7)(4, 5)(4)()`} is ${result}`);

result = sum(1)(2, 3, 4)(5, 6)(7, 8, 9, 10)();
console.log(`Sum of ${`sum(1)(2, 3, 4)(5, 6)(7, 8, 9, 10)()`} is ${result}`);
