/**
 * Date: 3rd October, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 * 
 *  Input: str = "HELLOZIGZAG", noRows = 2
 *  Output: "HLOIZGELZGA"
 */
function convertToZigzagFormat(inputStr, noRows) {
  if (noRows <= 0) return;
  if (!inputStr || inputStr.length === 0) return;

  let isDown = true,
    counter = 0;
  const output = new Array(noRows).fill("");

  for (let i = 0; i < inputStr.length; i++) {
    output[counter] = output[counter] + inputStr[i];
    if (counter === 0) {
      isDown = true;
    }

    if (counter === noRows - 1) {
      isDown = false;
    }

    counter = counter + (isDown ? 1 : -1);
  }

  return output.join("");
}

let rows = 3;
let str = "PAYPALISHIRING";
let output = convertToZigzagFormat(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 2;
str = "HELLOZIGZAG";
output = convertToZigzagFormat(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 2;
str = "ABCDEFG";
output = convertToZigzagFormat(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "ABCD";
output = convertToZigzagFormat(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

rows = 5;
str = "GEEKSFORGEEKS";
output = convertToZigzagFormat(str, rows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

/**
 * G G
 * E R E
 * E O E
 * K F K
 * S   S
 */
