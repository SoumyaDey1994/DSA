/**
 * Date: 1st Aug, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigzagWord(str, noRows) {
  if (!str || str.length === 0 || noRows === 0) return;
  if (noRows === 1) return str;

  let isDown = true,
    counter = 0;
  let result = new Array(noRows).fill("");

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    result[counter] = result[counter] + curr;

    if (counter === 0) {
      isDown = true;
    }

    if (counter === noRows - 1) {
      isDown = false;
    }

    counter = counter + (isDown ? 1 : -1);
  }

  return result.join("");
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
