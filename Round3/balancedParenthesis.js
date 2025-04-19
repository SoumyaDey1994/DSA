/**
 * Date: 4th March, 2025
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

function isExprBalanced(expr) {
  // if expression is invalid, then return early
  if (!expr || expr.trim().length === 0) return;

  const stack = [];
  const parenthesisPair = new Map();
  parenthesisPair.set(")", "(");
  parenthesisPair.set("}", "{");
  parenthesisPair.set("]", "[");

  // Create set of parenthesis to avoid processing non-parenthesis chars
  // O(N): N=no of chars in expression
  const parenthesisSet = new Set([
    ...parenthesisPair.keys(),
    ...parenthesisPair.values(),
  ]);

  expr = expr.trim();
  // O(N): N=no of chars in expression
  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];

    if (!parenthesisSet.has(char)) continue;
    // If opening brackets, push to stock
    // Else, pick top element of stack, compare with curr char
    // if its proper open-close parenthesis pair, continue,
    // else return false
    if (char === ")" || char === "}" || char === "]") {
      const stackTop = stack.pop();
      if (parenthesisPair.get(char) !== stackTop) return false;
    } else {
      stack.push(char);
    }
  }
  // if stack length = 0 after processing, then expression is balanced
  return stack.length === 0;
}

let expr = "{}[()]";
console.log(`Expression ${expr} is Balanced: ${isExprBalanced(expr)}`);

expr = "[a+{(b-c)+(d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isExprBalanced(expr)}`);

expr = "[a+{(b-c)+d-e)}]";
console.log(`Expression ${expr} is Balanced: ${isExprBalanced(expr)}`);

expr = "[a+{b-c)+(d-e}]";
console.log(`Expression ${expr} is Balanced: ${isExprBalanced(expr)}`);

expr = "(m * [p+q]-[r+s]/a * {x-y})";
console.log(`Expression ${expr} is Balanced: ${isExprBalanced(expr)}`);
