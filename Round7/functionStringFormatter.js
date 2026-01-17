/**
 * Date: 17th Jan, 2026
 * Given a named function definition,
 * print the whole function code as it is but
 * with adding @ as suffix & prefix
 * Example:
 *      input: function myFunction() { console.log(`Hello World`); }
 *              console.log(1 + myFunction + 2);
 *      output: 1@myFunction() { console.log(`Hello World`); }@2
 */
function myFunction() {
  console.log(`Hello World`);
}

Function.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = (function (fn) {
  return function () {
    return `@${fn.originalToString()}@`;
  };
})(myFunction);

console.log(1 + myFunction + 2);
