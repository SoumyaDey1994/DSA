/**
 * Date: 22nd April, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function getZigzagWord(inputStr, noRows) {
  if (!inputStr || inputStr.length === 0 || noRows < 0) return;
  if (noRows <= 1) return inputStr;

  let isDown = true,
    counter = 0;
  const aux = new Array(noRows).fill("");

  for (let i = 0; i < inputStr.length; i++) {
    aux[counter] = aux[counter] + inputStr[i];
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
