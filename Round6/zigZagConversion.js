/**
 * Date: 13th Nov, 2025
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */

function convertZigzag(str, rows) {
  if (!str || str.length === 0) return;

  if (rows >= str.length) return str;

  const arr = new Array(rows).fill("");
  let down = true;
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    arr[counter] = arr[counter] + str[i];
    if (counter === 0) {
      down = true;
    }
    if (counter === rows - 1) {
      down = false;
    }

    counter = counter + (down ? 1 : -1);
  }

  return arr.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = convertZigzag(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 4;
str = "HELLOZIGZAG";
output = convertZigzag(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 1;
str = "ABCDEFG";
output = convertZigzag(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 5;
str = "ABCD";
output = convertZigzag(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = convertZigzag(str, rows);
console.log(`Zigzag formatting of ${str} with ${rows} rows is: ${output}`);
