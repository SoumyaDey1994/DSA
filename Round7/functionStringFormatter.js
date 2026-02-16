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

function another() {
  console.log(`Hello Soumya`);
}

Function.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = (function () {
  return function () {
    return `@${this.originalToString()}@`;
  };
})();

console.log(1 + myFunction + 2);

console.log(10 + another + 20);
