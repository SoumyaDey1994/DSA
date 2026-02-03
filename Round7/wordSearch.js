/**
 * Date: 3rd Feb, 2026
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
function isWordExists(board, word) {
  if (!board || board.length === 0 || board[0].length === 0) return;

  const rowCount = board.length,
    colCount = board[0].length;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (board[row][col] === word[0] && isExists(board, word, row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}

function isExists(board, word, row, col, index) {
  const rowCount = board.length,
    colCount = board[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] !== word[index]
  )
    return false;

  if (index === word.length) return true;

  const temp = board[row][col];
  // mark as visited
  board[row][col] = "#";

  const isWordPresent = [
    isExists(board, word, row - 1, col, index + 1) || // top
      isExists(board, word, row + 1, col, index + 1) || // bottom
      isExists(board, word, row, col - 1, index + 1) || // left
      isExists(board, word, row, col + 1, index + 1), // right
  ];

  board[row][col] = temp;

  return isWordPresent;
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word1 = "ABCCED";
let isPresent = isWordExists(board, word1);
console.log(`Word ${word1} exists in board: ${isPresent}`);

board = [
  ["H", "E", "L", "L", "O"],
  ["T", "H", "E", "R", "E"],
  ["A", "B", "C", "D", "E"],
];
word1 = "HELLO";
word2 = "THERE";
word3 = "WORLD";

console.log(`Word ${word1} exists in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordExists(board, word3)}`);

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

console.log(`Word ${word1} exists in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} exists in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} exists in board: ${isWordExists(board, word3)}`);
console.log(`Word ${word4} exists in board: ${isWordExists(board, word4)}`);
console.log(`Word ${word5} exists in board: ${isWordExists(board, word5)}`);
console.log(`Word ${word6} exists in board: ${isWordExists(board, word6)}`);

board = [
  ["A", "B"],
  ["C", "D"],
];
word1 = "ABCD";
console.log(`Word ${word1} exists in board: ${isWordExists(board, word1)}`);
