/**
 * Date: 28th March, 2025
 * Problem Statement: Word Search Problem
 * Given a m x n grid of characters (board) and a word (word), 
 * return true if the word exists in the grid. 
 * The word must be constructed from adjacent cells (horizontally or vertically), 
 * and the same cell cannot be used more than once.
 * Example 1:
 *      board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"]
        ];
        word1 = "ABCCED";
            Output: true
            Explanation: The word "ABCCED" exists in the board
        word2 = "SEE";
            Output: true
            Explanation: The word "SSE" exists in the board
        word3 = "ABCB";
            Output: false
            Explanation: The word "ABCB" doesn't exists in the board
 * Example 2:
 *      board = [
            ["H", "E", "L", "L", "O"],
            ["T", "H", "E", "R", "E"],
            ["A", "B", "C", "D", "E"]
        ];
        word1 = "HELLO";
            Output: true
        word2: "THERE"
            Output: true
        word3: "WORLD"
            Output: false
 */
function isExists(matrix, word, row, col, index = 0) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  // base case: invalid row/col & current char != target word char
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    matrix[row][col] !== word[index]
  ) {
    return false;
  }
  // Base case: when last index is reached
  if (index === word.length) return true;

  const tempChar = matrix[row][col];
  // mark the char as visited
  matrix[row][col] = "#";
  // Traverse through the matrix vertically & horizontally
  // and look if word is formed
  const isFound = [
    isExists(matrix, word, row, col - 1, index + 1) || // check left
      isExists(matrix, word, row, col + 1, index + 1) || // check right
      isExists(matrix, word, row - 1, col, index + 1) || // check top
      isExists(matrix, word, row + 1, col, index + 1), // check bottom
  ];

  //backtrack by replacing the original char
  matrix[row][col] = tempChar;
  return isFound;
}

function isWordPresent(matrix, word) {
  if (!matrix || matrix.length === 0) return false;

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  // start from first char of target word
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (matrix[i][j] === word[0] && isExists(matrix, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word1 = "ABCCED";
let isWordExists = isWordPresent(board, word1);
console.log(`Word ${word1} exists in board: ${isWordExists}`);

board = [
  ["H", "E", "L", "L", "O"],
  ["T", "H", "E", "R", "E"],
  ["A", "B", "C", "D", "E"],
];
word1 = "HELLO";
word2 = "THERE";
word3 = "WORLD";

console.log(`Word ${word1} exists in board: ${isWordPresent(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordPresent(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordPresent(board, word3)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
word1 = "SEE";
word2 = "BEEP";
word3 = "ECE";
word4 = "CSE";
word5 = "DFS";
word6 = "BFS";

console.log(`Word ${word1} exists in board: ${isWordPresent(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordPresent(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordPresent(board, word3)}`);
console.log(`Word ${word4} exists in board: ${isWordPresent(board, word4)}`);
console.log(`Word ${word5} exists in board: ${isWordPresent(board, word5)}`);
console.log(`Word ${word6} exists in board: ${isWordPresent(board, word6)}`);

board = [
    ['A', 'B'],
    ['C', 'D']
];
word1 = "ABDC";
console.log(`Word ${word1} exists in board: ${isWordPresent(board, word1)}`);
