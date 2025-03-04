/**
 * Date: 28th February, 2025
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
        countAndSay(4) = "1211" → One 2, One 1
        countAndSay(5) = "111221" → One 1, One 2, Two 1s
 */
function getCountAndSayString(num) {
  let result = "1";
  for (let i = 2; i <= num; i++) {
    let countToBeSaid = 1;
    let current = "";
    for (let j = 0; j < result.length; j++) {
       // console.log(`Count ${countToBeSaid} of digit ${result[j]}`);
       if (j < result.length - 1 && result[j] === result[j + 1]) {
              countToBeSaid++;
       } else {
              current = current + countToBeSaid + result[j];
              countToBeSaid = 1;
       }
    }
    result = current;
  }
  return result;
}

let num = 2;
let output = getCountAndSayString(num);
console.log(`Count to be said for ${num} is ${output}`);

num = 3;
output = getCountAndSayString(num);
console.log(`Count to be said for ${num} is ${output}`);

num = 5;
output = getCountAndSayString(num);
console.log(`Count to be said for ${num} is ${output}`);

num = 10;
output = getCountAndSayString(num);
console.log(`Count to be said for ${num} is ${output}`);
