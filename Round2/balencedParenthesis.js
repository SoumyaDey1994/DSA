/**
 * Date: 4th March, 2025
 * Problem statement:
 *      Given an expression having brackets, 
 *  check if the expression is balanced or not
 */
function isBalanced(expression) {
    const stack = new Array();
    const complement = new Map();
    complement.set(")", "(");
    complement.set("}", "{");
    complement.set("]", "[");
    const brackets = new Set(["(", ")", "{", "}", "[", "]"]);
    let isBalanced = true;
    for(let i=0; i<expression.length; i++) {
        const char = expression[i];
        if(!brackets.has(char)) continue;

        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            const topOfStack = stack.pop();
            // console.log(char, topOfStack);
            if(complement.get(char) !== topOfStack) {
                isBalanced = false;
                break;
            }
        }
    }
    return isBalanced;
}

let expr = "{}[()]";
console.log(`Expression ${expr} is Balanced: ${isBalanced(expr)}`);

expr = "[a+{(b-c)+(d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isBalanced(expr)}`);


expr = "[a+{(b-c)+d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isBalanced(expr)}`);


expr = "[a+{b-c)+(d-e}]";
console.log(`Expression ${expr} is Balanced: ${isBalanced(expr)}`);


expr = "(m * [p+q]-[r+s]/a * {x-y})";
console.log(`Expression ${expr} is Balanced: ${isBalanced(expr)}`);
