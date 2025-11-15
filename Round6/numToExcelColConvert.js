/**
 * Date: 15th Nov, 2025
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

function convertNoToExcelColumnTitle(num) {
  if (!num || num === 0) return null;

  let title = "";
  while (num > 0) {
    const rem = (num - 1) % 26;
    const charCode = String.fromCharCode(65 + rem);
    title = charCode + title;
    num = Math.floor((num - 1) / 26);
  }
  return title;
}

let num = 1;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);

num = 28;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);

num = 701;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);

num = 703;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);

num = 726;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);

num = 700;
console.log(
  `Excel Column Title of ${num}th column is: ${convertNoToExcelColumnTitle(
    num
  )}`
);
