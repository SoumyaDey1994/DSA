/**
 * Date: 20th Jan, 2025
 * Given a decimal value, find out
 * iff the decimal & its binary equivalent
 * both are palindrome or not
 * Note: Single digit decimal values are considered palindrome
 */

function isDualPalindrome(num) {
  const binary = num.toString(2);
  const decimal = num.toString();
//   console.log(binary, decimal);
  if (isPalindrome(decimal) && isPalindrome(binary)) return true;
  else return false;
}

function isPalindrome(str) {
  const length = str.length;
//   console.log("length: ", length);
  let flag = true;
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    // console.log(str[i], str[j]);
    if (str[i] !== str[j]) {
      flag = false;
      break;
    }
  }
//   console.log(flag);
  return flag;
}

let number = 9;
console.log(`Is ${number} dual palindrome: ${isDualPalindrome(number)}`);

number = 15;
console.log(`Is ${number} dual palindrome: ${isDualPalindrome(number)}`);

number = 11;
console.log(`Is ${number} dual palindrome: ${isDualPalindrome(number)}`);

number = 10;
console.log(`Is ${number} dual palindrome: ${isDualPalindrome(number)}`);

number = 33;
console.log(`Is ${number} dual palindrome: ${isDualPalindrome(number)}`);
