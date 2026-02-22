/**
 * Date: 22nd Feb, 2026
 * Given a named function definition,
 * print the whole function code as it is but
 * with adding @ as suffix & prefix
 * Example:
 *      input: function myFunction() { console.log(`Hello World`); }
 *              console.log(1 + myFunction + 2);
 *      output: 1@myFunction() { console.log(`Hello World`); }@2
 */

Function.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = (function(){
    return function() {
        return `@${this.originalToString().trim()}@`;
    }
})();



function myFunction() { console.log(`Hello World`); }
function greet() { console.log(`Hi Soumya Dey!!`); }
function sayBye() { console.log(`Goodbye !!!`); }

console.log(1 + myFunction + 2);
console.log(11 + greet + 22);
console.log(101 + sayBye + 202);