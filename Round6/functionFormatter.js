/**
 * Date: 10th Dec, 2025
 * Given a named function definition,
 * print the whole function code as it is but
 * with adding @ as suffix & prefix
 * Example:
 *      input: function myFunction() { console.log(`Hello World`); }
 *              console.log(1 + myFunction + 2);
 *      output: 1@myFunction() { console.log(`Hello World`); }@2
 */
function myFunction() { console.log(`Hello World`); }
function skdFunction() { console.log(`Hello SKD !!!`); }


Function.prototype.originalToString = Function.prototype.toString;

Function.prototype.toString = (function(funcArg){
    return function() {
        return `@${funcArg.originalToString()}@`
    };
})(myFunction);


console.log(1+ myFunction + 2);

Function.prototype.toString = (function(funcArg){
    return function() {
        return `---${funcArg.originalToString()}---`
    };
})(skdFunction);

console.log(78+ skdFunction + 78);

