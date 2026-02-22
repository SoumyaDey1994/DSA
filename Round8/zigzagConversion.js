/**
 * Date: 22nd Feb, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigzagPattern(str, noRows) {
  if (!str || str.length === 0) return "";
  if (noRows <= 1) return str;

  let isDown = true,
    output = new Array(noRows).fill("");
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];

    if (counter === 0) isDown = true;
    if (counter === noRows - 1) isDown = false;

    output[counter] = output[counter] + currChar;
    counter = counter + (isDown ? 1 : -1);
  }

  return output.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = getZigzagPattern(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 4;
str = "HELLOZIGZAG";
output = getZigzagPattern(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 1;
str = "ABCDEFG";
output = getZigzagPattern(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "ABCD";
output = getZigzagPattern(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = getZigzagPattern(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

/**
 * G G
 * E R E
 * E O E
 * K F K
 * S   S
 */
