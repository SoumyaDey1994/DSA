/**
 * Given an integer, find all unique prime factors
 */

function getPrimeFactors(number) {
  if (number < 2) return;

  const maxPossibleDivisor = Math.floor(Math.sqrt(number));
  const primeFactors = new Set();
  for (let index = 2; index <= maxPossibleDivisor; index++) {
    while (number % index === 0) {
      primeFactors.add(index);
      number = number / index;
    }
  }

  if (number > 2) {
    primeFactors.add(number);
  }
  return primeFactors;
}

function getPrimeFactorsOptimized(number) {
  if (number < 2) return;

  const maxPossibleDivisor = Math.floor(Math.sqrt(number));
  const primeFactors = new Set();

  while (number % 2 === 0) {
    primeFactors.add(2);
    number = number / 2;
  }

  while (number % 3 === 0) {
    primeFactors.add(3);
    number = number / 3;
  }

  for (let index = 5; index <= maxPossibleDivisor; index = index + 6) {
    while (number % index === 0) {
      primeFactors.add(index);
      number = number / index;
    }

    while (number % (index + 2) === 0) {
      primeFactors.add(index + 2);
      number = number / (index + 2);
    }
  }

  if (number > 3) {
    primeFactors.add(number);
  }
  return primeFactors;
}

let number = 121;
let primeFactors = getPrimeFactors(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);

number = 5016;
primeFactors = getPrimeFactors(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);

number = 107525;
primeFactors = getPrimeFactors(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);

number = 97;
primeFactors = getPrimeFactorsOptimized(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);

number = 9603;
primeFactors = getPrimeFactorsOptimized(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);

number = 19251;
primeFactors = getPrimeFactorsOptimized(number);
console.log(`Prime factors of ${number} are: ${[...primeFactors]}`);
