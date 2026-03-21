/**
 * Date: 21st March, 2026
 * Problem Statement: Zigzag Conversion
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */
function convertToZigzag(str, noRows) {
  if (!str || str.length === 0) return;
  if (noRows === 1) return str;

  let isDown = false,
    counter = 0;
  let aux = new Array(noRows).fill("");

  for (let i = 0; i < str.length; i++) {
    if (counter === 0) isDown = true;
    if (counter === noRows - 1) isDown = false;

    aux[counter] = aux[counter] + str[i];

    counter = counter + (isDown ? 1 : -1);
  }

  //   console.log(aux);
  return aux.join("");
}

let str = "PAYPALISHIRING",
  noRows = 3;
console.log(
  `Zigzag version of ${str} becomes: ${convertToZigzag(str, noRows)}`,
);

noRows = 4;
str = "HELLOZIGZAG";
output = convertToZigzag(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 2;
str = "ABCDEFG";
output = convertToZigzag(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 5;
str = "ABCD";
output = convertToZigzag(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);

noRows = 5;
str = "GEEKSFORGEEKS";
output = convertToZigzag(str, noRows);
console.log(`Zigzag formatting of ${str} is: ${output}`);
