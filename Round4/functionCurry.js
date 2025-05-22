/**
 * Date: 22nd May, 2025
 * Write a JS method to get sum of passed arguments.
 * No of function calls can be any
 * Example:
 *      sum(1)(2)(3)() ==> 6
 *      sum(1)(2)(3)(4)(5)() ==> 15
 *      sum(5)(7)(4)(4)() ==> 20
 */
function sum(a) {
  return function (b) {
    if (!b) {
      return a || 0;
    } else {
      return sum(a + b);
    }
  };
}
console.log("sum(1)(2)(3)(): ", sum(1)(2)(3)());

console.log("sum(1)(2)(3)(4)(5)(): ", sum(1)(2)(3)(4)(5)());

console.log("sum(5)(7)(4)(4)(): ", sum(5)(7)(4)(4)());

console.log("sum(1)(): ", sum(1)());

console.log("sum()(): ", sum()());

console.log("sum(1)(3)(5)(7)(8)(9)(): ", sum(1)(3)(5)(7)(8)(9)());
