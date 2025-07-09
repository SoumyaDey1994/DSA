/**
 * Date: 9th July, 2025
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function convertZigzag(str, noRows) {
  if (!str || str.length === 0 || noRows === 0) return;

  if (noRows === 1) return str;

  let isDown = true,
    rowNo = 0;
  const temp = new Array(noRows).fill("");
  for (let i = 0; i < str.length; i++) {
    temp[rowNo] = temp[rowNo] + str[i];
    if (rowNo === 0) isDown = true;
    if (rowNo === noRows - 1) isDown = false;
    rowNo = rowNo + (isDown ? 1 : -1);
  }

  return temp.join("");
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
