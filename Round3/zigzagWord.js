/**
 * Date: 3rd April, 2025
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigzagWord(str, numRows) {
  if (numRows <= 1) return str;
  const aux = new Array(numRows).fill("");
  let isDown;
  let currRow = 0;
  for (let i = 0; i < str.length; i++) {
    aux[currRow] = aux[currRow] + str[i];

    if (currRow === 0) isDown = true;
    if (currRow === aux.length - 1) isDown = false;

    currRow = currRow + (isDown ? 1 : -1);
  }

  return aux.join("");
}

let str = "PAYPALISHIRING",
  noRows = 3;
console.log(`Zigzag version of ${str} becomes: ${getZigzagWord(str, noRows)}`);

noRows = 4;
str = "HELLOZIGZAG";
output = getZigzagWord(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 1;
str = "ABCDEFG";
output = getZigzagWord(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 5;
str = "ABCD";
output = getZigzagWord(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 5;
str = "GEEKSFORGEEKS";
output = getZigzagWord(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);