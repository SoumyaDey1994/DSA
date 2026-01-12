/**
 * Date: 12th Jan, 2026
 * Flattern an array elements without using .flat() method
 */

function flattern(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (Array.isArray(curr)) {
      //   output.push(...flattern(curr));
      output = output.concat(flattern(curr));
    } else {
      output.push(curr);
    }
  }

  return output;
}

let arr = [1, 3, [4, 5], 6, [7, 8, [9]]];
console.log(flattern(arr));
