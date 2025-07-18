/**
 * Date: 18th July, 2025
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
function convertNoToExcelColumnTitle(input) {
  if (!input) return;

  const noOfAlphabets = 26,
    initialCharCode = 65;
  let title = "";
  while (input > 0) {
    const rem = (input - 1) % noOfAlphabets;
    title = String.fromCharCode(initialCharCode + rem) + title;
    input = Math.floor((input - 1) / noOfAlphabets);
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
