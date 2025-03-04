/**
 * Date: 22nd Jan, 2025
 * Given an numeric value denoting heighest value,
 * find out the count of numenetor/denomenetor forming proper fraction
 */

function getCountOfProperFraction(value) {
  let count = 0;
  for (let i = 1; i < value; i++) {
    for (let j = i + 1; j <= value; j++) {
      if (getHcf(i, j) === 1) {
        // console.log(`${i}/${j}`);
        count++;
      }
    }
  }
  return count;
}

function getHcf(num, deno) {
  if (num === 0) return deno;
  else return getHcf(deno % num, num);
}

let maxNum = 5;
let countOfProperFraction = getCountOfProperFraction(maxNum);
console.log(
  `Count of proper fraction with range ${maxNum} is: ${countOfProperFraction}`
);

maxNum = 8;
countOfProperFraction = getCountOfProperFraction(maxNum);
console.log(
  `Count of proper fraction with range ${maxNum} is: ${countOfProperFraction}`
);
