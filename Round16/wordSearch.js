/**
 * Date: 12th September, 2026
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
  if (!board || board.length === 0) return;
  if (!word || word.length === 0) return;

  const rowCount = board.length,
    colCount = board[0].length;

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (board[i][j] === word[0] && traverse(board, word, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

function traverse(board, word, row, col, wordIndex) {
  const rowCount = board.length,
    colCount = board[0].length;
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] !== word[wordIndex]
  )
    return false;

  if (wordIndex === word.length - 1) return true;

  const temp = board[row][col]; // note the matched char
  board[row][col] = "#"; // hide the matches char & move on

  const isExists =
    traverse(board, word, row - 1, col, wordIndex + 1) ||
    traverse(board, word, row + 1, col, wordIndex + 1) ||
    traverse(board, word, row, col - 1, wordIndex + 1) ||
    traverse(board, word, row, col + 1, wordIndex + 1);

  board[row][col] = temp; // backtrack
  return isExists;
}

let board = [
  ["H", "E", "L", "L", "O"],
  ["T", "H", "E", "R", "C"],
  ["D", "E", "R", "O", "W"],
];
console.log();

let word1 = "HELLO";
let word2 = "CROW";
let word3 = "THERE";
let word4 = "HERO";
let word5 = "WORLD";

console.log(`Word ${word1} present in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordExists(board, word3)}`);
console.log(`Word ${word4} present in board: ${isWordExists(board, word4)}`);
console.log(`Word ${word5} present in board: ${isWordExists(board, word5)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log();

word1 = "ABCCED";
word2 = "SEE";
word3 = "ABCB";
console.log(`Word ${word1} present in board: ${isWordExists(board, word1)}`);
console.log(`Word ${word2} present in board: ${isWordExists(board, word2)}`);
console.log(`Word ${word3} present in board: ${isWordExists(board, word3)}`);

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log();
word1 = "SEE";
word2 = "BEE";
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
