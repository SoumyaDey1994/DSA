/**
 * Date: 26th May, 2025
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

console.log(`Original Function: `, myFunction.toString());

Function.prototype.originalFuncToString = Function.prototype.toString;

Function.prototype.toString = (function () {
  return function () {
    return `@${Function.originalFuncToString()}@`;
  };
})();

console.log(`Formatted Function: ${myFunction.toString()}`);
