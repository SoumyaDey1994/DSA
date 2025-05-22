/**
 * Date: 22nd May, 2025
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigZagStringRep(str, numRows) {
  if (!str || str.length === 0) return;
  if (numRows <= 1 || str.length < numRows) return str;

  let arr = new Array(numRows).fill("");
  let isDown = false,
    index = 0;

  for (let char of str) {
    arr[index] = arr[index] + char;
    // toggle movement down/up against index value
    if (index === 0) isDown = true;
    if (index === numRows - 1) isDown = false;
    // if moving down, increment index, else decrement
    index = index + (isDown ? 1 : -1);
  }

  return arr.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = getZigZagStringRep(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 4;
str = "HELLOZIGZAG";
output = getZigZagStringRep(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 1;
str = "ABCDEFG";
output = getZigZagStringRep(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "ABCD";
output = getZigZagStringRep(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = getZigZagStringRep(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);
