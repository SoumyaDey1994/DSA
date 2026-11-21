/**
 * Date: 21st November, 2026
 * Problem statement: Balanced Parenthesis
 *  Given an expression having brackets,
 *  check if the expression is balanced or not
 * Example 1:
 *      expr = "{}[()]"
 *      output = true
 * Example 2:
 *      expr = "[a+{(b-c)+(d-e)}]"
 *      output = true
 * Example 3:
 *      expr = "[a+{(b-c)+d-e)}]"
 *      output = false
 */
function isExpressionBalanced(expression) {
  if (!expression || expression.length === 0) return;

  const bracketSet = new Set(["(", "{", "[", "]", "}", ")"]);
  const brackerPair = new Map();
  brackerPair.set(")", "(");
  brackerPair.set("}", "{");
  brackerPair.set("]", "[");

  const openingBrackets = new Set(brackerPair.values());
  const executionStack = [];

  for (let i = 0; i < expression.length; i++) {
    const currChar = expression[i];
    if (!bracketSet.has(currChar)) continue;

    if (openingBrackets.has(currChar)) {
      executionStack.push(currChar);
    } else {
      topOfStack = executionStack.pop();
      if (brackerPair.get(currChar) !== topOfStack) return false;
    }
  }

  return executionStack.length === 0;
}

let expr = "{}[()]";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);

expr = "[a+{(b-c)+(d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);

expr = "[a+{(b-c)+d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);

expr = "[a+{b-c)+(d-e}]";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);

expr = "(m * [p+q]-[r+s]/a * {x-y})";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);
