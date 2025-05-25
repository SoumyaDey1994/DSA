/**
 * Date: 25th May, 2025
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
function convNumToExcelColTitle(num) {
  if (!num || num === 0) return;

  const ALPHABET_COUNT = 26,
    ASCII_START = 65;
  let title = "";
  while (num > 0) {
    const rem = (num - 1) % ALPHABET_COUNT;
    title = String.fromCharCode(rem + ASCII_START) + title;
    num = Math.floor((num - 1) / ALPHABET_COUNT);
  }

  return title;
}

let num = 1;
console.log(
  `Excel Column Title of ${num}th column is: ${convNumToExcelColTitle(num)}`
);

num = 28;
console.log(
  `Excel Column Title of ${num}th column is: ${convNumToExcelColTitle(num)}`
);

num = 701;
console.log(
  `Excel Column Title of ${num}th column is: ${convNumToExcelColTitle(num)}`
);

num = 703;
console.log(
  `Excel Column Title of ${num}th column is: ${convNumToExcelColTitle(num)}`
);
