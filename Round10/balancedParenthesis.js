/**
 * Date: 17th March, 2026
 * Problem statement:
 *      Given an expression having brackets,
 *  check if the expression is balanced or not
 */
function isExpressionBalanced(expr) {
  if (!expr || expr.length === 0) return false;

  const bracketPair = new Map();
  bracketPair.set("}", "{");
  bracketPair.set("]", "[");
  bracketPair.set(")", "(");

  const bracketSet = new Set([...bracketPair.keys(), ...bracketPair.values()]);
  const openingBracketSet = new Set([...bracketPair.values()]);
  const stack = [];

  for (let index = 0; index < expr.length; index++) {
    const currChar = expr[index];

    if (!bracketSet.has(currChar)) continue;

    if (openingBracketSet.has(currChar)) {
      stack.push(currChar);
    } else {
      const topOfStack = stack.pop();
      if (
        bracketPair.has(currChar) &&
        bracketPair.get(currChar) !== topOfStack
      ) {
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

