/**
 * Date: 11th July, 2026
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
  const openingBrackets = new Set(["(", "{", "["]);

  const brackerPair = new Map();
  brackerPair.set(")", "(");
  brackerPair.set("}", "{");
  brackerPair.set("]", "[");

  const executionStack = [];

  for (let i = 0; i < expression.length; i++) {
    const curr = expression[i];

    if (!bracketSet.has(curr)) continue;
    else if (openingBrackets.has(curr)) {
      executionStack.push(curr);
    } else {
      const topOfStack = executionStack.pop();
      if (brackerPair.get(curr) !== topOfStack) {
        return false;
      }
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
