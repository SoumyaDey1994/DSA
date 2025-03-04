/**
 * Date: 08/01/2025
 * Given a integer number N having x digits,
 * find immediate next integers with same digits
 * If N is the largest with set of x digits, return -1
 *
 * Example:
 *  input: 12364
 *  output: 12436
 */
function getImmediateGreaterInteger(inputNum) {
  if (inputNum.toString().length === 1) return -1;

  let digits = getDigits(inputNum);

  let pivotIndex = null;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      pivotIndex = i - 1;
      break;
    }
  }

  if (pivotIndex === null) return -1;

  const unModifiedSubArr = digits.slice(0, pivotIndex + 1);
  const sortedSubArr = digits.slice(pivotIndex + 1).sort((a, b) => a - b);
  digits = [...unModifiedSubArr, ...sortedSubArr];

  // Find first element > Pivot
  const immediateGreaterThenPivotIndex = sortedSubArr.findIndex(
    (item) => item > digits[pivotIndex]
  );
  // SWAP Pivot <-> immediateGreaterThenPivot element
  [
    digits[pivotIndex],
    digits[unModifiedSubArr.length + immediateGreaterThenPivotIndex],
  ] = [
    digits[unModifiedSubArr.length + immediateGreaterThenPivotIndex],
    digits[pivotIndex],
  ];
  return parseInt(digits.join(""));
}

function getDigits(num) {
  const result = [];
  while (num > 0) {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

let input = 123;
let output = getImmediateGreaterInteger(input);
console.log(`Immediate next integer of ${input} is: ${output}`);

input = 12364;
output = getImmediateGreaterInteger(input);
console.log(`Immediate next integer of ${input} is: ${output}`);

input = 534331;
output = getImmediateGreaterInteger(input);
console.log(`Immediate next integer of ${input} is: ${output}`);
