/**
 * Date: 2nd August, 2025
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
function getExcelColumnTitle(num) {
  if (!num || num === 0) return;

  let title = "";
  while (num > 0) {
    const rem = (num - 1) % 26;
    title = String.fromCharCode(65 + rem) + title;
    num = Math.floor((num - 1) / 26);
  }

  return title;
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

num = 701;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);

num = 9;
console.log(
  `Excel column title corresponding to ${num} is: ${getExcelColumnTitle(num)}`,
);
