/**
 * Date: 4th April, 2025
 * Problem Statement: JS Function Definition Formatter
 * Given a named function definition,
 * print the whole function code as it is but
 * with adding @ as suffix & prefix
 * Example:
 *      input: function myFunction() { console.log(`Hello World`); }
 *              console.log(1 + myFunction + 2);
 *      output: 1@@@myFunction() { console.log(`Hello World`); }@@@2
 */

function myFunction() {
  console.log(`Hello World`);
}

Function.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = (function (func) {
  return function () {
    const originalStringify = func.originalToString();
    return `@@@${originalStringify}@@@`;
  };
})(myFunction);

console.log(1 + myFunction + 2);
console.log(1 + "2" + myFunction + 2 + "4" + "Hello");
