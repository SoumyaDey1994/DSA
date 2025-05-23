/**
 * Date: 23rd May, 2025
 * Count and Say - Efficient JavaScript Solution
 * Problem Statement: 
 *      The Count and Say sequence is defined recursively as follows:
 *      countAndSay(1) = "1"
 *      countAndSay(n) is obtained by describing the previous term (countAndSay(n-1)) using the format 
 *      "count of digit + digit itself".
 * Explanation:
 *      countAndSay(1) = "1"
        countAndSay(2) = "11" → One occurrence of 1
        countAndSay(3) = "21" → Two occurrences of 1
        countAndSay(4) = "1211" → One occurrences of 2, One occurrences of 1
        countAndSay(5) = "111221" → One occurrences of 1, One occurrences of 2, Two occurrences of 1
 */
function getCountAndReadString(num) {
  if (!num || num <= 0) return;

  let output = "1";
  for (let i = 2; i <= num; i++) {
    let counter = 1;
    let currentStr = "";
    for (let j = 0; j < output.length; j++) {
      if (j < output.length - 1 && output[j] === output[j + 1]) {
        counter++;
      } else {
        currentStr = currentStr + counter + output[j];
        counter = 1;
      }
    }
    output = currentStr;
  }

  return output;
}

let num = 2;
console.log(`Count & Say format of ${num} is: ${getCountAndReadString(num)}`);

num = 3;
console.log(`Count & Say format of ${num} is: ${getCountAndReadString(num)}`);

num = 5;
console.log(`Count & Say format of ${num} is: ${getCountAndReadString(num)}`);

num = 1;
console.log(`Count & Say format of ${num} is: ${getCountAndReadString(num)}`);

num = 10;
console.log(`Count & Say format of ${num} is: ${getCountAndReadString(num)}`);
