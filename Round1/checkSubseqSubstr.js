/**
 * Date: 13th Jan, 2025
 * Given two strings A & B
 * need to check if B is subsequence of A or not
 * Note: B will be called subsequence of A
 * iff characters of B appear in same order in A
 */

function isSubsequence(str1, str2) {
  if (str2.length > str1.length) return false;

  let j = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[j]) {
      j++;
    }
  }
  return j === str2.length;
}
/**
 * Given two strings A & B
 * need to check if B is substring of A or not
 * Note: B will be called substring of A
 * iff characters of B appear in same continupus order in A
 */
function isSubString(str1, str2) {
  if (str2.length > str1.length) return false;

  let j = 0;
  for (let i = 0; i < str1.length && j < str2.length; i++) {
    // console.log("J = ", j);
    if (str1[i] === str2[j]) {
      j++;
    } else {
      j = 0;
    }
  }
//   console.log("J = ", j);
  return j === str2.length;
}

let str1 = "ABCA";
let str2 = "BA";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);

str1 = "GEEKSFORGEEKS";
str2 = "GKRKS";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);

str1 = "ABCDE";
str2 = "ADC";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);

str1 = "SOUMYA";
str2 = "UMY";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2,
    0,
    0
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);

str1 = "KARIM";
str2 = "KIRA";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2,
    0,
    0
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);

str1 = "GEEKSFORGEEKS";
str2 = "EEKS";
console.log(
  `String ${str2} is subsequence of string ${str1}: ${isSubsequence(
    str1,
    str2
  )}`
);
console.log(
  `String ${str2} is substring of string ${str1}: ${isSubString(str1, str2)}\n`
);