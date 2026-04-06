/**
 * Date: 6th April, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigzagWord(str, noRows) {
  if (!str || str.length === 0) return;
  if (noRows === 1 || noRows > str.length) return str;

  let counter = 0,
    isDown = true;
  const aux = new Array(noRows).fill("");

  for (let i = 0; i < str.length; i++) {
    aux[counter] = aux[counter] + str[i];
    if (counter === 0) {
      isDown = true;
    }
    if (counter === noRows - 1) {
      isDown = false;
    }
    counter = counter + (isDown ? 1 : -1);
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
