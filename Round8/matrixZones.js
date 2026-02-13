/**
 * Date: 13th Feb, 2026
 * 📌 Problem Statement — Set Matrix Zeroes
 * You are given an m x n 2D array matrix.
 * If any element is 0, you must set its entire row and entire column to 0.
 * You must modify the matrix in-place (i.e., change the given matrix itself, not return a new one).
 * Example 1:
 *   Input:
 *  [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
    Output:
*   [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
    ]  
 * Example 2:
 *  Input:
 *  [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]
    Output:
    [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
    ]          
 */
function setMatrixZones(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

  let isFirstRowHas0 = false,
    isFirstColHas0 = false;
  const rowCount = matrix.length,
    colCount = matrix[0].length;

  // Check if first col has 0 or not
  for (let row = 0; row < rowCount; row++) {
    if (matrix[row][0] === 0) {
      isFirstColHas0 = true;
      break;
    }
  }

  // Check if first row has 0 or not
  for (let col = 0; col < colCount; col++) {
    if (matrix[0][col] === 0) {
      isFirstRowHas0 = true;
      break;
    }
  }

  // transpose the matrix
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // If First column has 0
  for (let row = 1; row < rowCount; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < colCount; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // If First row has 0
  for (let col = 1; col < colCount; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rowCount; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // if first row has 0, set the whole row to 0
  if (isFirstRowHas0) {
    for (let col = 0; col < colCount; col++) {
      matrix[0][col] = 0;
    }
  }

  // if first col has 0, set the whole col to 0
  if (isFirstColHas0) {
    for (let row = 0; row < rowCount; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZones(matrix));

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZones(matrix));

// Test case 1: Example given
const test1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log("Test 1 - Input:", JSON.stringify(test1));
setMatrixZones(test1);
console.log("Test 1 - Output:", JSON.stringify(test1));
console.log("Test 1 - Expected: [[1,0,1],[0,0,0],[1,0,1]]");
console.log(
  "Test 1 - Pass:",
  JSON.stringify(test1) === "[[1,0,1],[0,0,0],[1,0,1]]" ? "✓" : "✗",
);
console.log("---");

// Test case 2: Zero in first row
const test2 = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log("Test 2 - Input:", JSON.stringify(test2));
setMatrixZones(test2);
console.log("Test 2 - Output:", JSON.stringify(test2));
console.log("Test 2 - Expected: [[0,0,0],[0,1,1],[0,1,1]]");
console.log(
  "Test 2 - Pass:",
  JSON.stringify(test2) === "[[0,0,0],[0,1,1],[0,1,1]]" ? "✓" : "✗",
);
console.log("---");

// Test case 3: Zero in first column
const test3 = [
  [1, 1, 1],
  [0, 1, 1],
  [1, 1, 1],
];
console.log("Test 3 - Input:", JSON.stringify(test3));
setMatrixZones(test3);
console.log("Test 3 - Output:", JSON.stringify(test3));
console.log("Test 3 - Expected: [[0,1,1],[0,0,0],[0,1,1]]");
console.log(
  "Test 3 - Pass:",
  JSON.stringify(test3) === "[[0,1,1],[0,0,0],[0,1,1]]" ? "✓" : "✗",
);
console.log("---");

// Test case 4: Multiple zeros
const test4 = [
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
];
console.log("Test 4 - Input:", JSON.stringify(test4));
setMatrixZones(test4);
console.log("Test 4 - Output:", JSON.stringify(test4));
console.log("Test 4 - Expected: [[0,0,1],[0,0,0],[1,1,1]]");
console.log(
  "Test 4 - Pass:",
  JSON.stringify(test4) === "[[0,0,1],[0,0,0],[1,1,1]]" ? "✓" : "✗",
);
console.log("---");

// Test case 5: Zero at [0][0]
const test5 = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log("Test 5 - Input:", JSON.stringify(test5));
setMatrixZones(test5);
console.log("Test 5 - Output:", JSON.stringify(test5));
console.log("Test 5 - Expected: [[0,0,0],[0,1,1],[0,1,1]]");
console.log(
  "Test 5 - Pass:",
  JSON.stringify(test5) === "[[0,0,0],[0,1,1],[0,1,1]]" ? "✓" : "✗",
);
console.log("---");

// Test case 6: No zeros
const test6 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log("Test 6 - Input:", JSON.stringify(test6));
setMatrixZones(test6);
console.log("Test 6 - Output:", JSON.stringify(test6));
console.log("Test 6 - Expected: [[1,1,1],[1,1,1],[1,1,1]]");
console.log(
  "Test 6 - Pass:",
  JSON.stringify(test6) === "[[1,1,1],[1,1,1],[1,1,1]]" ? "✓" : "✗",
);
