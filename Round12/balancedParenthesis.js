/**
 * Date: 28th April, 2026
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
function isExpressionBalanced(expr) {
  if (!expr || expr.length === 0) return;

  const parenthesisSet = new Set(["[", "]", "{", "}", "(", ")"]);
  const openingParenthesisSet = new Set(["[", "{", "("]);
  const pairs = new Map();
  pairs.set("]", "[");
  pairs.set("}", "{");
  pairs.set(")", "(");

  const executionStack = [];
  for (let i = 0; i < expr.length; i++) {
    const curr = expr[i];
    if (!parenthesisSet.has(curr)) continue;

    if (openingParenthesisSet.has(curr)) {
      executionStack.push(curr);
    } else {
      topOfStack = executionStack.pop();
      if (topOfStack && pairs.get(curr) !== topOfStack) {
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
