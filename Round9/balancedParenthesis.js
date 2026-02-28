/**
 * Date: 28th Feb, 2026
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

  const bracketSet = new Set(["[", "{", "(", ")", "}", "]"]);
  const brackerPair = new Map();
  brackerPair.set(")", "(");
  brackerPair.set("}", "{");
  brackerPair.set("]", "[");

  const openingBrackets = new Set(brackerPair.values());

  const stack = [];

  for (let i = 0; i < expr.length; i++) {
    const currChar = expr[i];

    if (!bracketSet.has(currChar)) continue;
    if (openingBrackets.has(currChar)) {
      stack.push(currChar);
    } else {
      const complementChar = stack.pop();
      if (brackerPair.get(currChar) !== complementChar) return false;
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
