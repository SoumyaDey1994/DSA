/**
 * Date: 8th June, 2025
 * Problem statement:
 *      Given an expression having brackets,
 *  check if the expression is balanced or not
 */
function checkForBalancedParenthesis(expression) {
  if (!expression || expression.length === 0) return;

  const pMap = new Map();
  pMap.set(")", "(");
  pMap.set("}", "{");
  pMap.set("]", "[");

  const pSet = new Set([")", "(", "}", "{", "]", "["]);
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (!pSet.has(char)) continue;

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const stackTop = stack.pop();
      if (stackTop !== pMap.get(char)) return false;
    }
  }
  return stack.length === 0;
}

let expr = "{}[()]";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);

expr = "[a+{(b-c)+(d-e)}]";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);

expr = "[a+{(b-c)+d-e)}]";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);

expr = "[a+{b-c)+(d-e}]";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);

expr = "(m * [p+q]-[r+s]/a * {x-y})";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);

expr = "{(a * b){(c + d)}";
console.log(`Expression ${expr} is Balanced: ${checkForBalancedParenthesis(expr)}`);
