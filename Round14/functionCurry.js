/**
 * Date: 28th June, 2026
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(...nums1) {
  let total = nums1.reduce((acc, curr) => acc + curr, 0);

  return function inner(...nums2) {
    if (nums2.length === 0) return total;

    total = total + nums2.reduce((acc, curr) => acc + curr);
    return inner;
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
