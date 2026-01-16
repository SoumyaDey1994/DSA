/**
 * Date: 16th Jan, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function findZigZagFormat(str, noRows) {
  if (!str || str.length === 0 || noRows > str.length) return str;

  const output = new Array(noRows).fill("");

  let isDown = false,
    arrIndex = 0;

  for (const char of str) {
    if (arrIndex === 0) {
      isDown = true;
    }

    if (arrIndex === noRows - 1) {
      isDown = false;
    }

    output[arrIndex] = output[arrIndex] + char;

    arrIndex = arrIndex + (isDown ? 1 : -1);
  }

  return output.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = findZigZagFormat(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 4;
str = "HELLOZIGZAG";
output = findZigZagFormat(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 1;
str = "ABCDEFG";
output = findZigZagFormat(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 5;
str = "ABCD";
output = findZigZagFormat(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = findZigZagFormat(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

/**
 * G G
 * E R E
 * E O E
 * K F K
 * S   S
 */
