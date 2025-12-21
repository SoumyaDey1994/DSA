/**
 * Date: 21st Dec, 2025
 * Problem statement:
 *      Given an expression having brackets,
 *  check if the expression is balanced or not
 */

function isExpressionBalanced(expr) {
  if (!expr || expr.length === 0) return false;

  const bracketsMap = new Map();
  bracketsMap.set(")", "(");
  bracketsMap.set("}", "{");
  bracketsMap.set("]", "[");

  const stack = [];
  const brackets = new Set(["(", ")", "{", "}", "[", "]"]);
  for (let char of expr) {
    if (!brackets.has(char)) continue;

    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      const recent = stack.pop();
      if (bracketsMap.get(char) !== recent) {
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
