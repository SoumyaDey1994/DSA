/**
 * Date: 12th Feb, 2026
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
  if (!expr || expr.length === 0) return false;

  const bracketSet = new Set(["{", "}", "[", "]", "(", ")"]);
  const pairs = new Map();
  pairs.set("}", "{");
  pairs.set("]", "[");
  pairs.set(")", "(");

  const openingBrackets = new Set(pairs.values());
  const stack = [];

  for (let char of expr) {
    if (!bracketSet.has(char)) continue;

    if (openingBrackets.has(char)) {
      stack.push(char);
    } else {
      const topOfStack = stack.pop();
      if (topOfStack !== pairs.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
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
