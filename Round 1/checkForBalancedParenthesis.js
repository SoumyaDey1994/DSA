/**
 * Date: 15th Jan, 2025
 * Given an expression as string,
 * find the given parenthesis are balanced or not
 * Note: Use Stack for this
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
    return this;
  }

  pop() {
    const element = this.stack.pop();
    return element;
  }

  top() {
    return this.#size() === 0 ? -1: this.stack[this.stack.length - 1];
  }

  #size() {
    return this.stack.length;
  }

  getElements() {
    const topOfStack = this.top();
    if(topOfStack === -1) return null;

    let result = '';
    const size = this.#size();
    for(let i=size-1; i>0; i--) {
        result = result + this.stack[i] + "-->";
    }
    return result + this.stack[0];
  }
}

function isExpressionBalanced(expression) {
  const length = expression.length;
  const stack = new Stack();
  const brackets = ["[", "]", "{", "}", "(", ")"];
  const pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (let i = 0; i < length; i++) {
    const char = expression[i];
    // Ignore characters except bracket
    if (!brackets.includes(char)) continue;

    if (char === "(" || char === "{" || char === "[") stack.push(char);

    if (char === ")" || char === "}" || char === "]") {
      const stackElement = stack.pop();
      if (stackElement !== pairs.get(char)) return false;
    }
  }
  return true;
}

let expr = "([])";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

expr = "(){}([])";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

expr = "([(])";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

expr = "(()))";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

expr = "[{(a+b)*(c+d)}-{(e+f)}]";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

expr = "[{(a+b)*(c+d)-(e+f}]";
console.log(`Expression ${expr} is balanced: ${isExpressionBalanced(expr)}`);

console.log("\n\n");

const myStack = new Stack();
console.log(`Beginning: Top of myStack: ${myStack.top()}`);
myStack.push('Soumya').push('SKD').push('Aakash');
console.log(`After Push: Top of myStack: ${myStack.top()}`);
console.log(`Stak Elements: ${myStack.getElements()}`);
// console.log(`Size of Stak: ${myStack.size()}`);
const element = myStack.pop();
console.log("Popped Element: ", element);
console.log(`After Pop: Top of myStack: ${myStack.top()}`);
console.log(`Stak Elements: ${myStack.getElements()}`);
// console.log(`Size of Stak: ${myStack.size()}`);
