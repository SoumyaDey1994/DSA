/**
 * Date: 10th March, 2025
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
    let columnTitle = "";
    while(num > 0) {
        const rem = (num-1)%26;
        columnTitle = String.fromCharCode(65+rem) + columnTitle;
        num = Math.floor((num-1)/26);
    }
    return columnTitle;
}

let num = 1;
console.log(`Excel Column Title of ${num}th column is: ${getExcelColumnTitle(num)}`);

num = 28;
console.log(`Excel Column Title of ${num}th column is: ${getExcelColumnTitle(num)}`);

num = 701;
console.log(`Excel Column Title of ${num}th column is: ${getExcelColumnTitle(num)}`);

num = 703;
console.log(`Excel Column Title of ${num}th column is: ${getExcelColumnTitle(num)}`);