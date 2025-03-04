/**
 * Date: 28th February, 2025
 * Problem Statement: Zigzag Conversion 
 * Given a string s and an integer numRows,
 * rearrange s in a zigzag pattern on a given number of rows and read row by row.
 * Example:
 *  Input: str = "PAYPALISHIRING", noRows = 3
 *  Output: "PAHNAPLSIIGYIR"
 */

function convertToZigzag(str, noRows) {
    // base case: if str < noRows, return str
    if(noRows === 1 || str.length <= noRows) return str;

    const rows = new Array(noRows).fill("");
    let isDown = false;
    let counter = 0;
    // Iterate over each char of str
    for(let char of str) {
        // append char to row
        rows[counter] = rows[counter] + char;
        // set flag against current row
        if(counter === 0) isDown = true;
        if(counter === noRows-1) isDown = false;
        // Increment or decrement current row
        counter = counter + (isDown ? 1: -1);
    }
    return rows.join("");
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

/**
 * G G
 * E R E
 * E O E
 * K F K
 * S   S
 */