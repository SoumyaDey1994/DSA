/**
 * Date: 3rd March, 2025
 * Given a named function definition,
 * print the whole function code as it is but
 * with adding @ as suffix & prefix
 * Example:
 *      input: function myFunction() { console.log(`Hello World`); }
 *              console.log(1 + myFunction + 2);
 *      output: 1@myFunction() { console.log(`Hello World`); }@2
 */

function myFunction() { console.log(`Hello World`); }
function add(a, b) { return a+b; }

// Store the original `toString()` before modifying it
Function.prototype.originalToString = Function.prototype.toString;
/**
 * Override toString() of Function prototype
 */
Function.prototype.toString = (function() {
    return function() {
        return `@${this.originalToString()}@`;
    };
})();

console.log(1 + myFunction + 2);
console.log("Sum method" + add);
console.log("Hello" + function() {return "Soumya Dey"} + "Greetings!!!!");
console.log("1" + "2" + "5");
console.log(`${()=>{return "hello"}}---${()=>{return "world"}}`);
