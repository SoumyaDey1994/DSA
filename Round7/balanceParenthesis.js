/**
 * Date: 8th Jan, 2026
 * Problem statement:
 *      Given an expression having brackets,
 *  check if the expression is balanced or not
 */
function isExpressionBalanced(expr) {
  if (!expr || expr.length === 0) return;

  const pairs = new Map();
  pairs.set(")", "(").set("}", "{").set("]", "[");
  const bracketSet = new Set([...pairs.entries()].flat());
  const openingBrackets = new Set(pairs.values());
  const stack = [];

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    if (!bracketSet.has(char)) continue;

    if (openingBrackets.has(char)) {
      stack.push(char);
    } else {
      const currBracket = stack.pop();
      if (pairs.get(char) !== currBracket) {
        return false;
      }
    }
  }

  return true;
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

expr = "{(a * b){(c + d)}";
console.log(`Expression ${expr} is Balanced: ${isExpressionBalanced(expr)}`);
