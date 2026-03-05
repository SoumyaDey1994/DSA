/**
 * Date: 5th March, 2025
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function convertToZigzag(inputStr, noRows) {
  if (!inputStr || inputStr.length === 0) return;

  let isDown = true,
    counter = 0;
  const result = new Array(noRows).fill("");

  for (let i = 0; i < inputStr.length; i++) {
    if (counter === 0) isDown = true;
    if (counter === noRows - 1) isDown = false;

    result[counter] = result[counter] + inputStr[i];

    counter = counter + (isDown ? 1 : -1);
  }

  return result.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = convertToZigzag(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 4;
str = "HELLOZIGZAG";
output = convertToZigzag(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 1;
str = "ABCDEFG";
output = convertToZigzag(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "ABCD";
output = convertToZigzag(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = convertToZigzag(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

