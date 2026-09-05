/**
 * Date: 5th September, 2026
 * Problem Statement: Number to Excel Column Title Conversion
 * Given an integer value (column number),
 * Return its corresponding column title as it appears in an Excel sheet.
 * Example 1:
 *      Input: n = 1
 *      Output: "A"
 * Example 2:
 *      Input: n = 28
 *      Output: "AB"
 * Example 2:
 *      Input: n = 701
 *      Output: "ZY"
 */
function getExcelColumnTitle(number) {
  if (!number || number === 0) return;

  let columnTitle = "";

  while (number > 0) {
    const rem = (number - 1) % 26;
    columnTitle = String.fromCharCode(65 + rem) + columnTitle;
    number = Math.floor((number - 1) / 26);
  }

  return columnTitle;
}

let num = 1;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 28;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 26;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 20;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 701;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 9;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 870;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);
